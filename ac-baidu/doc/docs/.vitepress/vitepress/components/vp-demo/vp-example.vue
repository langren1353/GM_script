<template>
  <ClientOnly>
    <div class="example-component">
      <t-layout-page class="t_button_demo">
        <t-layout-page-item>
          <Suspense v-if="dynamicComponent" >
            <component :is="dynamicComponent" v-bind="$attrs" />
          </Suspense>
          <div v-else class="example-component--spin">
            <div></div>
            <div></div>
          </div>  
        </t-layout-page-item>
      </t-layout-page>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { onBeforeMount, shallowRef } from "vue"

const props: any = defineProps<{
  path?: string
}>()

// 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
let dynamicComponent = shallowRef(null)

onBeforeMount(() => {
  // 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数：
  const modules = import.meta.glob(`../../../../pages/**/*.vue`, {
    eager: true
  })
  // 动态加载示列组件
  for (const modulesKey in modules) {
    const module = modules[modulesKey]
    // 找到example的组件，并加载
    if (modulesKey.split(".vue")[0].endsWith(props.path.replace('@', ''))) {
      dynamicComponent.value = module.default
    }
  }
})
</script>

<style lang="scss" scoped>
// loading动画
@keyframes lds-ripple {
  0% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 18px;
    left: 18px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 36px;
    height: 36px;
    opacity: 0;
  }
}
.example-component {
  // min-height: 86px;
  // padding: 1.5rem;
  background-color: var(--el-bg-color-page);
  &--spin {
    width: 36px;
    height: 36px;
    display: inline-block;
    position: relative;
    > div {
      position: absolute;
      border: 4px solid var(--theme-light);
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  // :deep(.t_layout_page) {
  //   padding: 0;
  // }

  .t_module_form_demo {
    background-color: var(--el-bg-color-page);
    :deep(.t_layout_page_item) {
      // margin: 0;
      padding: 0;
      .t_module_form {
        overflow: hidden;
        margin: 0 !important;
        .handle_wrap {
          position: inherit;
        }
      }
    }
  }
}
</style>
