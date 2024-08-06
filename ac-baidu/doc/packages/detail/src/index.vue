<template>
  <el-descriptions class="t_detail" v-bind="$attrs" :column="descColumn">
    <el-descriptions-item
      v-for="(item, key) in descData"
      :key="key"
      :label="item.label"
      :span="item.span || 1"
      v-bind="{ ...item.bind, ...$attrs }"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName"></slot>
      </template>
      <span class="tip_class" v-else>
        <el-tooltip v-bind="$attrs" v-if="item.tooltip" :placement="item.placement || 'bottom'">
          <span>
            <span v-if="item.filters && item.filters.list">
              {{
                constantEscape(
                  dataList[item.fieldName],
                  listTypeInfo[item.filters.list],
                  item.filters.key || "value",
                  item.filters.label || "label"
                )
              }}
            </span>
            <span v-else>{{ item.value }}</span>
            <el-icon
              :size="item.iconSize"
              :color="item.iconColor"
              style="cursor: pointer; margin-left: 2px; top: 1px"
            >
              <Warning />
            </el-icon>
          </span>
          <template #content v-if="item.tooltip">
            <span v-if="typeof item.tooltip === 'string'">{{ item.tooltip }}</span>
            <template v-else-if="typeof item.tooltip === 'function'">
              <render-tooltip :render="item.tooltip" :item="item" />
            </template>
          </template>
        </el-tooltip>
        <span v-else>
          <span v-if="item.filters && item.filters.list">
            {{
              constantEscape(
                dataList[item.fieldName],
                listTypeInfo[item.filters.list],
                item.filters.key || "value",
                item.filters.label || "label"
              )
            }}
          </span>
          <span v-else>{{ item.value }}</span>
        </span>
      </span>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts" name="TDetail">
import RenderTooltip from "./renderTooltip.vue"
defineProps({
  descColumn: {
    type: Number,
    default: 4
  },
  // 后台数据源
  dataList: {
    type: Object,
    default: () => ({})
  },
  // 需要解析的下拉数据
  listTypeInfo: {
    type: Object,
    default: () => ({})
  },
  descData: {
    type: Array as unknown as any[],
    default: () => []
  }
})
/**
 * 下拉数据回显中文过滤器
 * @param [String,Number] value 需要转中文的key值
 * @param {String} list  数据源
 * @param [String,Number] key  数据源的key字段（默认：value）
 * @param {String} label  数据源的label字段（默认：label）
 */
const constantEscape = (value: any, list: any[], key: string | number, label: string | number) => {
  const res = list.find(item => {
    return item[key] === value
  })
  return res && res[label]
}
</script>
<style lang="scss" scoped>
.t_detail {
  :deep(.el-descriptions__label) {
    font-weight: bold;
    min-width: 65px;
  }
}
</style>
