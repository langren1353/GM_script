<template>
  <component
    :is="!useVirtual ? 'el-select' : 'el-select-v2'"
    popper-class="t_select"
    ref="tselectRef"
    v-model="childSelectedValue"
    :options="!useVirtual ? null : optionSource"
    :style="{ width: width || '100%' }"
    @change="handlesChange"
    @input="handlesSelectInput"
    v-bind="{
      clearable: true,
      filterable: filterable,
      multiple: multiple,
      ...$attrs
    }"
  >
    <template v-for="(index, name) in slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
    <template v-if="!useVirtual">
      <el-checkbox
        v-if="multiple && !isShowPagination"
        v-model="selectChecked"
        @change="selectAll"
        class="all_checkbox"
        >全选</el-checkbox
      >
      <el-option
        v-for="(item, index) in optionSource"
        :key="index + 'i'"
        :label="customLabel ? customLabelHandler(item) : item[labelCustom]"
        :value="item[valueCustom]"
        :disabled="item.disabled"
      >
        <template v-for="(index, name) in slots" v-slot:[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </el-option>
      <div class="t_select__pagination" v-if="isShowPagination && filteredOptionsCount > 0">
        <el-pagination
          v-model:current-page="paginationOption.currentPage"
          v-model:page-size="paginationOption.pageSize"
          :layout="paginationOption.layout || 'total, prev, pager, next, jumper'"
          :pager-count="paginationOption.pagerCount"
          :total="paginationOption.total"
          @input.stop="(e: any) => emits('input', e.target.value)"
          v-bind="{
            small: true,
            background: true,
            ...$attrs,
            ...paginationOption.bind
          }"
        />
      </div>
    </template>
  </component>
</template>

<script setup lang="ts" name="TSelect">
import { computed, ref, useSlots } from "vue"
const props: any = defineProps({
  modelValue: {
    type: [String, Number, Array]
  },
  // 是否多选
  multiple: {
    type: Boolean,
    default: false
  },
  // 选择框宽度
  width: {
    type: String
  },
  // 传入的option数组中，要作为最终选择项的键值key
  valueCustom: {
    type: String,
    default: "key"
  },
  // 传入的option数组中，要作为显示项的键值名称
  labelCustom: {
    type: String,
    default: "label"
  },
  // 是否自定义设置下拉label
  customLabel: {
    type: String
  },
  // 下拉框组件数据源
  optionSource: {
    type: Array as unknown as any[],
    default: () => []
  },
  // 是否过滤默认开启
  filterable: {
    type: Boolean,
    default: true
  },
  // 是否显示分页
  isShowPagination: {
    type: Boolean,
    default: false
  },
  // 分页配置
  paginationOption: {
    type: Object,
    default: () => {
      return {
        pageSize: 6, // 每页显示条数
        currentPage: 1, // 当前页
        pagerCount: 5, // 按钮数，超过时会折叠
        total: 0 // 总条数
      }
    }
  },
  // 是否开启虚拟列表
  useVirtual: {
    type: Boolean,
    default: false
  }
})
const tselectRef = ref()
const filteredOptionsCount = ref(1)
const slots = useSlots()
// 抛出事件
const emits = defineEmits(["update:modelValue", "change", "input", "select-input"])
const handlesSelectInput = (e: any) => {
  if (props.filterable) {
    // console.log("handlesSelectInput---tselectRef", tselectRef.value.filteredOptionsCount)
    filteredOptionsCount.value = tselectRef.value.filteredOptionsCount
  }
  emits("select-input", e.target.value)
}
// vue3 v-model简写
let childSelectedValue: any = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    // console.log(777, val)
    emits("update:modelValue", val)
  }
})
const handlesChange = (val: any) => {
  // console.log(val)
  emits("change", val)
}
// 设置全选
const selectChecked = computed({
  get() {
    const _deval: any = props.modelValue
    const list = props.optionSource.filter((item: { disabled: any }) => {
      return !item.disabled
    })
    return _deval?.length === list.length
  },
  set(val: any) {
    const list = props.optionSource.filter((item: { disabled: any }) => {
      return !item.disabled
    })
    return val?.length === list.length
  }
})
// 点击全选
const selectAll = (val: any) => {
  let options = JSON.parse(JSON.stringify(props.optionSource))
  // 数据源过滤禁用选项
  options = options.filter((item: { disabled: any }) => {
    return !item.disabled
  })
  if (val) {
    const selectedAllValue = options.map((item: { [x: string]: any }) => {
      return item[props.valueCustom]
    })
    emits("update:modelValue", selectedAllValue)
  } else {
    emits("update:modelValue", null)
  }
}
// 自定义label显示
const customLabelHandler = (_item: any) => {
  let fun = new Function("_item", "return " + props.customLabel)
  return fun(_item)
}
</script>
<style lang="scss" scoped>
.t_select {
  .el-select-dropdown {
    .all_checkbox {
      margin-left: 20px;
    }
  }
}
</style>
