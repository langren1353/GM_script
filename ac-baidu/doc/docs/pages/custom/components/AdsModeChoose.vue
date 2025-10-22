<template>
  <el-form-item for="nothing" label="显示模式优化" label-position="left">
    <el-radio-group v-model="state.adsStyleMode">
      <el-switch inline-prompt size="large" v-model="state.adsStyleEnable" active-text="开启" inactive-text="关闭" style="margin-right: 20px"/>
      <div v-show="state.adsStyleEnable">
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="原始模式，默认状态，不做任何显示变更" >
          <el-radio value="0">原始模式</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="单列模式，默认将显示靠左，显示效果优化" >
          <el-radio value="1">单列模式</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="单列居中，显示元素居中 + 效果优化" >
          <el-radio value="2">单列居中</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="双列居中，显示元素双列效果 + 效果优化" >
          <el-radio value="3">双列居中</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="双列居中，显示元素三列效果 + 效果优化" >
          <el-radio value="4">三列</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="双列居中，显示元素四列效果 + 效果优化" >
          <el-radio value="5">四列</el-radio>
        </el-tooltip>
      </div>
    </el-radio-group>
  </el-form-item>
</template>
<script setup lang="ts">
import { defineEmits, reactive, toRefs, watch } from "vue";
import {ElMessage} from "element-plus";

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
  adsStyleEnable: false, // 是否开启优化
  adsStyleMode: 0, // 原始模式
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  emits('update_state', newOptions)
})

watch(() => state.adsStyleMode, () => {
  ElMessage.success('多列模式临时生效，回到搜索页面查看效果即可')
})

watch(() => state.HuYanMode_Color, () => {
  ElMessage.success('护眼模式-临时生效，建议搭配插件：Dark Reader')
})

watch(() => propState, () => {
  const notKeys = Object.keys(defaultOptions)
  const keys = Object.keys(propState)
  const values = keys.map(one => state[one])
  const newState = Object.fromEntries(keys.filter(per => !notKeys.includes(per)).map((key, index) => [key, values[index]]));
  Object.assign(state, newState)
})
</script>
<style scoped lang="scss">

</style>
