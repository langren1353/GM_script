<template>
  <div class="timer-btn">
    <button
      class="sendSmsBtn"
      :class="{ dissendSmsBtn: disabled, className }"
      type="button"
      @click="run"
      :disabled="disabled || time > 0"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts" name="TTimerBtn">
import { computed, ref } from "vue"
const props = defineProps({
  second: {
    type: Number,
    default: 60
  },
  className: {
    type: String
  }
})
const time = ref(0)
const disabled = ref(false)
const text = computed(() => {
  return time.value > 0 ? `${time.value}s 后重获取` : "获取验证码"
})
const emits = defineEmits(["click"])
const run = () => {
  emits("click")
  start()
}
// 重置倒计时0
const reset = () => {
  time.value = 0
}
const start = () => {
  time.value = props.second
  disabled.value = true
  timer()
}
const timer = () => {
  if (time.value > 0) {
    time.value--
    setTimeout(timer, 1000)
  } else {
    disabled.value = false
  }
}
// 暴露方法出去
defineExpose({ reset })
</script>
<style lang="scss" scoped>
.timer-btn {
  position: relative;
  .sendSmsBtn {
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    background: #ef473a;
    border: none;
    padding: 0 6px;
    color: #fff;
    display: inline-block;
    min-width: 92px;
    cursor: pointer;
  }
  .dissendSmsBtn {
    opacity: 0.5;
    cursor: auto;
  }
}
</style>
