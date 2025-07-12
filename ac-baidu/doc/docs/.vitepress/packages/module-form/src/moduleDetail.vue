<template>
  <div class="t_detail">
    <el-collapse v-model="defaultActiveKey">
      <el-collapse-item
        v-for="(val, index) in descData"
        :class="{
          noTitle: !val.title,
          disabledStyle: val.disabled,
          title_bold: titleBold
        }"
        :key="index"
        :name="val.name"
        :disabled="val.disabled"
      >
        <template #title>
          {{ val.title }}
          <div class="t_btn" v-if="val.btn">
            <slot :name="val.btn"></slot>
          </div>
        </template>
        <template v-if="val.slotName">
          <slot :name="val.slotName"></slot>
        </template>
        <t-detail :descData="val.data" v-bind="attrs">
          <template v-for="(index, name) in slots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </t-detail>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts" name="moduleDetail">
import { computed, useAttrs, useSlots } from "vue"
const props: any = defineProps({
  descData: {
    type: Object,
    default: () => ({})
  },
  // 是否Title文字加粗
  titleBold: {
    type: Boolean,
    default: false
  }
})
const slots = useSlots()
const attrs: any = useAttrs()
const defaultActiveKey = computed({
  get() {
    // console.log(333, Object.keys(props.descData))
    return Object.keys(props.descData)
  },
  set(val) {
    return val
  }
})
</script>
<style lang="scss">
.t_detail {
  .el-collapse {
    border: none;
    .el-collapse-item {
      background-color: var(--el-bg-color);
      margin-top: 10px;
      border: none;
      .el-collapse-item__header {
        border-bottom: 1px solid var(--el-border-color);
        position: relative;
        padding-left: 35px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .t_btn {
          margin-right: 15px;
        }
        .el-collapse-item__arrow {
          color: inherit;
          font-style: normal;
          line-height: 0;
          text-align: center;
          text-transform: none;
          vertical-align: -0.125em;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: absolute;
          top: 17px;
          left: 14px;
          display: inline-block;
          font-size: 14px;
        }
      }
      .el-collapse-item__wrap {
        padding: 16px;
        border: none;
        .el-collapse-item__content {
          padding-bottom: 0;
        }
      }
    }
    // Title文字加粗
    .title_bold {
      .collapse-item_title {
        font-weight: bold;
      }
    }
    // 隐藏手风琴title
    .noTitle {
      margin-top: 0;
      > div {
        &:first-child {
          display: none;
        }
      }
    }
    // 禁用时取消收缩功能及隐藏icon
    .disabledStyle {
      .el-collapse-item__header {
        color: var(--el-collapse-header-text-color);
        cursor: default;
        padding-left: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-collapse-item__arrow {
          display: none;
        }
        .t_btn {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
