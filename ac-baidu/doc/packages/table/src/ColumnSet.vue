<template>
  <el-dropdown trigger="click">
    <el-button v-bind="columnBind">{{ columnBind.btnTxt || "列设置" }}</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <span class="title">{{ columnBind.title || "列设置" }}</span>
          <Draggable
            class="t_table_column_setting_dropdown"
            v-model="state.columnSet"
            item-key="prop"
          >
            <template #item="{ element, index }">
              <el-checkbox
                :checked="!element.hidden"
                @click.native.stop
                :disabled="element.checkBoxDisabled"
                @change="(checked: any) => checkChanged(checked, index)"
                >{{ element.label }}</el-checkbox
              >
            </template>
          </Draggable>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="columnSet">
import Draggable from "vuedraggable"
import { watch, onMounted, reactive, computed, useAttrs } from "vue"
const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  columnSetBind: {
    type: Object,
    default: () => {}
  }
})
const $attrs: any = useAttrs()
const columnBind = computed(() => {
  const columnSetBind = { btnTxt: "列设置", title: "列设置", ...props.columnSetBind }
  return { size: "default", icon: "Setting", ...$attrs, ...columnSetBind }
})
// 获取缓存数据
const getColumnSetCache = () => {
  let value: any = localStorage.getItem(`t-ui-plus:TTable.columnSet-${props.name || props.title}`)
  let columnOption = initColumnSet()
  let valueArr = JSON.parse(value) || []
  columnOption.map(item => {
    let findEle = valueArr.find(
      (ele: { label: any; prop: any }) => ele.label === item.label && ele.prop === item.prop
    )
    item.hidden = findEle ? findEle.hidden : false
  })
  initColumnSet().map(val => {
    columnOption.map(item => {
      if (Object.hasOwn(val, "isShowHidden")) {
        if (val.label === item.label && val.prop === item.prop && val.isShowHidden) {
          item.hidden = val.isShowHidden
        }
        if (val.label === item.label && val.prop === item.prop && !val.isShowHidden) {
          item.hidden = val.isShowHidden
        }
      }
    })
  })
  value = JSON.stringify(columnOption)
  return value ? JSON.parse(value) : initColumnSet()
}
// 初始化
const initColumnSet = () => {
  const columnSet = props.columns.map((col: any, index) =>
    col.isShowHidden
      ? {
          label: col.label,
          prop: col.prop,
          hidden: false,
          checkBoxDisabled: false,
          isShowHidden: col.isShowHidden
        }
      : {
          label: col.label,
          prop: col.prop,
          checkBoxDisabled: false,
          hidden: false
        }
  )
  return columnSet
}
// 抛出事件
const emits = defineEmits(["columnSetting"])
const state: any = reactive({
  columnSet: []
})
onMounted(() => {
  state.columnSet = getColumnSetCache()
  // console.log('onMounted', state.columnSet)
  emits("columnSetting", state.columnSet)
})
watch(
  () => state.columnSet,
  val => {
    emits("columnSetting", val)
    // console.log(3333, val)
    localStorage.setItem(
      `t-ui-plus:TTable.columnSet-${props.name || props.title}`,
      JSON.stringify(val)
    )
  },
  { deep: true }
)
// checkbox改变选中状态
const checkChanged = (checked: any, index: string | number) => {
  state.columnSet[index].hidden = !checked
  let obj: any = {}
  state.columnSet.map((val: { hidden: string }) => {
    val.hidden in obj || (obj[val.hidden] = [])
    obj[val.hidden].push(val.hidden)
  })
  if (obj.false.length < 2) {
    state.columnSet.map((val: { hidden: any }, key: string | number) => {
      if (!val.hidden) {
        state.columnSet[key].checkBoxDisabled = true
      }
    })
  } else {
    state.columnSet.map((val: { hidden: any }, key: string | number) => {
      if (!val.hidden) {
        state.columnSet[key].checkBoxDisabled = false
      }
    })
  }
}
</script>
<style lang="scss">
.el-dropdown-menu {
  padding: 10px;
  font-size: 14px;

  .el-dropdown-menu__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-weight: bold;
      margin-bottom: 5px;
    }

    .t_table_column_setting_dropdown {
      display: flex;
      flex-direction: column;
      max-height: 300px;
      overflow-y: auto;
      gap: 10px;

      .el-checkbox {
        .el-checkbox__input.is-checked + .el-checkbox__label {
          color: var(--el-text-color-primary);
        }
      }
    }
  }
}
</style>
