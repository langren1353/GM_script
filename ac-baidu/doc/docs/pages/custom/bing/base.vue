<template>
  <div>
      <el-form :model="state" label-width="auto" style="max-width: 800px">
        <el-text class="mx-1" size="large" style="padding-bottom: 16px" tag="div">显示设置项：</el-text>
        
        <el-form-item for="nothing" label="独有1-必应-独有优化配置项" label-position="left">
          <el-tooltip class="box-item" effect="dark" :hide-after=20 content="启用后会优化bing，包括XXX" placement="right">
            <el-switch inline-prompt size="large" v-model="state.optimizeBing" active-text="开启" inactive-text="关闭"/>
          </el-tooltip>
        </el-form-item>
  
        <el-divider />
        <el-form-item for="nothing" label="必应护眼模式" label-position="left">
          <el-tooltip class="box-item" effect="dark" :hide-after=20 content="必应护眼模式，注意根据不同的主题，请自己选择" placement="top">
            <div style="display: flex">
               <el-switch inline-prompt size="large" v-model="state.HuYanMode" active-text="开启" inactive-text="关闭"/>
              <div v-show="state.HuYanMode" style="margin-left: 30px; display: flex; align-items: center">
                <el-color-picker v-model="state.HuYanMode_Color" />

                <label data-value="#3A3A3A" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label data-value="#212121" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label data-value="#000000" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>

                <label data-value="#DEF1EF" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label data-value="#F3F2EE" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <label data-value="#E5E5E5" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
              </div>
            </div>
          </el-tooltip>
        </el-form-item>
        
        <el-divider />
        <ads-mode-choose :state="state" :baseItemKey="baseItemKey" @update_state="updateState" />
        <bg-choose :state="state" :baseItemKey="baseItemKey" @update_state="updateState" />
        
        <el-divider />
        <less-c-s-s-comp siteName="必应" :baseItemKey="baseItemKey" :state="state" :recommendStyleList="recommendStyleList" @update_state="updateState"/>
      </el-form>
      <save-alert siteName="必应" :saveKey="baseItemKey" :saveData="state" />
    </div>
</template>
<script setup lang="ts">
import BgChoose from "./../components/BgChoose.vue";
import SaveAlert from "./../components/SaveAlert.vue";
import LessCSSComp from "./../components/LessCSSComp/index.vue";
import AdsModeChoose from "./../components/AdsModeChoose.vue";

const baseItemKey = 'op_bing'
// const baseData = JSON.parse(localStorage.getItem(baseItemKey) || '{}')
const baseData = {}
const scriptData = await safeFunc(() => window.AC_GM_Interface.get(baseItemKey, '{}'))
import {onMounted, reactive, watch} from 'vue'

const base = reactive({
  bigImgShow: false,
  bigImgSrc: '',
  dialogWelcome: false,
  lessCompileRes: true,
  hasChanged: false,
})

const defaultOptions = {
  optimizeBing: true,

  adsStyleEnable: true, // 是否开启默认效果优化
  adsStyleMode: '1', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
  HuYanMode: false, // 护眼模式-必应
  HuYanMode_Color: '#ffffff', // 护眼模式-必应-颜色

  BgEnable: false, // 背景图-是否启用
  BgUseUrl: '', // 默认背景图
  BgFit: true, // 背景图-是否适应
  BgBase64Image: '', // 背景图-Base64的结果

  customStyleEnable: false, // 自定义样式-是否启用
  customStyleLink: '', // 自定义样式链接
  customStyleLess: '', // 自定义样式链接
}

const state = reactive(Object.assign({}, defaultOptions, baseData, scriptData))

const recommendStyleList = [
  {
    title: '默认推荐样式',
    description: '本样式为个人优化样式，取名晴空，点击查看大图效果',
    img: '',
    link: 'https://ibaidu.tujidu.com/newcss/dogeTwoPageStyle.less?t=23.6'
  }
]

watch(state, (newVal) => {
  base.hasChanged = true
  safeFunc(() => {
    const keys = Object.keys(defaultOptions)
    const values = keys.map(one => state[one])
    const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
    AC_GM_Interface.change(baseItemKey, newOptions) // 局部更新：调用GM接口：生效 && 保存数据，并刷新原搜索引擎页面，以使设置生效
  })
})

onMounted(() => {
  document.querySelectorAll('.item-color-select-choose').forEach(one => {
    one.style.backgroundColor = one.dataset.value
  })
})

function safeFunc(callback, failed_res = '') {
  try{ 
    return callback() 
  }catch(e){}
  return failed_res
}

function changeColor(env) {
  state.HuYanMode_Color = env.target.dataset.value
}

function updateState(newVal) {
  base.hasChanged = true
  Object.assign(state, newVal)
}
</script>
<style lang="scss" scoped>
.el-collapse {
  :deep &-item__header {
    border: unset;
  }

  .el-form-item{
    margin-bottom: unset;
  }
  
  border: unset;
}
.el-card {
  :deep &__body{
    img {
      max-height: 120px;
    }
  }
  
  :deep &__header,
  :deep &__footer {
    overflow-wrap: anywhere;
    word-break: break-all;  
    padding: calc(var(--el-card-padding) - 14px) calc(var(--el-card-padding) - 4px);
  }
}
.item-color-select-choose {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: inline-block;
  margin-left: 24px;
}
.el-color-picker {
  :deep &__icon {
    color: red;
  }
}
</style>
