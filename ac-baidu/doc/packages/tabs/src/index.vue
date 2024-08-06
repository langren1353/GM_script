<template>
  <div class="t_tabs">
    <el-tabs v-model="activeName" v-bind="$attrs">
      <template v-for="(index, name) in slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.key"
        v-bind="{
          name: tab.key,
          label: tab.title,
          ...tab.bind
        }"
      >
        <template v-for="(index, name) in slots" v-slot:[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
        <slot :name="tab.key"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts" name="TTabs">
import { ref, useSlots } from "vue"
const props: any = defineProps({
  tabs: {
    type: Array as unknown as any[],
    default: () => {
      return []
    }
  }
})
const slots = useSlots()
const activeName: any = ref(props.tabs && props.tabs[0].key)
const emit = defineEmits(["tabsChange"])
const setSelectedTab = (key: any) => {
  activeName.value = key
}
</script>
<style lang="scss" scoped>
.t_tabs {
  .tabs {
    padding: 0;
    margin: 0;
    .el-tabs {
      .el-tabs__header {
        margin: 0;
        padding: 0 10px;
        background-color: #fff;
      }
      .el-tabs__nav-wrap {
        &::after {
          height: 1px;
        }
      }
    }
  }
}
</style>
