<template>
  <el-form
    id="t_query_condition"
    v-bind="$attrs"
    :label-width="labelWidth"
    :form="queryState.form"
    size="default"
    class="t-query-condition"
    :style="{
      'grid-template-areas': gridAreas,
      'grid-template-columns': `repeat(${colLength}, minmax(0px, ${100 / colLength}%))`
    }"
    @submit.prevent
  >
    <el-form-item
      v-for="(opt, i) in cOpts"
      :key="i"
      :label="opt.label"
      :label-width="opt.labelWidth"
      v-bind="$attrs"
      :style="{ gridArea: i }"
      :class="[opt.className, { render_label: opt.labelRender }]"
    >
      <!-- 自定义label -->
      <template #label v-if="opt.labelRender">
        <render-comp :form="queryState.form" :render="opt.labelRender" />
      </template>
      <!-- 自定义输入框插槽 -->
      <template v-if="opt.slotName">
        <slot :name="opt.slotName" :param="queryState.form" :scope="queryState.form"></slot>
      </template>
      <template v-if="opt.isSelfCom">
        <component
          :is="opt.comp"
          :ref="opt.comp === 't-select-table' ? (el: any) => handleRef(el, i) : ''"
          v-model="queryState.form[opt.dataIndex]"
          :placeholder="opt.placeholder || getPlaceholder(opt)"
          v-bind="
            typeof opt.bind == 'function'
              ? opt.bind(queryState.form)
              : { clearable: true, filterable: true, ...$attrs, ...opt.bind }
          "
          :style="{ width: opt.width || '100%' }"
          @change="handleEvent(opt.event, queryState.form[opt.dataIndex])"
          v-on="cEvent(opt)"
        />
      </template>
      <component
        v-if="!opt.slotName && !opt.isSelfCom && opt.comp.includes('date')"
        :is="opt.comp"
        v-bind="
          typeof opt.bind == 'function'
            ? opt.bind(queryState.form)
            : { clearable: true, filterable: true, ...$attrs, ...opt.bind }
        "
        :placeholder="opt.placeholder || getPlaceholder(opt)"
        @change="handleEvent(opt.event, queryState.form[opt.dataIndex])"
        v-model="queryState.form[opt.dataIndex]"
        v-on="cEvent(opt)"
      />
      <component
        v-if="!opt.slotName && !opt.isSelfCom && opt.comp.includes('tree-select')"
        :is="opt.comp"
        v-bind="
          typeof opt.bind == 'function'
            ? opt.bind(queryState.form)
            : { clearable: true, filterable: true, ...$attrs, ...opt.bind }
        "
        :placeholder="opt.placeholder || getPlaceholder(opt)"
        @change="handleEvent(opt.event, queryState.form[opt.dataIndex])"
        v-model="queryState.form[opt.dataIndex]"
        v-on="cEvent(opt)"
      />
      <component
        v-if="
          !opt.isSelfCom &&
          !opt.slotName &&
          !opt.comp.includes('date') &&
          !opt.comp.includes('tree-select')
        "
        :is="opt.comp"
        v-bind="
          typeof opt.bind == 'function'
            ? opt.bind(queryState.form)
            : { clearable: true, filterable: true, ...$attrs, ...opt.bind }
        "
        :placeholder="opt.placeholder || getPlaceholder(opt)"
        @change="handleEvent(opt.event, queryState.form[opt.dataIndex])"
        v-on="cEvent(opt)"
        v-model="queryState.form[opt.dataIndex]"
      >
        <component
          :is="compChildName(opt)"
          v-for="(value, key, index) in selectListType(opt)"
          :key="index"
          :disabled="value.disabled"
          :label="compChildLabel(opt, value)"
          :value="compChildValue(opt, value, key)"
          >{{ compChildShowLabel(opt, value) }}</component
        >
      </component>
    </el-form-item>
    <el-form-item
      v-if="Object.keys(cOpts).length > 0"
      label-width="0"
      style="grid-area: submit_btn"
      :class="[
        'btn',
        { flex_end: cellLength % colLength === 0 },
        { btn_flex_end: Object.keys(cOpts).length === 4 || cellLength > 3 }
      ]"
    >
      <template v-if="footer !== null">
        <slot name="footerBtn" />
        <template v-if="!slots.footerBtn">
          <el-button
            class="btn_check"
            @click="checkHandle"
            v-bind="queryAttrs"
            :loading="loading"
            >{{ queryAttrs.btnTxt }}</el-button
          >
          <el-button v-if="reset" class="btn_reset" v-bind="resetAttrs" @click="resetHandle">{{
            resetAttrs.btnTxt
          }}</el-button>
          <slot name="querybar"></slot>
          <el-button
            v-if="originCellLength > maxVisibleRows * colLength && isShowOpen"
            @click="open = !open"
            link
          >
            {{ open ? packUpTxt : unfoldTxt }}
            <el-icon v-if="open">
              <ArrowUp />
            </el-icon>
            <el-icon v-else>
              <ArrowDown />
            </el-icon>
          </el-button>
        </template>
      </template>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts" name="TQueryCondition">
import RenderComp from "./renderComp.vue"
import { computed, ref, watch, useSlots, onMounted, reactive } from "vue"
const props = defineProps({
  opts: {
    type: Object,
    required: true,
    default: () => ({})
  },
  labelWidth: {
    type: String,
    default: "120px"
  },
  // 查询按钮配置
  btnCheckBind: {
    type: Object,
    default: () => ({})
  },
  // 重置按钮配置
  btnResetBind: {
    type: Object,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  },
  reset: {
    type: Boolean,
    default: true
  },
  boolEnter: {
    type: Boolean,
    default: true
  },
  // 是否显示收起和展开
  isShowOpen: {
    type: Boolean,
    default: true
  },
  // 是否默认展开
  isExpansion: {
    type: Boolean,
    default: false
  },
  // 收起时设置默认展示行数
  maxVisibleRows: {
    type: Number,
    default: 1
  },
  packUpTxt: {
    type: String,
    default: "收起"
  },
  unfoldTxt: {
    type: String,
    default: "展开"
  },
  // 是否显示底部操作按钮 :footer="null"
  footer: Object,
  configChangedReset: {
    type: Boolean,
    default: false
  },
  // 是否开启一行显示几个查询条件
  isShowWidthSize: {
    type: Boolean,
    default: false
  },
  // 一行显示几个查询条件
  widthSize: {
    type: Number,
    default: 4
  }
})
const slots = useSlots()
// 判断是否使用了某个插槽
const isShow = (name: string) => {
  return Object.keys(slots).includes(name)
}
// 初始化表单数据
let queryState = reactive({
  form: Object.keys(props.opts).reduce((acc: any, field: any) => {
    acc[field] = props.opts[field].defaultVal || null
    return acc
  }, {})
})
let colLength = ref(4)
let open = ref(false)
// 默认展开
if (props.isExpansion) {
  open.value = true
} else {
  open.value = false
}
// 查询按钮配置
const queryAttrs = computed(() => {
  return {
    type: "primary",
    size: "default",
    btnTxt: "查询",
    ...props.btnCheckBind
  }
})
// 重置按钮配置
const resetAttrs = computed(() => {
  return { size: "default", btnTxt: "重置", ...props.btnResetBind }
})
const originCellLength = computed(() => {
  let length = 0
  Object.keys(props.opts).forEach(key => {
    let span = props.opts[key].span || 1
    if ((length % colLength.value) + span > colLength.value) {
      length += colLength.value - (length % colLength.value)
    }
    length += span
  })
  return length
})
const cOpts = computed(() => {
  let renderSpan = 0
  return Object.keys(props.opts).reduce((acc: any, field: any) => {
    let opt = {
      ...props.opts[field]
    }
    // 收起、展开操作
    if (props.isShowOpen) {
      renderSpan += opt.span ?? 1
      if (!open.value && renderSpan - 1 >= props.maxVisibleRows * colLength.value) return acc
    }
    opt.dataIndex = field
    acc[field] = opt
    return acc
  }, {})
})
const cellLength: any = computed(() => {
  // 占用单元格长度
  let length = 0
  Object.keys(props.opts).forEach(key => {
    let span = props.opts[key].span > 4 ? 4 : props.opts[key].span || 1
    length += span
  })
  return length
})
const gridAreas = computed(() => {
  // grid布局按钮位置
  const fields = Object.keys(cOpts.value)
  let rowIndex = 0
  let rowSpan = 0
  const areas: any = [[]]
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
    const field = fields[fieldIndex]
    const opt = cOpts.value[field]
    const span = Math.min(opt.span ?? 1, 4) // 最大4
    if (rowSpan + span > colLength.value) {
      if (rowSpan < colLength.value) {
        areas[rowIndex].push(".")
      }
      rowSpan = 0
      areas[++rowIndex] = []
    }
    rowSpan += span
    for (let index = 0; index < span; index++) {
      areas[rowIndex].push(field)
    }
  }
  if (areas[rowIndex].length === colLength.value) {
    // areas.push(['submit_btn', 'submit_btn', 'submit_btn', 'submit_btn'])
    areas.push(Array(colLength.value).fill("submit_btn"))
  } else {
    while (areas[rowIndex].length < colLength.value) {
      areas[rowIndex].push("submit_btn")
    }
  }
  return areas.reduce((acc: string, cur: any[]) => {
    acc += `'${cur.join(" ")}'\n`
    return acc
  }, "")
})
// 引用第三方事件
const cEvent = computed(() => {
  return (opt: { eventHandle: any; comp: string | string[] }) => {
    // console.log('opt--', opt)
    let event = { ...opt.eventHandle }
    let changeEvent = {} as any
    Object.keys(event).forEach(v => {
      changeEvent[v] = (e: any) => {
        if (
          opt.comp.includes("select") ||
          opt.comp.includes("picker") ||
          opt.comp.includes("date")
        ) {
          event[v] && event[v](e, queryState.form)
        } else {
          if (e) {
            event[v] && event[v](e, queryState.form)
          } else {
            event[v] && event[v](queryState.form)
          }
        }
      }
    })
    return { ...changeEvent }
  }
})
// 初始化表单数据
const initForm = (opts: any, keepVal = false) => {
  return Object.keys(opts).reduce((acc: any, field) => {
    if (keepVal && queryState.form) {
      acc[field] = queryState.form[field] ?? opts[field].defaultVal ?? null
    } else {
      acc[field] = opts[field].defaultVal ?? null
    }
    return acc
  }, {})
}
const getColLength = () => {
  // 行列数
  const width = window.innerWidth
  let colLength = 4
  if (width > 768 && width < 1280) {
    colLength = 3
  } else if (width <= 768) {
    colLength = 2
  }
  return colLength
}
const emits = defineEmits(["handleEvent", "submit", "reset"])
// 下拉选择表格组件 ref
const tselecttableref: any = ref({})
// 下拉选择表格组件 动态ref
const handleRef = (el: any, key: any) => {
  if (el) {
    tselecttableref.value[`tselecttableref-${key}`] = el
  }
}
// 重置
const resetHandle = () => {
  queryState.form = initForm(props.opts)
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
  emits("reset", queryState.form)
  checkHandle("reset")
}
// 重置数据
const resetData = () => {
  queryState.form = initForm(props.opts)
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
}
// 查询条件change事件
const handleEvent = (type: any, val: any) => {
  emits("handleEvent", type, val, queryState.form)
}
// 查询
const checkHandle = (flagText: any = false) => {
  emits("submit", queryState.form, flagText)
}
// 子组件名称
const compChildName: any = computed(() => {
  return (opt: any) => {
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
// 下拉数据
const selectListType = computed(() => {
  return (opt: any) => {
    if (opt.listTypeInfo) {
      return opt.listTypeInfo[opt.list]
    } else {
      return []
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
onMounted(() => {
  if (props.isShowWidthSize) {
    colLength.value = props.widthSize
  } else {
    colLength.value = getColLength()
  }
  if (props.boolEnter) {
    document.onkeyup = e => {
      // console.log(7777, e)
      let key = e.keyCode
      let pagination = document.querySelectorAll(".el-pagination")
      let isPaginationInputFocus = false
      if (pagination) {
        pagination.forEach(ele => {
          let paginationInputList = ele.getElementsByTagName("input")
          let paginationInput = paginationInputList[paginationInputList.length - 1]
          // 判断是否有分页器筛选输入框获取焦点
          if (paginationInput === document.activeElement) {
            isPaginationInputFocus = true
          }
        })
      }
      if (isPaginationInputFocus) {
        return
      }
      if (key === 13) {
        checkHandle()
      }
    }
  }
  // 使用自定义按钮插槽默认展开所有查询条件
  if (isShow("footer")) {
    open.value = true
  }
})
watch(
  () => props.widthSize,
  val => {
    colLength.value = val
  }
)
watch(
  () => props.opts,
  opts => {
    queryState.form = initForm(opts, !props.configChangedReset)
  },
  { deep: true }
)

// 暴露方法出去
defineExpose({
  queryState,
  props,
  colLength,
  resetData,
  resetHandle,
  checkHandle
})
</script>

<style lang="scss">
.t-query-condition.el-form {
  position: relative;
  display: grid;
  gap: 2px 8px;
  margin-bottom: -7px;
  text-align: left;

  .el-select,
  .el-date-editor,
  .ant-calendar-picker {
    width: 100%;
  }

  .flex_end {
    grid-area: submit_btn;
    margin-top: 2px;

    .el-form-item__content {
      display: flex;
      // justify-content: flex-end;
      align-items: center;
      overflow: visible !important;
    }
  }

  .btn {
    .el-form-item__content {
      display: flex;
      // justify-content: flex-end;
    }
  }

  .btn_flex_end {
    .el-form-item__content {
      justify-content: flex-end;
    }
  }

  .el-form-item {
    display: flex;
    margin-bottom: 6px;

    .el-form-item__label {
      flex-shrink: 0;
      min-width: 60px;
      padding-left: 8px;
    }

    .el-form-item__content {
      flex-grow: 1;
      // overflow: hidden;
      margin-left: 0 !important;
    }
  }

  .render_label {
    .el-form-item__label {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &::before {
        margin-top: 1px;
      }
    }
  }

  .btn_check {
    position: relative;
    top: -1px;
  }

  .btn_reset {
    position: relative;
    top: -1px;
    margin-left: 8px;
  }
}
</style>
