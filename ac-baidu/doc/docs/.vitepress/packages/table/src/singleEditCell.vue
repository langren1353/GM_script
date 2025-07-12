<template>
  <component
    :is="isShowRules ? 'el-form-item' : 'div'"
    :prop="prop"
    :rules="configEdit.rules"
    :class="[
      configEdit.className,
      { single_edit_cell_rules: configEdit.rules },
      'single_edit_cell'
    ]"
    v-bind="$attrs"
  >
    <!-- 编辑组件自定义插槽 -->
    <template v-if="configEdit.editSlotName">
      <div :class="[prop, 'slot_edit_name']" @keyup="keyUpHandle">
        <slot :name="configEdit.editSlotName" :scope="scope" />
      </div>
    </template>
    <template v-if="configEdit.isSelfCom">
      <component
        v-if="configEdit.editComponent === 't-select-table'"
        :ref="(el:any) => handleRef(el)"
        :is="configEdit.editComponent"
        :placeholder="configEdit.placeholder || getPlaceholder(configEdit)"
        v-bind="
          typeof configEdit.bind == 'function'
            ? configEdit.bind(scope)
            : { clearable: true, filterable: true, ...configEdit.bind }
        "
        :style="{ width: configEdit.width || '100%' }"
        v-on="cEvent(configEdit, 't-select-table')"
      />
      <component
        v-else
        :is="configEdit.editComponent"
        v-model="childValue"
        :placeholder="configEdit.placeholder || getPlaceholder(configEdit)"
        v-bind="
          typeof configEdit.bind == 'function'
            ? configEdit.bind(scope)
            : { clearable: true, filterable: true, ...configEdit.bind }
        "
        @change="handleEvent(configEdit.event)"
        :style="{ width: configEdit.width || '100%' }"
        v-on="cEvent(configEdit)"
      />
    </template>
    <component
      v-if="!configEdit.editSlotName && !configEdit.isSelfCom"
      :is="configEdit.editComponent || 'el-input'"
      v-model="childValue"
      :type="configEdit.type"
      :placeholder="configEdit.placeholder || getPlaceholder(configEdit)"
      ref="parentCom"
      :class="prop"
      @change="handleEvent(configEdit.event)"
      @keyup="keyUpHandle"
      :style="{ width: configEdit.width || '100%' }"
      v-on="cEvent(configEdit)"
      v-bind="
        typeof configEdit.bind == 'function'
          ? configEdit.bind(scope)
          : { clearable: true, filterable: true, ...configEdit.bind }
      "
    >
      <!-- 前置文本 -->
      <template #prepend v-if="configEdit.prepend">{{ configEdit.prepend }}</template>
      <!-- 后置文本 -->
      <template #append v-if="configEdit.append">{{ configEdit.append }}</template>
      <!-- 子组件自定义插槽 -->
      <!-- <template v-if="configEdit.childSlotName">
        <slot />
      </template>-->
      <template v-if="!configEdit.editComponent.includes('date')">
        <component
          :is="compChildName(configEdit)"
          v-for="(value, key, index) in selectListType(configEdit)"
          :key="index"
          :disabled="value.disabled"
          :label="compChildLabel(configEdit, value)"
          :value="compChildValue(configEdit, value, key)"
        >{{ compChildShowLabel(configEdit, value) }}</component>
      </template>
    </component>
  </component>
</template>

<script setup lang="ts" name="SingleEditCell">
import { computed, ref, watch } from "vue"
const props = defineProps({
  /** 编辑配置项说明
   * label: '爱好', // placeholder显示
   * editComponent: 'el-select', // 组件
   * type: 'select-arr', // option显示
   * list: 'hobbyList', // 下拉选择数据源
   * arrLabel: 'label', // 下拉选择中文显示
   * arrKey: 'value' // 下拉选择number显示（最终传后台）
   * bind:{} // 组件衍生属性（即第三方组件属性）
   */
  configEdit: {
    type: Object as any,
    default: () => ({})
  },
  // 下拉选择数据源
  listTypeInfo: {
    type: Object,
    default: () => ({})
  },
  scope: {
    type: Object,
    default: () => ({})
  },
  prop: {
    type: String,
    default: "prop"
  },
  // 是否走表单验证（表头合并不校验）
  isShowRules: {
    type: Boolean,
    default: true
  },
  modelValue: {
    type: [String, Number, Array, Boolean, Date, Object]
  },
  // 列for index
  indexColumns: [String, Number]
})
// 抛出事件
const emits = defineEmits(["handleEvent", "update:modelValue", "keyupHandle"])
// vue3 v-model简写
let childValue: any = computed({
  get() {
    return props?.modelValue
  },
  set(val) {
    emits("update:modelValue", val)
  }
})
watch(
  () => props.modelValue,
  data => {
    childValue.value = data
  }
)
// 绑定的相关事件
const handleEvent = (type: string) => {
  setTimeout(() => {
    // console.log("组件", type, childValue.value)
    emits("handleEvent", { type, val: childValue.value })
  }, 0)
}
// 键盘事件
const keyUpHandle = ($event: any) => {
  emits("keyupHandle", $event, props.scope.$index, props.prop)
}
// 引用第三方事件
const cEvent: any = computed(() => {
  return ({ eventHandle }: any, type = "") => {
    let event = { ...eventHandle }
    let changeEvent = {} as any
    Object.keys(event).forEach(v => {
      changeEvent[v] = (e: any, ids: any) => {
        if (type === "t-select-table") {
          const argument = {
            row: e,
            ids: ids,
            prop: props.prop,
            scope: props.scope
          }
          event[v] && event[v](argument)
        } else {
          if ((typeof e === "number" && e === 0) || e) {
            event[v] && event[v]({ val: e, prop: props.prop, scope: props.scope })
          } else {
            event[v] && event[v]({ prop: props.prop, scope: props.scope })
          }
        }
      }
    })
    return { ...changeEvent }
  }
})
const selectListType = computed(() => {
  return (item: { list: string | number }) => {
    if (props.listTypeInfo) {
      return props.listTypeInfo[item.list]
    } else {
      return []
    }
  }
})
// 子组件名称
const compChildName = computed(() => {
  return (configEdit: { type: any }) => {
    switch (configEdit.type) {
      case "checkbox":
        return "el-checkbox"
      case "radio":
        return "el-radio"
      case "select-arr":
      case "select-obj":
        return "el-option"
    }
  }
})
// 子子组件label
const compChildLabel = computed(() => {
  return (configEdit: { type: any; arrLabel: any }, value: { [x: string]: any; value: any }) => {
    switch (configEdit.type) {
      case "radio":
      case "checkbox":
        return value.value
      case "el-select-multiple":
      case "select-arr":
        return value[configEdit.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})
// 子子组件value
const compChildValue = computed(() => {
  return (
    configEdit: { type: any; arrKey: any },
    value: { [x: string]: any; value: any },
    key: any
  ) => {
    switch (configEdit.type) {
      case "radio":
      case "checkbox":
        return value.value
      case "el-select-multiple":
      case "select-arr":
        return value[configEdit.arrKey || "key"]
      case "select-obj":
        return key
    }
  }
})
// 子子组件文字展示
const compChildShowLabel = computed(() => {
  return (configEdit: { type: any; arrLabel: any }, value: { [x: string]: any; label: any }) => {
    switch (configEdit.type) {
      case "radio":
      case "checkbox":
        return value.label
      case "el-select-multiple":
      case "select-arr":
        return value[configEdit.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})
// 下拉选择表格组件 ref
const tselecttableref: any = ref({})
// 下拉选择表格组件 动态ref
const handleRef = (el: any) => {
  if (el) {
    tselecttableref.value[`tselecttableref-${props.indexColumns}`] = el
  }
}
// 重置下拉表格
const resetTselectTableFields = () => {
  // 获取所有下拉选择表格组件
  const refList = Object.keys(tselecttableref.value).filter(item =>
    item.includes("tselecttableref")
  )
  if (refList.length > 0 && tselecttableref.value) {
    refList.map(val => {
      tselecttableref.value[val].clear()
    })
  }
}
// placeholder的显示
const getPlaceholder = (row: any) => {
  let placeholder
  if (row.editComponent && typeof row.editComponent == "string") {
    if (row.editComponent.includes("input")) {
      placeholder = "请输入" + row.label
    } else if (row.editComponent.includes("select") || row.editComponent.includes("date")) {
      placeholder = "请选择" + row.label
    } else {
      placeholder = row.label
    }
  }
  return placeholder
}

defineExpose({ resetTselectTableFields })
</script>
<style lang="scss">
.single_edit_cell {
  cursor: pointer;

  .slot_edit_name {
    width: 100%;
  }
}
</style>
