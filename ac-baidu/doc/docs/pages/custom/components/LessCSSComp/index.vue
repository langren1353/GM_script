<template>
  <el-text class="mx-1" size="large" style="padding-bottom: 8px" tag="div">
    自定义样式表-支持Less.js：
    <el-switch inline-prompt size="large" v-model="state.commonStyleEnable" active-text="开启" inactive-text="关闭"/>
  </el-text>
  <el-form-item v-show="state.commonStyleEnable" for="nothing" label="样式表-自定义样式表" label-position="left">
    <el-input type="textarea" v-model="state.commonStyleLess" :rows="5" style="width: 400px" placeholder="可以自行编写或拉取样式表"  />
    <span v-show="!base.compileSuccess" style="margin-left: 20px; color: red">编译Less失败</span>
  </el-form-item>
  <div v-show="state.commonStyleEnable">
    <el-collapse accordion>
      <el-collapse-item name="1">
        <template #title>
          <el-form-item for="nothing" label="样式表-加载地址" label-position="left">
            <el-input v-model="state.commonStyleLink" style="width: 400px" placeholder="https://..." clearable @click.stop />
            <el-tooltip class="box-item" effect="dark" :hide-after=20 content="点击展开" placement="top">
              <el-icon style="margin-left: 15px"><QuestionFilled /></el-icon>
            </el-tooltip>
            <el-link type="primary" style="margin-left: 30px" @click.stop="getWgetData">
              拉取最新数据
              <el-icon><Refresh /></el-icon>
            </el-link>
          </el-form-item>
        </template>
        <div style="margin-left: 30px; margin-top: 30px; display: flex; flex-wrap: wrap; gap: 25px">
          <template v-for="item in recommendStyleList" :key="item.title">
            <item-card
              :card-title="item.title"
              :card-description="item.description"
              :card-img="item.img"
              :card-link="item.link"
              @update_customStyleLink="link => state.commonStyleLink = link"
            />
          </template>
          <item-card
            :is-welcome="true"
            card-title="虚位以待--->"
            card-description="欢迎提交个人样式，提交方式请点上方激活按钮"
            card-img=""
            card-link="#">
          </item-card>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineEmits, watch, toRefs } from "vue";
import less from 'less'
import {ElMessage} from "element-plus";
import ItemCard from "./ItemCard.vue";

const emits = defineEmits(['update_state'])
const props = defineProps({
  siteName: {
    type: String,
    required: true,
  },
  baseItemKey: {
    type: String,
    required: true,
  },
  state: {
    type: Object, 
    required: true,
  },
  recommendStyleList: {
    type: Array,
    required: true,
    default() {
      return [
        {
          title: '默认推荐样式',
          description: '本样式为个人优化样式，取名晴空，点击查看大图效果',
          img: '',
          link: 'https://ibaidu.tujidu.com/newcss/dogeTwoPageStyle.less?t=26.09',
        }
      ]
    }
  }  
})

const isCommonComp = !!props.baseItemKey.includes('common')

const defaultOptions = {
  commonStyleEnable: false,
  commonStyleLink: '',
  commonStyleLess: '',
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))
const base = reactive({
  compileSuccess: true,
})

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  const uploadValue = isCommonComp ? newOptions: {
    customStyleEnable: newOptions.commonStyleEnable,
    customStyleLink: newOptions.commonStyleLink,
    customStyleLess: newOptions.commonStyleLess,
  }
  emits('update_state', uploadValue)
})

watch(() => state.commonStyleLess, () => {
  less.render(state.commonStyleLess).then(css => {
    base.compileSuccess = true
  }).catch(() => {
    base.compileSuccess = false
  })
})

watch(() => propState, () => {
  const notKeys = Object.keys(defaultOptions)
  const keys = Object.keys(propState)
  const values = keys.map(one => state[one])
  const newState = Object.fromEntries(keys.filter(per => !notKeys.includes(per)).map((key, index) => [key, values[index]]));
  Object.assign(state, newState)
})

async function fetchWithTimeout(url, options = { method: 'GET' }, timeout = 8000) {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchPromise = fetch(url, { ...options, signal });
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return fetchPromise.finally(() => clearTimeout(timeoutId));
}

async function getWgetData() {
  if(!state.commonStyleLink) {
    ElMessage({
      message: "请填写自定义样式地址后，再点击拉取",
      type: 'error'
    })
    return
  }
  // 使用我自己的代理方式去拉取数据，避免跨域问题
  const { detail = '', css: lessData = '' } = await fetchWithTimeout('/api/getcss?url=' + encodeURIComponent(state.commonStyleLink)).then(res => {
    return res.json()
  })
  if(detail !== 'OK') {
    ElMessage({
      message: "加载失败：" + detail,
      type: 'error'
    })
  } else {
    ElMessage({
      message: "成功拉取样式表",
      type: 'success'
    })
    state.commonStyleLess = lessData
    
    window['save' + props.siteName]()
  }
}
</script>

<style scoped lang="scss">

</style>
