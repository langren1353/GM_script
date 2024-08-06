<template>
  <Teleport to="#save_hint">
    <div v-show="base.hasChanged">
      <el-button type="danger" @click="doSaveConfig">保存{{ siteName || '没名字' }}</el-button>
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="存在修改，点击保存" placement="top">
        <el-icon color="#e23c00" style="vertical-align: top;margin-left: 10px; font-size: 28px;"><Warning /></el-icon>
      </el-tooltip>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";
import {reactive, watch} from "vue";

const props = defineProps({
  siteName: {
    type: String,
    required: true
  },
  saveKey: {
    type: String,
    required: true,
  },
  saveData: {
    type: Object,
    required: true
  },
})

const base = reactive({
  hasChanged: false
})

watch(props.saveData, () => {
  base.hasChanged = true
})

function safeFunc(callback, failed_res = '') {
  try{
    return callback()
  }catch(e){}
  return failed_res
}

function doSaveConfig() {
  // localStorage.setItem(props.saveKey, JSON.stringify(props.saveData))
  safeFunc(() => {
    window.AC_GM_Interface.save(props.saveKey, props.saveData) // 调用GM接口：生效 && 保存数据，并刷新原搜索引擎页面，以使设置生效
  })
  base.hasChanged = false
  ElMessage({
    message: "已经成功保存",
    type: 'success'
  })
}
window['save' + props.siteName] = doSaveConfig
</script>

<style scoped lang="scss">

</style>
