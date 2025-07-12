<template>
  <el-form
    class="t-form"
    ref="tform"
    :class="className"
    :model="formOpts.formData"
    :rules="formOpts.rules"
    :label-width="formOpts.labelWidth || '120px'"
    :label-position="formOpts.labelPosition || 'right'"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in formOpts.fieldList">
      <el-form-item
        v-if="!item.isHideItem"
        :key="index"
        :prop="item.value"
        :label="item.label"
        :class="[
          item.className,
          { render_label: item.labelRender },
          { slot_label: item.slotName },
          { render_laber_position_left: formOpts.labelPosition === 'left' }
        ]"
        :rules="item.rules"
        :style="getChildWidth(item)"
        v-bind="$attrs"
      >
        <!-- 自定义label -->
        <template #label v-if="item.labelSlotName || item.labelRender">
          <render-comp v-if="item.labelRender" :render="item.labelRender" :item="item" />
          <template v-if="item.labelSlotName">
            <slot :name="item.labelSlotName" :scope="item"></slot>
          </template>
        </template>
        <!-- 自定义输入框插槽 -->
        <template v-if="item.slotName">
          <slot :name="item.slotName"></slot>
        </template>
        <!-- 文本展示值 -->
        <template v-if="item.textShow">
          <span class="text_show">
            {{ item.textValue || formOpts.formData[item.value] }}
          </span>
        </template>
        <template v-if="item.isSelfCom">
          <component
            v-if="item.comp === 't-select-table'"
            :is="item.comp"
            :ref="(el:any) => handleRef(el, index)"
            :placeholder="item.placeholder || getPlaceholder(item)"
            v-bind="
              typeof item.bind == 'function'
                ? item.bind(formOpts.formData)
                : { clearable: true, filterable: true, ...item.bind }
            "
            :style="{ width: item.width || '100%' }"
            v-on="cEvent(item, 't-select-table')"
          />
          <component
            v-else
            :is="item.comp"
            v-model="formOpts.formData[item.value]"
            :placeholder="item.placeholder || getPlaceholder(item)"
            :ref="(el: any) => getRefs(el, item, index)"
            v-bind="
              typeof item.bind == 'function'
                ? item.bind(formOpts.formData)
                : { clearable: true, filterable: true, ...item.bind }
            "
            :style="{ width: item.width || '100%' }"
            v-on="cEvent(item)"
          />
        </template>
        <component
          v-if="!item.slotName && !item.textShow && !item.isSelfCom && item.comp.includes('date')"
          :is="item.comp"
          v-model="formOpts.formData[item.value]"
          :type="item.type"
          :placeholder="item.placeholder || getPlaceholder(item)"
          @change="handleEvent(item.event, formOpts.formData[item.value], item)"
          :ref="(el: any) => getRefs(el, item, index)"
          v-bind="
            typeof item.bind == 'function'
              ? item.bind(formOpts.formData)
              : { clearable: true, filterable: true, ...item.bind }
          "
          :style="{ width: item.width || '100%' }"
          v-on="cEvent(item)"
        />
        <component
          v-if="
            !item.slotName && !item.textShow && !item.isSelfCom && item.comp.includes('tree-select')
          "
          :is="item.comp"
          v-model="formOpts.formData[item.value]"
          :type="item.type"
          :placeholder="item.placeholder || getPlaceholder(item)"
          @change="handleEvent(item.event, formOpts.formData[item.value], item)"
          :ref="(el: any) => getRefs(el, item, index)"
          v-bind="
            typeof item.bind == 'function'
              ? item.bind(formOpts.formData)
              : { clearable: true, filterable: true, ...item.bind }
          "
          :style="{ width: item.width || '100%' }"
          v-on="cEvent(item)"
        />
        <component
          v-if="
            !item.slotName &&
            !item.textShow &&
            !item.isSelfCom &&
            !item.comp.includes('date') &&
            !item.comp.includes('tree-select')
          "
          :is="item.comp"
          v-model="formOpts.formData[item.value]"
          :type="item.type"
          :placeholder="item.placeholder || getPlaceholder(item)"
          @change="handleEvent(item.event, formOpts.formData[item.value], item)"
          :ref="(el: any) => getRefs(el, item, index)"
          v-bind="
            typeof item.bind == 'function'
              ? item.bind(formOpts.formData)
              : { clearable: true, filterable: true, ...item.bind }
          "
          :style="{ width: item.width || '100%' }"
          v-on="cEvent(item)"
        >
          <!-- 前置文本 -->
          <template #prepend v-if="item.prepend">{{ item.prepend }}</template>
          <!-- 后置文本 -->
          <template #append v-if="item.append">{{ item.append }}</template>
          <!-- 子组件自定义插槽 -->
          <template v-if="item.childSlotName">
            <slot :name="item.childSlotName"></slot>
          </template>
          <!-- <template v-if="!item.comp.includes('date') && !item.childSlotName"> -->
          <component
            :is="compChildName(item)"
            v-for="(value, key, index) in selectListType(item)"
            :key="index"
            :disabled="value.disabled"
            :label="compChildLabel(item, value)"
            :value="compChildValue(item, value, key)"
            >{{ compChildShowLabel(item, value) }}</component
          >
          <!-- </template> -->
        </component>
      </el-form-item>
    </template>
    <!-- 按钮 -->
    <div class="footer_btn flex-box flex-ver t-margin-top-5">
      <template v-if="formOpts.btnSlotName">
        <slot :name="formOpts.btnSlotName"></slot>
      </template>
      <template
        v-if="!formOpts.btnSlotName && formOpts.operatorList && formOpts.operatorList.length > 0"
      >
        <el-button
          v-for="(val, index) in formOpts.operatorList"
          :key="index"
          @click="val.fun(val)"
          v-bind="{
            type: 'primary',
            size: 'small',
            ...val.bind
          }"
          >{{ val.label }}</el-button
        >
      </template>
    </div>
  </el-form>
</template>
<script setup lang="ts" name="TForm">
import RenderComp from "./renderComp.vue"
import { ElMessage } from "element-plus"
import { computed, ref, watch, onMounted, getCurrentInstance } from "vue"
import type { PropType } from "vue"
const props = defineProps({
  // 自定义类名
  className: {
    type: String
  },
  /** 表单配置项说明
   * formData object 表单提交数据
   * rules object 验证规则
   * fieldList Array 表单渲染数据
   * operatorList Array 操作按钮list
   * listTypeInfo object 下拉选项数据
   * labelWidth  String label宽度
   */
  formOpts: {
    type: Object,
    default: () => ({})
  },
  // 一行显示几个输入项;最大值4
  widthSize: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    validator: (value: number) => [1, 2, 3, 4, 5, 6].includes(value),
    default: 2
  },
  // 全局是否开启清除前后空格
  isTrim: {
    type: Boolean,
    default: true
  }
})
const cEvent: any = computed(() => {
  return (item: { eventHandle: any }, type = "") => {
    let event = { ...item.eventHandle }
    let changeEvent = {} as any
    Object.keys(event).forEach(v => {
      changeEvent[v] = (e: any, ids: any) => {
        if (type === "t-select-table") {
          event[v] && event[v](e, ids)
        } else {
          if ((typeof e === "number" && e === 0) || e) {
            event[v] && event[v](e, props.formOpts)
          } else {
            event[v] && event[v](props.formOpts)
          }
        }
      }
    })
    return { ...changeEvent }
  }
})
const selectListType = computed(() => {
  return (item: { list: string | number }) => {
    if (props.formOpts.listTypeInfo) {
      return props.formOpts.listTypeInfo[item.list]
    } else {
      return []
    }
  }
})
// 子组件名称
const compChildName: any = computed(() => {
  return (opt: { type: any }) => {
    switch (opt.type) {
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
  return (opt: { type: any; arrLabel: any }, value: { [x: string]: any; value: any }) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value.value
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})
// 子子组件value
const compChildValue = computed(() => {
  return (opt: { type: any; arrKey: any }, value: { [x: string]: any; value: any }, key: any) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value.value
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrKey || "key"]
      case "select-obj":
        return key
    }
  }
})
// 子子组件文字展示
const compChildShowLabel = computed(() => {
  return (opt: { type: any; arrLabel: any }, value: { [x: string]: any; label: any }) => {
    switch (opt.type) {
      case "radio":
      case "checkbox":
        return value.label
      case "el-select-multiple":
      case "select-arr":
        return value[opt.arrLabel || "label"]
      case "select-obj":
        return value
    }
  }
})
const colSize = ref(props.widthSize)
// 获取ref
const tform: any = ref<HTMLElement | null>(null)
// 获取实例方法
const instance: any = getCurrentInstance()
// 抛出事件
const emits = defineEmits(["update:modelValue", "handleEvent", "getRefs"])
watch(
  () => props.formOpts.formData,
  () => {
    // state.form = initForm(opts, true)
    // 将form实例返回到父级
    emits("update:modelValue", tform.value)
  },
  { deep: true }
)
watch(
  () => props.widthSize,
  val => {
    if (val > 6) {
      ElMessage.warning("widthSize值不能大于6！")
      colSize.value = 6
    } else {
      colSize.value = val
    }
  },
  { deep: true }
)
onMounted(() => {
  // console.log('tform.value.$.exposed--', tform.value.$)
  const entries = Object.entries(tform.value.$.exposed)
  // console.log('111', entries)
  for (const [key, value] of entries) {
    instance.exposed[key] = value
  }
  // 默认赋值触发handleEvent事件
  let event: null = null
  let item: null = null
  props.formOpts.formData &&
    Object.keys(props?.formOpts?.formData).forEach(key => {
      if (props.formOpts.formData[key]) {
        props.formOpts.fieldList.map((val: { value: string; event: null } | any) => {
          if (val.value == key) {
            event = val.event
            item = val
          }
        })
        handleEvent(event, props.formOpts.formData[key], item, false)
      }
    })
  // 将form实例返回到父级
  emits("update:modelValue", tform.value)
})
// label与输入框的布局方式
const getChildWidth = (item: { widthSize: any }) => {
  if (props.formOpts.labelPosition === "top") {
    return `flex: 0 1 calc((${100 / (item.widthSize || colSize.value)}% - 10px));margin-right:10px;`
  } else {
    return `flex: 0 1 ${100 / (item.widthSize || colSize.value)}%;`
  }
}
// placeholder的显示
const getPlaceholder = (row: any) => {
  // console.log(77, row.date)
  let placeholder
  if (row.comp && typeof row.comp == "string") {
    if (row.comp.includes("input")) {
      placeholder = "请输入" + row.label
    } else if (row.comp.includes("select") || row.comp.includes("date")) {
      placeholder = "请选择" + row.label
    } else {
      placeholder = row.label
    }
  }
  return placeholder
}
// 查询条件change事件
const handleEvent = (
  type: null,
  val: any,
  item: { isTrim: any; comp: string | string[]; type: string; value: string | number } | any,
  flag = true
) => {
  // 去除前后空格
  if (
    flag &&
    props.isTrim &&
    !item.isTrim &&
    item.comp.includes("el-input") &&
    item.type !== "password" &&
    item.type !== "inputNumber"
  ) {
    props.formOpts.formData[item.value] = props.formOpts.formData[item.value].trim()
  }

  emits("handleEvent", type, val)
}
// 自定义校验
const selfValidate = () => {
  return new Promise((resolve: any, reject: any) => {
    tform.value.validate((valid: boolean) => {
      if (valid) {
        resolve({
          valid,
          formData: props.formOpts.formData
        })
      } else {
        reject({
          valid,
          formData: null
        })
      }
    })
  })
}
// 获取所有ref
const getRefs = (el: any, item: any, index: any) => {
  emits("getRefs", el, item, index)
}
// 下拉选择表格组件 ref
const tselecttableref: any = ref({})
// 下拉选择表格组件 动态ref
const handleRef = (el: any, key: any) => {
  if (el) {
    tselecttableref.value[`tselecttableref-${key}`] = el
  }
}
const selfResetFields = () => {
  // 获取所有下拉选择表格组件
  const refList = Object.keys(tselecttableref.value).filter(item =>
    item.includes("tselecttableref")
  )
  if (refList.length > 0 && tselecttableref.value) {
    refList.map(val => {
      // console.log('9999', val)
      tselecttableref.value[val].clear()
    })
  }
  tform.value.resetFields()
}
// 暴露方法出去
defineExpose({ ...instance.exposed, selfValidate, selfResetFields })
</script>

<style lang="scss">
.t-form {
  display: flex;
  flex-wrap: wrap;

  .el-form-item {
    align-items: center;

    .el-form-item__content {
      .el-input,
      .el-select,
      .el-date-editor,
      .el-textarea {
        width: 100%;
      }

      .el-input-number {
        .el-input {
          width: inherit;
        }
      }
    }
  }

  // 左对齐
  .asterisk-left {
    .el-form-item__label {
      margin-left: 5px;
    }
  }

  .t-margin-top-5 {
    margin-top: calc(5px);
  }

  .el-input-number {
    .el-input {
      .el-input__inner {
        text-align: left;
      }
    }
  }

  .render_label {
    .el-form-item__label {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        margin-top: 1px;
      }
    }
  }

  // 左对齐
  .render_laber_position_left {
    .el-form-item__label {
      justify-content: flex-start;
    }
  }

  // 顶部对齐
  &.el-form--label-top {
    .render_label {
      .el-form-item__label {
        justify-content: flex-start;
      }
    }
  }

  .label_render {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .text_show {
    color: var(--el-text-color-primary);
  }

  .slot_label {
    // margin-bottom: 0 !important;
    .el-form-item__content {
      // margin-left: 0 !important;
      label {
        min-width: 108px;
        color: var(--el-text-color-primary);
        // text-align: right;
        margin-right: 12px;
      }
    }
  }

  .flex-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .flex-ver {
    align-items: center;
    justify-content: center;
  }

  .footer_btn {
    width: 100%;
  }
}
</style>
