<template>
  <a :href="href" target="_blank">
    <el-tooltip
      class="box-item"
      effect="dark" :hide-after=20
      :content="tooltipText"
      placement="top"
    >
      <el-icon>
        <component :is="iconName" />  
      </el-icon>
    </el-tooltip>
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    tooltipText: {
      type: String,
      default: '点击查看说明'
    },
    iconName: {
      type: String,
      default: 'QuestionFilled'
    }
  },
}
</script>
