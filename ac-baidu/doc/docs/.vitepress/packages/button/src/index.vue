<template>
  <el-tooltip v-if="tip" :content="tip" :placement="placement" v-bind="tipProps">
    <el-button v-bind="$attrs" class="t-button-tip" @click="handleClick">
      <slot />
    </el-button>
  </el-tooltip>
  <el-button v-else v-bind="$attrs" @click="handleClick">
    <slot />
  </el-button>
</template>

<script setup lang="ts" name="TButton">
import { ref } from "vue"
const props = defineProps({
  time: {
    type: Number,
    default: 1000
  },
  tip: {
    type: String,
    default: ""
  },
  placement: {
    type: String,
    default: "top"
  },
  tipProps: {
    type: Object,
    default: () => ({})
  },
  isDebounce: {
    type: Boolean,
    default: true
  }
})
// 抛出事件
const emits = defineEmits(["click"])
const record = ref(0)
const handleClick = () => {
  if (!props.isDebounce) return emits("click")
  const newTime = new Date()
  if (newTime.getTime() - record.value > props.time) {
    emits("click")
  }
  record.value = newTime.getTime()
}
</script>
<style lang="scss" scoped>
.t-button-tip {
  padding: 0;
  height: auto;
}
.t-button-tip:hover,
.t-button-tip:focus {
  animation: jump 0.3s;
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
