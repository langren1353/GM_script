<template>
  <div class="mb-4">
      <el-form :model="state" label-width="auto" style="max-width: 800px">
        <el-text class="mx-1" size="large" style="padding-bottom: 16px" tag="div">调试项：</el-text>
        <el-form-item for="nothing" label="脚本版本号" label-position="left">
          <span style="margin-left: 18px">
            V{{ state.version }}
          </span>
        </el-form-item>
        <el-form-item for="nothing" label="开启调试日志输出" label-position="left">
          <el-switch inline-prompt size="large" v-model="state.isDevMode" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
        </el-form-item>

        <el-form-item v-show="state.isDevMode" for="nothing" label="开启本地资源调试模式" label-position="left">
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="没事别开，开了必出问题，用来加载目标地址的样式表的，方便进行调试-不带缓存"
            placement="right"
          >
            <el-switch inline-prompt size="large" v-model="state.isLocalDevMode" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
          <el-input v-show="state.isLocalDevMode" v-model="state.localDebugBaseUrl" style="width: 400px; margin-left: 40px" placeholder="https://..." clearable @click.stop />
        </el-form-item>
        <el-text class="mx-1" size="large" style="padding-bottom: 16px" tag="div">全局项：</el-text>
        <el-form-item for="nothing" label="✈附加0.是否处理重定向问题-按需开启" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#redirect" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="重定向功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isRedirectEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="📵附加1-去广告功能" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#ads" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="去广告功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isAdsEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="🙃附加2-自动翻页" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#pager" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="自动翻页功能，建议开启"
            placement="right"
          >
            <el-switch inline-prompt size="large" v-model="state.isAutopage" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="🐶附加3-启用Favicon" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#favicon" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="显示Favicon功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isFaviconEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="📑附加4-显示右侧栏" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#remove-right" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="显示搜索右侧栏结果，按需开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isRightDisplayEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="🔞附加5-编号功能-建议关闭" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#number" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="编号功能，建议关闭"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isCounterEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item for="nothing" label="📉附加6-移除文字下划线-建议开启" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#text-line" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="移除文字下划线，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isALineDisable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>

        <el-form-item for="nothing" label="🔳附加7-暗黑主题色-【暗色模式开启】" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#darkmode" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="启用后，将搜索结果适配为暗黑主题，按需开启"
            placement="right"
          >
            <el-switch inline-prompt size="large" v-model="state.isDarkModeEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
  
        <el-divider />
        <block-config :state="state" @update_state="updateState"/>
        
        <el-divider />
        <less-c-s-s-comp siteName="公共" :baseItemKey="baseItemKey" :state="state" :recommendStyleList="recommendStyleList" @update_state="updateState"/>
      </el-form>
      <save-alert siteName="公共" :saveKey="baseItemKey" :saveData="state" />  
    </div>
</template>
<script setup lang="ts">
import { reactive, watch } from "vue";
import SaveAlert from "./../components/SaveAlert.vue";
import BlockConfig from "./../components/BlockConfig.vue";
import AToolTipIcon from "./../components/AToolTipIcon.vue";
import LessCSSComp from "./../components/LessCSSComp/index.vue";

const baseItemKey = 'op_common'
// const baseData = JSON.parse(localStorage.getItem(baseItemKey) || '{}')
const baseData = {}
const scriptData = await safeFunc(() => window.AC_GM_Interface.get(baseItemKey, '{}'))

const base = reactive({
  bigImgShow: false,
  bigImgSrc: '',
  dialogWelcome: false,
  lessCompileRes: true,
  hasChanged: false,
})

const recommendStyleList = [
  {
    title: '默认推荐样式',
    description: '本样式为个人优化样式，取名晴空，点击查看大图效果',
    img: '',
    link: 'https://ibaidu.tujidu.com/newcss/dogeTwoPageStyle.less?t=23.6'
  }
]

const defaultOptions = {
  version: '',
  isDevMode: false,
  isLocalDevMode: false,
  localDebugBaseUrl: '',
  isRedirectEnable: false, // 是否开启重定向功能
  isAdsEnable: false, // 是否开启去广告模式
  isFaviconEnable: true, // 是否开启Favicon图标
  isAutopage: true, // 是否开启自动翻页功能

  isBlockEnable: true, // 是否开启去拦截模式
  isBlockResultDisplay: true, // 是否函数拦截之后的占位
  isBlockBtnNotDisplay: false, // 是否显示block按钮
  blockRuleList: [], // 已经加入列表的拦截记录

  isRightDisplayEnable: true, // 是否开启右侧边栏
  isCounterEnable: false, // 是否显示计数器
  isALineDisable: false, // 是否禁止下划线
  isDarkModeEnable: false, // 是否启用暗黑模式

  commonStyleEnable: false, // 自定义样式-是否启用
  commonStyleLink: '', // 自定义样式链接
  commonStyleLess: '', // 自定义样式链接
}
const state = reactive(Object.assign({}, defaultOptions, baseData, scriptData))

watch(state, (newVal) => {
  base.hasChanged = true
  safeFunc(() => {
    const keys = Object.keys(defaultOptions)
    const values = keys.map(one => state[one])
    const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
    AC_GM_Interface.change(baseItemKey, newOptions) // 局部更新：调用GM接口：生效 && 保存数据，并刷新原搜索引擎页面，以使设置生效
  })
})

insertVersion()

function insertVersion() {
  const version = document.querySelector('#配置项 .version-item')
  if (version) {
    version.remove()
  }
  document.querySelector('#配置项').insertAdjacentHTML('beforeend', `<span class="version-item">v${state.version}</span>`)
}

function safeFunc(callback, failed_res = '') {
  try{
    return callback()
  }catch(e){}
  return failed_res
}

function updateState(newVal) {
  base.hasChanged = true
  Object.assign(state, newVal)
}
</script>
<style lang="scss">
.el-form-item {
  padding-left: 30px;
}
</style>
