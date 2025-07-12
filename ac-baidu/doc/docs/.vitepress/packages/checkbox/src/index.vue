<template>
  <el-checkbox-group v-bind="$attrs" :size="size">
    <slot>
      <component
        v-for="(item, index) in options"
        v-bind="item"
        :is="checkType"
        :key="index"
        :value="item[optionsProps.value]"
        :border="border"
        :disabled="item[optionsProps.disabled]"
      >
        <slot :name="item.slot" v-bind="item">
          {{ item[optionsProps.label] }}
        </slot>
      </component>
    </slot>
  </el-checkbox-group>
</template>

<script setup lang="ts" name="TCheckbox">
import { computed, ref } from "vue"
import type { PropType } from "vue"
import type { OptionsProps, CheckboxItem } from "./checkbox"
const checkProps = defineProps({
  type: {
    type: String as PropType<"check" | "button">,
    validator: (value: string) => ["check", "button"].includes(value),
    default: "check"
  },
  options: {
    type: Array as unknown as any[],
    default: () => []
  },
  size: {
    type: String as PropType<"large" | "default" | "small">,
    validator: (value: string) => ["large", "default", "small"].includes(value),
    default: "default"
  },
  border: {
    type: Boolean,
    default: false
  },
  props: {
    type: Object,
    default: () => ({})
  }
})
const checkType = computed(() => {
  const obj = {
    check: "el-checkbox",
    button: "el-checkbox-button"
  }
  return obj[checkProps.type] ?? "el-checkbox"
})
const optionsProps = ref<OptionsProps>({
  ...{
    value: "value",
    label: "label",
    disabled: "disabled"
  },
  ...checkProps.props
})
</script>
