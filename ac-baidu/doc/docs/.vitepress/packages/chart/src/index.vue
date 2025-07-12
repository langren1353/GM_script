<template>
  <div class="t-chart" v-bind="$attrs">
    <div v-show="!formatEmpty" class="t-chart-container" :id="id" ref="echartRef" />
    <slot v-if="formatEmpty" name="empty">
      <el-empty v-bind="$attrs" :description="description" />
    </slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="TChart">
import {
  onMounted,
  getCurrentInstance,
  ref,
  watch,
  nextTick,
  onBeforeUnmount,
  markRaw,
  useAttrs
} from "vue"
import { useResizeObserver } from "@vueuse/core"
import { debounce, toLine } from "../../utils"
import { computed } from "vue"
const { proxy } = getCurrentInstance() as any
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  id: {
    type: String,
    default: () => Math.random().toString(36).substring(2, 8)
  },
  theme: {
    type: String,
    default: ""
  },
  isEmpty: {
    type: [Boolean, Function],
    default: false
  },
  description: {
    type: String,
    default: "暂无数据"
  }
})

const echartRef = ref<HTMLDivElement>()
const chart = ref()
const emits = defineEmits()
const events = Object.entries(useAttrs())

// 图表初始化
const renderChart = () => {
  chart.value = markRaw(proxy.$echarts.init(echartRef.value, props.theme))
  setOption(props.options)
  // 返回chart实例
  emits("chart", chart.value)

  // 监听图表事件
  events.forEach(([key, value]) => {
    if (key.startsWith("on") && !key.startsWith("onChart")) {
      const on = toLine(key).substring(3)
      chart.value.on(on, (...args: any) => emits(on, ...args))
    }
  })

  // 监听元素变化
  useResizeObserver(echartRef.value, resizeChart)
  // 大小自适应
  // window.addEventListener('resize', resizeChart)
}

// 重绘图表函数
const resizeChart = debounce(
  () => {
    chart.value?.resize()
  },
  300,
  true
)

// 设置图表函数
const setOption = debounce(
  async data => {
    if (!chart.value) return
    chart.value.setOption(data, true, true)
    await nextTick()
    resizeChart()
  },
  300,
  true
)

const formatEmpty = computed(() => {
  if (typeof props.isEmpty === "function") {
    return props.isEmpty(props.options)
  }
  return props.isEmpty
})

watch(
  () => props.options,
  async nw => {
    await nextTick()
    setOption(nw)
  },
  { deep: true }
)

watch(
  () => props.theme,
  async () => {
    chart.value.dispose()
    renderChart()
  }
)

onMounted(() => {
  renderChart()
})
onBeforeUnmount(() => {
  // 取消监听
  // window.removeEventListener('resize', resizeChart)
  // 销毁echarts实例
  chart.value.dispose()
  chart.value = null
})
</script>

<style lang="scss" scoped>
.t-chart {
  position: relative;
  width: 100%;
  height: 100%;
  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>
