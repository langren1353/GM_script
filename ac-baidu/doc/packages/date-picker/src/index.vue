<template>
  <div class="t-date-picker" ref="DatePicker">
    <el-date-picker
      :type="type"
      v-model="time"
      :shortcuts="state.dateOptions"
      @change="dateChange"
      v-bind="attrsBind"
    >
      <template v-for="(index, name) in slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </el-date-picker>
  </div>
</template>
<script setup lang="ts" name="TDatePicker">
import { computed, useAttrs, useSlots, watch, reactive, ref } from "vue"
import type { PropType } from "vue"
const props = defineProps({
  modelValue: {
    type: [String, Date, Array]
  },
  // 日期范围是否显示00:00:00 23:59:59时分秒
  plusTime: {
    type: Boolean,
    default: false
  },
  // 时间类型
  /***
   * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
   * datetime日期和时间点;datetimerange日期和时间点范围
   */
  type: {
    type: String as PropType<
      | "date"
      | "week"
      | "month"
      | "year"
      | "dates"
      | "months"
      | "years"
      | "daterange"
      | "monthrange"
      | "datetime"
      | "datetimerange"
    >,
    validator: (value: string) =>
      [
        "date",
        "week",
        "month",
        "year",
        "dates",
        "months",
        "years",
        "daterange",
        "monthrange",
        "datetime",
        "datetimerange"
      ].includes(value),
    default: "date"
  },
  // 快捷配置
  shortcuts: {
    type: Array
  },
  // 是否开启快捷方式
  isPickerOptions: {
    type: Boolean,
    default: false
  }
})
// 抛出事件
const emits = defineEmits(["update:modelValue", "change"])

const $attrs: any = useAttrs()
const slots = useSlots()
// vue3 v-model简写
let time: any = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    // console.log(777, val)
    emits("update:modelValue", val)
  }
})
const DatePicker = ref()
const attrsBind = computed(() => {
  let attrs = {} as any
  switch (props.type) {
    case "date":
    case "dates":
      attrs["value-format"] = "YYYY-MM-DD"
      attrs["placeholder"] = "请选择日期"
      break
    case "week":
      // attrs['value-format'] = 'YYYY - ww'
      attrs["format"] = "YYYY 第 ww 周"
      attrs["placeholder"] = "请选择周"
      break
    case "month":
    case "months":
      attrs["value-format"] = "YYYY-MM"
      attrs["format"] = "YYYY-MM"
      attrs["placeholder"] = "请选择月"
      break
    case "year":
    case "years":
      attrs["value-format"] = "YYYY"
      attrs["format"] = "YYYY"
      attrs["placeholder"] = "请选择年"
      break
    /**
     * 日期范围
     */
    case "daterange":
      attrs["value-format"] = "YYYY-MM-DD"
      attrs["range-separator"] = "~"
      attrs["start-placeholder"] = "请选择开始日期"
      attrs["end-placeholder"] = "请选择结束日期"
      break
    case "monthrange":
      attrs["value-format"] = "YYYY-MM"
      attrs["range-separator"] = "~"
      attrs["start-placeholder"] = "请选择开始月份"
      attrs["end-placeholder"] = "请选择结束月份"
      break
    /**
     * 日期和时间点
     */
    case "datetime":
      attrs["format"] = "YYYY-MM-DD HH:mm:ss"
      attrs["value-format"] = "YYYY-MM-DD HH:mm:ss"
      attrs["placeholder"] = "请选择日期时间"
      break
    case "datetimerange":
      attrs["format"] = "YYYY-MM-DD HH:mm:ss"
      attrs["value-format"] = "YYYY-MM-DD HH:mm:ss"
      attrs["range-separator"] = "~"
      attrs["start-placeholder"] = "请选择开始日期"
      attrs["end-placeholder"] = "请选择结束日期"
      break
  }
  return {
    ...attrs,
    ...$attrs
  }
})
const state = reactive({
  dateOptions: props.shortcuts
})
// 获取快捷配置
const getShortcuts = (type: any) => {
  let shortcuts: any = []
  switch (type) {
    case "date":
      shortcuts = [
        {
          text: "今天",
          value: new Date()
        },
        {
          text: "昨天",
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: "一周前",
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ]
      break
    case "daterange":
      shortcuts = [
        {
          text: "最近一周",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        },
        {
          text: "最近一个月",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          }
        },
        {
          text: "最近三个月",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          }
        }
      ]
      break
    case "monthrange":
      shortcuts = [
        {
          text: "本月",
          value: [new Date(), new Date()]
        },
        {
          text: "今年至今",
          value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          }
        },
        {
          text: "最近六个月",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          }
        }
      ]
      break
    case "datetime":
      shortcuts = [
        {
          text: "今天",
          value: new Date()
        },
        {
          text: "昨天",
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: "一周前",
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ]
      break
    case "datetimerange":
      shortcuts = [
        {
          text: "最近一周",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        },
        {
          text: "最近一个月",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          }
        },
        {
          text: "最近三个月",
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          }
        }
      ]
      break
  }
  return shortcuts
}
const dateChange = (val: any[]) => {
  if (props.type === "daterange" && val) {
    let startTime = val[0]
    let endTime = val[1]
    if (props.plusTime) {
      startTime = startTime + " 00:00:00"
      endTime = endTime + " 23:59:59"
    }
    time.value = [startTime, endTime]
    emits("change", [startTime, endTime])
    DatePicker.value.getElementsByClassName("el-range-input")[0].blur()
    DatePicker.value.getElementsByClassName("el-range-input")[1].blur()
  } else {
    emits("change", val)
    if (props.type.includes("range")) {
      DatePicker.value.getElementsByClassName("el-range-input")[0].blur()
      DatePicker.value.getElementsByClassName("el-range-input")[1].blur()
    } else {
      DatePicker.value.getElementsByClassName("el-input__inner")[0].blur()
    }
  }
}
if (props.isPickerOptions) {
  state.dateOptions = getShortcuts(props.type)
}
// watch(
//   () => props.value,
//   (val) => {
//     // console.log(111, val)
//     time.value = val
//   },
//   { deep: true }
// )
watch(
  () => props.shortcuts,
  val => {
    if (props.isPickerOptions) {
      let shortcuts = getShortcuts(props.type)
      state.dateOptions = shortcuts
    } else {
      state.dateOptions = val
    }
  },
  { deep: true }
)
// 暴露方法出去
defineExpose({ state })
</script>
<style lang="scss" scoped>
.t-date-picker {
  width: 100%;
}
</style>
