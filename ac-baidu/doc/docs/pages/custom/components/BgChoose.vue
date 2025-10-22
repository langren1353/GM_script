<template>
  <el-text class="mx-1" size="large" style="padding-bottom: 8px" tag="div">
    背景图选项：
    <el-switch inline-prompt size="large" v-model="state.BgEnable" active-text="开启" inactive-text="关闭"/>
    <el-button v-if="false" v-show="state.BgEnable" type="primary" plain style="margin-left: 40px" @click="getWgetData">
      同步图片<el-icon><Refresh /></el-icon>
    </el-button>
  </el-text>
  <div v-show="state.BgEnable">
    <el-form-item for="nothing" label="页面背景图-图片地址" label-position="left">
      <el-input v-model="state.BgUseUrl" style="width: 400px" placeholder="https://..." clearable />
      <el-link href="https://111666.best/" type="primary" style="margin-left: 20px" target="_blank">上传背景图</el-link>
    </el-form-item>
    <el-form-item for="nothing" label="页面背景图-预设背景图" label-position="left">
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="激活后，记得【点击同步按钮】" placement="bottom">
        <el-radio-group v-model="state.BgUseUrl">
          <el-radio value="https://img.90dao.com/images/2023/10/02/651a347eef3f5.jpg">图片1</el-radio>
          <el-radio value="https://img.90dao.com/images/2023/12/17/657de42cb631e.webp">图片2</el-radio>
          <el-radio value="https://img.90dao.com/images/2023/12/16/657d34e933276.png">图片3</el-radio>
          <el-radio value="https://img.90dao.com/images/2023/10/26/653985cf1a46d.png">图片4</el-radio>
        </el-radio-group>
      </el-tooltip>
    </el-form-item>
    <el-form-item for="nothing" label="页面背景图-自动优化" label-position="left">
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="背景图显示自动优化，强烈建议开启" placement="top">
        <el-switch inline-prompt size="large" v-model="state.BgFit" active-text="开启" inactive-text="关闭"/>
      </el-tooltip>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, reactive, toRefs, watch } from "vue";
import { ElMessage } from "element-plus";
import { debug } from "node:util";
import axios from "axios";

const emits = defineEmits(['update_state'])
const props = defineProps({
  state: {
    type: Object,
    required: true,
    default: () => ({})
  },
  baseItemKey: {
    type: String,
    required: true,
    default: '',
  }
})

const defaultOptions = {
  BgEnable: false, // 背景图-是否启用
  BgUseUrl: '', // 默认背景图
  BgFit: true,
  BgBase64Image: '',
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  emits('update_state', newOptions)
})

watch(() => state.BgUseUrl, () => {
  ElMessage.success('背景已临时生效，如果不生效，清注意使用图床')
})

watch(() => propState, () => {
  const notKeys = Object.keys(defaultOptions)
  const keys = Object.keys(propState)
  const values = keys.map(one => state[one])
  const newState = Object.fromEntries(keys.filter(per => !notKeys.includes(per)).map((key, index) => [key, values[index]]));
  Object.assign(state, newState)
})

async function fetchWithTimeout(url, options = {}, timeout = 8000) {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchPromise = fetch(url, { ...options, signal });
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return fetchPromise.finally(() => clearTimeout(timeoutId));
}

async function getWgetData() {
  // 使用我自己的代理方式去拉取数据，避免跨域问题
  await fetchWithTimeout('/api/getimg?url=' + encodeURIComponent(state.BgUseUrl)).then(async resp => {
    const contentType = resp.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const { detail } = await resp.json()
      ElMessage({
        message: "加载失败：" + detail,
        type: 'error'
      })
    } else if (contentType && (contentType.includes('image') || contentType.includes('application/octet-stream'))) {
      ElMessage({
        message: "加载图片成功",
        type: 'success'
      })
      const imgBlob = await resp.blob()
      const base64Promise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(imgBlob);
      }).then(data => {
        state.BgBase64Image = ''
        setTimeout(() => {
          window.doSaveConfig()
        }, 100)
      })
    }
  })
}
</script>

<style scoped lang="scss">

</style>
