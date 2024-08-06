<template>
  <t-layout-page class="t_button_demo">
    <t-layout-page-item>
      <el-switch
        v-model="isDebounce"
        size="large"
        active-text="开启防抖"
        inactive-text="关闭防抖"
      />
      <div style="display: flex; align-items: center">
        <div style="width: 140px; font-weight: 700">输入防抖时间：</div>
        <el-input-number
          style="width: 240px"
          v-model="time"
          placeholder="请输入防抖时间（毫秒）"
          :min="1000"
          :max="10000"
          :controls="false"
          @change="handleChange"
        />
      </div>
      <t-button
        style="margin-top: 15px"
        :isDebounce="isDebounce"
        :time="time"
        type="primary"
        @click="exportExcel"
        >点击事件</t-button
      >
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from "vue"
const time = ref(1000)
const isDebounce = ref(false)
const handleChange = val => {
  console.log("输入框的值：", val)
}
const exportExcel = () => {
  console.log("点击事件")
  ElMessage({
    message: "点击事件",
    type: "success"
  })
}
</script>
