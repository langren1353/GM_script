<template>
  <el-card style="max-width: 240px;">
    <template #header>
      <slot name="header">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>{{ props.cardTitle }}</div>
          <el-link v-if="props.isWelcome" type="primary" style="font-weight: bold" @click="showWelcome" >激活</el-link>
          <el-link v-else type="primary" style="margin-left: 20px" @click="activateCustomStyleLink" :data-url="props.cardLink">激活</el-link>
        </div>
      </slot>
    </template>
    <el-tooltip v-if="props.cardImg" class="box-item" effect="dark" :hide-after=20 content="点击预览" placement="right">
      <img :src="props.cardImg" style="width: 100%" @click="showBigImg"/>
    </el-tooltip>
    <el-icon v-else style="width: 100%"><Picture /></el-icon>
    <template #footer>
      <slot name="footer">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <div>{{ props.cardDescription }}</div>
        </div>
      </slot>
    </template>
  </el-card>
  <el-dialog v-model="base.dialogWelcome" title="🌹欢迎提交申请🌹" width="800">
    <div>欢迎主动提交你觉得比较好的CSS样式表，你可以提交到github、greasyfork</div>
    <div>之后可以向本人申请（使用github issue、或者QQ群等），申请的时候请给出：
      <p style="margin-left: 20px">
        <div>个人ID（用于显示）</div>
        <div>效果预览图</div>
        <div>查看网址（审核用）</div>
        <div>样式表更新地址（用户主动更新用，并不会自动更新）</div>
      </p>
    </div>
    <div>
      <p>
        这里给出greasyfork的样式提交地址：
        <el-link type="primary" style="margin-left: 20px" href="https://greasyfork.org/zh-CN/script_versions/new?language=css">GreasyFork的样式提交地址</el-link>
      </p>
      <p>
        欢迎大家提交申请，这里附一个github issue的提交地址，看到后会尽快处理：
        <el-link type="primary" style="margin-left: 20px" href="https://github.com/langren1353/GM_script/issues">申请地址</el-link>
      </p>
    </div>
  </el-dialog>
  <Teleport to="body">
    <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 9998" v-show="base.bigImgShow" @click="closeBigImg">
      <div style="max-width: 80vw; max-height: 80vh; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999">
        <img :src="base.bigImgSrc" style="width: 100%" @click="closeBigImg" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive, defineEmits } from "vue";

const emit = defineEmits(['update_customStyleLink'])
const props = defineProps({
  cardTitle: {
    type: String,
    default: ''
  },
  cardDescription: {
    type: String,
    default: ''
  },
  cardImg: {
    type: String,
    default: ''
  },
  cardLink: {
    type: String,
    default: ''
  },
  isWelcome: {
    type: Boolean,
    default: false
  },
  props: {
    type: Object,
    default: () => ({})
  }  
})

const base = reactive({
  bigImgSrc: '',
  bigImgShow: false,
  dialogWelcome: false
})

function activateCustomStyleLink(env) {
  const link = (env.target.dataset.url || env.target.parentNode.dataset.url).trim()
  emit('update_customStyleLink', link);
}

function throttle(func, delay) {
  let lastExecTime = 0;
  let timeoutId;

  return function(...args) {
    const now = Date.now();

    // 清除之前的定时器
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // 如果首次执行或距离上次执行时间超过 delay，立即执行
    if (now - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = now;
    } else {
      // 否则，设置定时器，在 delay 时间后执行
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay);
    }
  };
}


function showWelcome() {
  base.dialogWelcome = true
}

const showBigImg = throttle((env) => {
  base.bigImgSrc = env.target.src
  base.bigImgShow = true
}, 200)

function closeBigImg() {
  base.bigImgShow = false
}



</script>

<style scoped lang="scss">
.el-card {
  :deep &__body{
    height: 120px;
    > * {
      width: 100%;
      height: 100%;
    }
    > i {
      font-size: 60px;
      color: #e4e4e4;
    }
  }

  :deep &__header,
  :deep &__footer {
    overflow-wrap: anywhere;
    word-break: break-all;
    padding: calc(var(--el-card-padding) - 14px) calc(var(--el-card-padding) - 4px);
  }
}
</style>
