<template>
  <el-input
    v-if="isShowInput"
    v-model="selectInputVal"
    v-bind="{ clearable: true, ...inputAttr }"
    @focus="() => emits('input-focus')"
    @blur="() => emits('input-blur')"
    @click="() => emits('input-click')"
    @clear="() => emits('input-clear')"
    :style="{ width: inputWidth ? `${inputWidth}px` : '100%' }"
  >
    <template v-for="(index, name) in slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
  </el-input>
  <el-select
    v-else
    ref="selectRef"
    :model-value="multiple ? state.defaultValue : selectDefaultLabel"
    popper-class="t-select-table"
    :style="{ width: selectWidth ? `${selectWidth}px` : '100%' }"
    :multiple="multiple"
    v-bind="selectAttr"
    :value-key="keywords.value"
    :filterable="filterable"
    :filter-method="filterMethod || filterMethodHandle"
    v-click-outside="closeBox"
    @visible-change="visibleChange"
    @remove-tag="removeTag"
    @clear="clear"
    @keyup="selectKeyup"
  >
    <template #empty>
      <div
        class="t-table-select__table"
        :style="{ width: tableWidth ? `${tableWidth}px` : '100%' }"
      >
        <div class="table_query_condition" v-if="isShowQuery">
          <t-query-condition
            ref="tQueryConditionRef"
            :boolEnter="false"
            @handleEvent="handleEvent"
            v-bind="$attrs"
          >
            <template v-for="(index, name) in slots" v-slot:[name]="data">
              <slot :name="name" v-bind="data"></slot>
            </template>
            <template #querybar v-if="isShowBlurBtn">
              <el-button v-bind="{ type: 'danger', ...btnBind }" @click="blur">{{
                btnBind.btnTxt || "关闭下拉框"
              }}</el-button>
              <slot name="querybar"></slot>
            </template>
          </t-query-condition>
        </div>
        <slot name="toolbar"></slot>
        <el-table
          ref="selectTable"
          :data="state.tableData"
          :class="{
            radioStyle: !multiple,
            highlightCurrentRow: isRadio,
            keyUpStyle: isKeyup
          }"
          highlight-current-row
          border
          :row-class-name="getRowClassName"
          :row-key="getRowKey"
          @row-click="rowClick"
          @cell-dblclick="cellDblclick"
          @selection-change="handlesSelectionChange"
          v-bind="$attrs"
        >
          <el-table-column
            v-if="multiple"
            type="selection"
            width="55"
            align="center"
            :reserve-selection="reserveSelection"
            :selectable="selectable"
            fixed
          ></el-table-column>
          <el-table-column
            type="radio"
            width="55"
            :label="radioTxt"
            fixed
            align="center"
            v-if="!multiple && isShowFirstColumn"
          >
            <template #default="scope">
              <el-radio
                v-model="radioVal"
                :label="scope.$index + 1"
                @click.stop="radioChangeHandle($event, scope.row, scope.$index + 1)"
              ></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in columns"
            :key="index + 'i'"
            :type="item.type"
            :label="item.label"
            :prop="item.prop"
            :min-width="item['min-width'] || item.minWidth"
            :width="item.width"
            :align="item.align || 'center'"
            :fixed="item.fixed"
            v-bind="{ 'show-overflow-tooltip': true, ...item.bind, ...$attrs }"
          >
            <template #default="scope">
              <!-- render方式 -->
              <template v-if="item.render">
                <render-col
                  :column="item"
                  :row="scope.row"
                  :render="item.render"
                  :index="scope.$index"
                />
              </template>
              <!-- 作用域插槽 -->
              <template v-if="item.slotName">
                <slot :name="item.slotName" :scope="scope"></slot>
              </template>
              <div v-if="!item.render && !item.slotName">
                <span>{{ scope.row[item.prop] }}</span>
              </div>
            </template>
          </el-table-column>
          <slot></slot>
        </el-table>
        <slot name="footer"></slot>
        <div class="t-table-select__page" v-if="isShowPagination">
          <el-pagination
            v-model:current-page="table.currentPage"
            v-model:page-size="table.pageSize"
            small
            size="small"
            background
            @current-change="handlesCurrentChange"
            layout="total, prev, pager, next, jumper"
            :pager-count="5"
            :total="table.total"
            v-bind="$attrs"
          />
        </div>
      </div>
    </template>
  </el-select>
</template>

<script setup lang="ts" name="TSelectTable">
import TQueryCondition from "../../query-condition/src/index.vue"
import RenderCol from "./renderCol.vue"
import {
  computed,
  useAttrs,
  useSlots,
  ref,
  watch,
  nextTick,
  reactive,
  onMounted,
  onUpdated
} from "vue"
import { ElMessage } from "element-plus"
import ClickOutside from "../../utils/directives/click-outside/index"
const props = defineProps({
  // input输入框的值（modelValue）
  inputValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined
  },
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined
  },
  // 是否显示input框回显
  isShowInput: {
    type: Boolean,
    default: false
  },
  // input框的宽度
  inputWidth: {
    type: [String, Number],
    default: 550
  },
  // input属性
  inputAttr: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 选择值
  value: {
    type: [String, Number, Array]
  },
  // table所需数据
  table: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 表头数据
  columns: {
    type: Array as unknown as any[],
    default: () => []
  },
  // 单选文案
  radioTxt: {
    type: String,
    default: "单选"
  },
  // 是否显示搜索条件
  isShowQuery: {
    type: Boolean,
    default: false
  },
  // 是否清空搜索条件
  isClearQuery: {
    type: Boolean,
    default: false
  },
  // 是否显示隐藏下拉框按钮
  isShowBlurBtn: {
    type: Boolean,
    default: false
  },
  // 显示隐藏下拉框按钮属性
  btnBind: {
    type: Object,
    default: () => {
      return {
        btnTxt: "关闭下拉框"
      }
    }
  },
  // 单选框--是否开启点击整行选中
  rowClickRadio: {
    type: Boolean,
    default: true
  },
  // 是否显示首列
  isShowFirstColumn: {
    type: Boolean,
    default: true
  },
  // 是否过滤
  filterable: {
    type: Boolean,
    default: true
  },
  // 是否支持翻页选中
  reserveSelection: {
    type: Boolean,
    default: true
  },
  // 是否显示分页
  isShowPagination: {
    type: Boolean,
    default: false
  },
  // 是否自定义过滤
  filterMethod: {
    type: Function
  },
  // 下拉数据指向的label/value
  keywords: {
    type: Object,
    default: () => {
      return {
        label: "label",
        value: "value"
      }
    }
  },
  // 单选是否开启键盘事件
  isKeyup: {
    type: Boolean,
    default: false
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false
  },
  // select 宽度
  selectWidth: {
    type: [String, Number],
    default: 550
  },
  // table宽度
  tableWidth: {
    type: [String, Number],
    default: 550
  },
  // 是否始终显示下拉框
  selfExpanded: {
    type: Boolean,
    default: false
  },
  // 显示下拉框
  isExpanded: {
    type: Boolean,
    default: false
  },
  // 设置默认选中项--keywords.value值
  defaultSelectVal: {
    type: Array,
    default: () => []
  },
  // Function(row: any, index: number) 的返回值用来决定这一行的 CheckBox 是否可以勾选
  selectable:Function
})
const selectAttr = computed(() => {
  return {
    clearable: true,
    ...useAttrs()
  }
})
// 自定义指令
const vClickOutside = ClickOutside
// 抛出事件
const emits = defineEmits([
  "page-change",
  "selectionChange",
  "radioChange",
  "update:inputValue",
  "input-focus",
  "input-blur",
  "input-clear",
  "input-click"
])
const slots = useSlots()
const isDefaultSelectVal = ref(true) // 是否已经重新选择了
const forbidden = ref(true) // 判断单选选中及取消选中
const isRadio = ref(false)
const isQueryVisible = ref(false) // 查询条件是否显示隐藏下拉框
const isVisible = ref(false) // 是否显示隐藏下拉框
const radioVal = ref("")
const selectDefaultLabel: any = ref(props.modelValue) // 单选赋值
// input回显值
let selectInputVal: any = computed({
  get() {
    return props.inputValue
  },
  set(val) {
    // console.log(777, val)
    emits("update:inputValue", val)
  }
})
const state: any = reactive({
  defaultSelectValue: props.defaultSelectVal, // 默认选中
  tableData: props.table.data, // table数据
  defaultValue: props.value,
  ids: [], // 多选id集合
  tabularMap: {} // 存储下拉tale的所有name
})
// 获取ref
const selectRef: any = ref<HTMLElement | null>(null)
const selectTable: any = ref<HTMLElement | null>(null)
const tQueryConditionRef: any = ref<HTMLElement | null>(null)
const nowIndex = ref(-1)
watch(
  () => props.table.data,
  val => {
    state.tableData = val
    nextTick(() => {
      state.tableData &&
        state.tableData.length > 0 &&
        state.tableData.forEach((item: { [x: string]: any }) => {
          state.tabularMap[item[props.keywords.value]] = item[props.keywords.label]
        })
    })
  },
  { deep: true }
)
watch(
  () => props.defaultSelectVal,
  val => {
    console.log("props.defaultSelectVal---watch", val, isDefaultSelectVal.value)
    state.defaultSelectValue = val
    if (val.length > 0 && isDefaultSelectVal.value) {
      defaultSelect(val)
    }
  },
  { deep: true }
)
onMounted(() => {
  // 设置默认选中项（单选）
  if (state.defaultSelectValue && state.defaultSelectValue.length > 0 && isDefaultSelectVal.value) {
    defaultSelect(state.defaultSelectValue)
  }
  if (props.selfExpanded) {
    selectRef.value.expanded = true
  }
})
// 解决查询条件下拉选择table闪烁问题
onUpdated(() => {
  if (props.isShowQuery) {
    // console.log('onUpdated--22')
    selectTable.value.doLayout()
  }
})
// 表格显示隐藏回调
const visibleChange = (visible: boolean) => {
  // console.log('表格显示隐藏回调', visible)
  isVisible.value = visible
  if (isQueryVisible.value) {
    selectRef.value.expanded = true
  }
  // console.log('表格显示隐藏回调--222', visible)
  if (visible) {
    if (
      state.defaultSelectValue &&
      state.defaultSelectValue.length > 0 &&
      isDefaultSelectVal.value
    ) {
      defaultSelect(state.defaultSelectValue)
    }
    initTableData()
  } else {
    if (
      tQueryConditionRef.value &&
      props.isShowQuery &&
      props.isClearQuery &&
      !selectRef.value.expanded &&
      !props.selfExpanded
    ) {
      tQueryConditionRef.value?.resetData()
    }
    findLabel()
    filterMethodHandle("")
  }
  if (props.selfExpanded) {
    selectRef.value.expanded = true
  }
}
// 查询条件change事件触发
const handleEvent = () => {
  // console.log('查询条件change事件触发')
  selectRef.value.expanded = true
}
// 条件查询组件的visible-change事件
const queryVisibleChange = (val: boolean) => {
  isQueryVisible.value = val
}
// el-select点击了空白区域
const closeBox = () => {
  // console.log('select点击了空白区域', tQueryConditionRef.value)
  // if(props.selfExpanded){
  //   selectRef.value.expanded = true
  // }
  // 获取查询条件组件的项
  if (tQueryConditionRef.value && props.isShowQuery) {
    selectRef.value.expanded = true
    Object.values(tQueryConditionRef.value?.props?.opts).map((val: any) => {
      if (val.comp.includes("select") || val.comp.includes("picker") || val.comp.includes("date")) {
        val.eventHandle = {
          "visible-change": ($event: boolean) => queryVisibleChange($event)
        }
        // queryVisibleChange(true)
        // isQueryVisible.value = true
        selectRef.value.expanded = true
      }
    })
    if (isVisible.value && props.isShowQuery) {
      selectRef.value.expanded = true
    } else {
      selectRef.value.expanded = false
    }
  }
}
// 单选键盘事件
const selectKeyup = (e: { keyCode: any }) => {
  if (!props.multiple) {
    if (!props.isKeyup) return
    if (state.tableData.length === 0) return
    switch (e.keyCode) {
      case 40: // 下键
        if (state.tableData[nowIndex.value * 1 + 1] !== undefined) {
          selectTable.value.setCurrentRow(state.tableData[nowIndex.value * 1 + 1])
          nowIndex.value = nowIndex.value * 1 + 1
        } else {
          nowIndex.value = 0
          selectTable.value.setCurrentRow(state.tableData[0])
        }
        break
      case 38: // 上键
        if (state.tableData[nowIndex.value * 1 - 1] !== undefined && nowIndex.value > 0) {
          selectTable.value.setCurrentRow(state.tableData[nowIndex.value * 1 - 1])
          nowIndex.value = nowIndex.value * 1 - 1
        } else {
          nowIndex.value = 0
          selectTable.value.setCurrentRow(state.tableData[0])
        }
        break
      case 13: // 回车
        rowClick(state.tableData[nowIndex.value])
        break
    }
  }
}
// 赋值
const findLabel = () => {
  nextTick(() => {
    if (props.multiple) {
      selectRef.value.selected?.forEach((item: { currentLabel: any; value: any }) => {
        item.currentLabel = item.value
      })
    } else {
      selectDefaultLabel.value =
        (state.defaultValue && state.defaultValue[props.keywords.label]) || ""
    }
  })
}

// 当前页码
const handlesCurrentChange = (val: any) => {
  if (props.multiple) {
    if (!props.reserveSelection) {
      clear()
    }
  } else {
    clear()
  }
  emits("page-change", val)
}
// 默认选中（且只能默认选中第一页的数据）
const defaultSelect = (defaultSelectVal: any[]) => {
  if (props.multiple) {
    let multipleList: any = []
    defaultSelectVal.map(val => {
      state.tableData.forEach((row: any) => {
        if (val === row[props.keywords.value]) {
          multipleList.push(row)
        }
      })
    })
    setTimeout(() => {
      state.defaultValue = multipleList.map(
        (item: { [x: string]: any }) => item[props.keywords.label]
      )
      multipleList.forEach((row: { [x: string]: any }) => {
        const arr = state.tableData.filter(
          (item: { [x: string]: any }) => item[props.keywords.value] === row[props.keywords.value]
        )
        if (arr.length > 0) {
          selectTable.value.toggleRowSelection(arr[0], true)
        }
      })
      selectRef.value?.selected?.forEach((item: { currentLabel: any; value: any }) => {
        item.currentLabel = item.value
      })
    }, 0)
  } else {
    let row = {} as any
    let index: any
    state.tableData.map((val: { [x: string]: any }, i: any) => {
      if (val[props.keywords.value] === defaultSelectVal[0]) {
        row = val
        index = i
      }
    })
    radioVal.value = index + 1
    state.defaultValue = row
    setTimeout(() => {
      selectDefaultLabel.value = row && row[props.keywords.label]
    }, 0)
    emits("radioChange", row, row && row[props.keywords.value])
  }
}
// 复选框(多选)
const handlesSelectionChange = (val: any[]) => {
  // console.log('复选框', val)
  isDefaultSelectVal.value = false
  state.defaultValue = val.map(item => item[props.keywords.label])
  state.ids = val.map(item => item[props.keywords.value])
  if (val.length === 0) {
    isDefaultSelectVal.value = true
    state.defaultSelectValue = []
  }
  emits("selectionChange", val, state.ids)
}
// 设置table行class
const getRowClassName = ({ row }: any) => {
  if (!props.multiple && JSON.stringify(row) === JSON.stringify(state.defaultValue)) {
    return "selected_row_style"
  }
  return ""
}
// 搜索后表格勾选不取消
const getRowKey = (row: { [x: string]: any }) => {
  return row[props.keywords.value]
}
// 搜索过滤
const filterMethodHandle = (val: string) => {
  if (!props.filterable) return
  const tableData = JSON.parse(JSON.stringify(props.table?.data))
  if (tableData && tableData.length > 0) {
    if (!props.multiple) {
      if (val) {
        radioVal.value = ""
      } else {
        tableData.map((item: { [x: string]: any }, index: number | any) => {
          if (
            item[props.keywords.value] === selectDefaultLabel.value &&
            selectDefaultLabel.value[props.keywords.value]
          ) {
            radioVal.value = index + 1
          }
        })
      }
    }
    state.tableData = tableData.filter((item: { [x: string]: string | string[] }) => {
      if (item[props.keywords.label].includes(val)) {
        return item
      }
    })
  }
}

// 获取表格数据
const initTableData = () => {
  // 表格默认赋值
  nextTick(() => {
    if (props.multiple) {
      state.defaultValue?.forEach((row: { [x: string]: any }) => {
        const arr = state.tableData.filter(
          (item: { [x: string]: any }) => item[props.keywords.value] === row[props.keywords.value]
        )
        if (arr.length > 0) {
          selectTable.value.toggleRowSelection(arr[0], true)
        }
      })
    } else {
      const arr = state.tableData.filter(
        (item: { [x: string]: any }) =>
          item[props.keywords.value] === selectDefaultLabel.value &&
          selectDefaultLabel.value[props.keywords.value]
      )
      selectTable.value.setCurrentRow(arr[0])
    }
  })
}
// 复制内容
const copyDomText = (val: any) => {
  // 获取需要复制的元素以及元素内的文本内容
  const text = val
  // 添加一个input元素放置需要的文本内容
  const input = document.createElement("input")
  input.value = text
  document.body.appendChild(input)
  // 选中并复制文本到剪切板
  input.select()
  document.execCommand("copy")
  // 移除input元素
  document.body.removeChild(input)
}
// 双击复制单元格内容
const cellDblclick = (row: { [x: string]: any }, column: { property: string | number }) => {
  try {
    copyDomText(row[column.property])
    ElMessage.success("复制成功")
  } catch (e) {
    ElMessage.error("复制失败")
  }
}
// 点击单选框单元格触发事件
const radioChangeHandle = (event: { preventDefault: () => void }, row: any, index: any) => {
  event.preventDefault()
  isDefaultSelectVal.value = false
  radioClick(row, index)
}
// forbidden取值
const isForbidden = () => {
  forbidden.value = false
  setTimeout(() => {
    forbidden.value = true
  }, 0)
}
// 单选抛出事件radioChange
const radioClick = (row: { [x: string]: any }, index: string) => {
  forbidden.value = !!forbidden.value
  if (radioVal.value) {
    if (radioVal.value === index) {
      radioVal.value = ""
      isForbidden()
      state.defaultValue = {}
      state.defaultSelectValue = []
      isDefaultSelectVal.value = true
      emits("radioChange", {}, null) // 取消勾选就把回传数据清除
      // blur()
    } else {
      isForbidden()
      radioVal.value = index
      state.defaultValue = row
      emits("radioChange", row, row[props.keywords.value])
      // blur()
    }
  } else {
    isForbidden()
    radioVal.value = index
    state.defaultValue = row
    emits("radioChange", row, row[props.keywords.value])
  }
  // 是否显示下拉框
  if (props.isExpanded) {
    selectDefaultLabel.value =
      (state.defaultValue && state.defaultValue[props.keywords.label]) || ""
    selectRef.value.expanded = true
  } else {
    blur()
  }
}
// 单击行
const rowClick = async (row: { [x: string]: any }) => {
  if (!props.rowClickRadio) return
  if (!props.multiple) {
    let rowIndex: any
    // eslint-disable-next-line no-unused-expressions
    props.table?.data.forEach((item: { [x: string]: any }, index: any) => {
      if (item[props.keywords.value] === row[props.keywords.value]) {
        // console.log('index', index)
        rowIndex = index
      }
    })
    // await this.radioClick(row, rowIndex + 1)
    isDefaultSelectVal.value = false
    await radioClick(row, rowIndex + 1)
    if (radioVal.value) {
      isRadio.value = true
    } else {
      isRadio.value = false
    }
  }
}
// tags删除后回调
const removeTag = (tag: any) => {
  const row = state.tableData.find(
    (item: { [x: string]: any }) => item[props.keywords.label] === tag
  )
  console.log("tags删除后回调", row)
  selectTable.value.toggleRowSelection(row, false)
  isDefaultSelectVal.value = true
}
// 清空后的回调
const clear = () => {
  if (props.multiple) {
    selectTable.value.clearSelection()
    isDefaultSelectVal.value = true
    state.defaultSelectValue = []
    state.defaultValue = []
  } else {
    // 取消高亮
    selectTable.value.setCurrentRow(-1)
    nowIndex.value = -1
    radioVal.value = ""
    isDefaultSelectVal.value = true
    state.defaultSelectValue = []
    forbidden.value = false
    selectDefaultLabel.value = null
    state.defaultValue = null
    emits("radioChange", {}, null)
  }
}
// 触发select隐藏
const blur = () => {
  selectRef.value.blur()
}
// 触发select显示
const focus = () => {
  selectRef.value.focus()
}
// 暴露方法出去
defineExpose({
  focus,
  blur,
  clear,
  props,
  tQueryConditionRef,
  selectRef,
  selectTable
})
</script>

<style lang="scss">
.t-select-table {
  // 单选样式
  .radioStyle {
    .el-radio {
      .el-radio__label {
        display: none;
      }
      &:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
        box-shadow: none;
      }
    }
    .el-table__row {
      cursor: pointer;
    }
  }
  // 键盘事件开启选择高亮
  .keyUpStyle {
    .el-table__body {
      tbody {
        .current-row {
          color: var(--el-color-primary) !important;
          cursor: pointer;
        }
      }
    }
  }
  // 键盘事件开启选中行样式
  .selected_row_style {
    color: var(--el-color-primary);
    cursor: pointer;
  }
  // 选中行样式
  .highlightCurrentRow {
    :deep(.current-row) {
      color: var(--el-color-primary);
      cursor: pointer;
    }
  }
  .t-table-select__table {
    padding: 10px;

    .el-table__body,
    .el-table__header {
      margin: 0;
    }
    // 条件查询组件样式
    .table_query_condition {
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 10px;
    }
  }

  .t-table-select__page {
    padding-top: 5px;
    padding-right: 10px;
    .el-pagination {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: calc(2% - 20px);
      background-color: var(--el-table-tr-bg-color);
    }
  }
}
</style>
./directives
