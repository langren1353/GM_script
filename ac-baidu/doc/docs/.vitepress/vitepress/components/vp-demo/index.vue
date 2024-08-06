<template>
  <ClientOnly>
    <div class="vp-demo">
      <div text="sm" >
        <div v-html="decodedDescription"></div>
      </div>
      <Example :path="path"/>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import {computed} from "vue"
import {ElMessage} from "element-plus"
import {useClipboard, useToggle} from "@vueuse/core"

import Example from "./vp-example.vue"
import SourceCode from "./vp-source-code.vue"

const props = defineProps<{
  rawSource: string // 源码
  source: string
  path: string
  description?: string
}>()

const {copy, isSupported} = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() => decodeURIComponent(props.description!))

const copyCode = async () => {
  if (!isSupported) {
    ElMessage.error("复制失败")
  }
  try {
    await copy()
    ElMessage.success("已复制")
  } catch (e: any) {
    ElMessage.error(e.message)
  }
}
</script>
<style lang="scss" scoped>
.vp-demo{
  position: relative;
}
</style>
