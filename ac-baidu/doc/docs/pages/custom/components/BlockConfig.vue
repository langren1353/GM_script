<template>
  <el-text class="mx-1" size="large" style="padding-bottom: 16px" tag="div">
    拦截功能-按需开启
    <el-tooltip class="box-item" effect="dark" :hide-after=20 content="开启拦截之前必须开启【重定向】功能" placement="top">
      <el-switch inline-prompt size="large" v-model="state.isBlockEnable" :disabled="!propState.isRedirectEnable.value" active-text="开启" inactive-text="关闭"/>
    </el-tooltip>
    <el-button v-show="state.isBlockEnable && propState.isRedirectEnable.value" style="margin-left: 30px" @click="base.isBlockPanelShow=true">编辑规则<el-icon class="el-icon--right"><Edit /></el-icon></el-button>
  </el-text>
  <div v-show="state.isBlockEnable && propState.isRedirectEnable.value">
    <el-form-item for="nothing" label="显示拦截按钮" label-position="left">
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="页面中会显示拦截的Block按钮" placement="top">
        <el-switch inline-prompt size="large" v-model="state.isBlockBtnDisplay" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
      </el-tooltip>
    </el-form-item>
    <el-form-item for="nothing" label="拦截之后隐藏" label-position="left">
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="拦截成功后，将不会显示被拦截的标签" placement="top">
        <el-switch inline-prompt size="large" v-model="state.isBlockResultDisplay" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
      </el-tooltip>
    </el-form-item>
  </div>
  <el-drawer v-model="base.isBlockPanelShow" direction="rtl">
    <template #header>
      <div style="display: flex;">
        <span>规则自定义</span>
        <div style="color: #d17d1a; margin-left: 70px">
          <el-icon style="vertical-align: text-top;"><Warning /></el-icon>
          <span>如果有修改，清注意修改完成之后保存</span>
        </div>
      </div>
    </template>
    <template #default>
      <div v-show="!base.multiEdit">
        <div style="display: flex; line-height: 32px;">
          <div>
            <el-tooltip class="box-item" effect="dark" :hide-after=20 content="输入拦截的域，例如：blog.csdn.net" placement="top">
              拦截规则：
            </el-tooltip>
          </div>
          <div>
            <el-input
              v-model="base.inputRule"
              style="width: 14vw"
              placeholder="输入拦截的域，例如：blog.csdn.net"
            />
            <el-button @click="addBlockRule">
              添加<el-icon><Bottom /></el-icon>
            </el-button>
            <el-button @click="toMultiEditMode">
              批量编辑<el-icon><Edit /></el-icon>
            </el-button>
          </div>
        </div>
        <div>
          <template v-for="(item, index) of blockState.blockRuleList" :key="item">
            <el-tag type="success" closable @close="removeRule(index)">
              <span>
                {{ item }}
              </span>
            </el-tag>
          </template>
        </div>
      </div>
      <div v-show="base.multiEdit">
        <el-button @click="toSignleEditMode">
          添加模式<el-icon><Edit /></el-icon>
        </el-button>
        <el-input
          v-model="base.multiText"
          style="margin-top: 20px;"
          :rows="20"
          type="textarea"
          placeholder=""
        />
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { defineEmits, reactive, toRefs, watch } from "vue";
import { ElMessage } from "element-plus";

let updateLocked = false
const BlockSaveName = 'ACBlockRules'

window.webInterface = {
  async update() {
    blockState.blockRuleList = await safeFunc(() => window.AC_GM_Interface.get(BlockSaveName, '[]'))
    Object.defineProperty(blockState.blockRuleList, 'acpush', { value: acpush })
    Object.defineProperty(blockState.blockRuleList, 'acremove', { value: acremove })
    updateLocked = true
    setTimeout(() => {
      updateLocked = false
    }, 500)
  }
}

const emits = defineEmits(['update_state'])
const props = defineProps({
  state: {
    type: Object,
    default: () => ({})
  }
})

const base = reactive({
  isBlockPanelShow: false,
  inputRule: "",
  hasEdit: false,

  multiEdit: false,
  multiText: '',
})

const defaultOptions = {
  isBlockEnable: true, // 是否开启去拦截模式
  isBlockResultDisplay: false, // 是否删除已拦截的条目
  isBlockBtnDisplay: false, // 是否显示block按钮
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))
const blockState = reactive({
  blockRuleList: [], // 已经加入列表的拦截记录
})
// 拉取最新数据
window.webInterface.update()

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  emits('update_state', newOptions)
})

watch(() => propState, () => {
  const notKeys = Object.keys(defaultOptions)
  const keys = Object.keys(propState)
  const values = keys.map(one => state[one])
  const newState = Object.fromEntries(keys.filter(per => !notKeys.includes(per)).map((key, index) => [key, values[index]]));
  Object.assign(state, newState)
})

watch(() => blockState.blockRuleList, () => {
  // updateToScript()
})

function updateToScript() {
  // 反向设置回去
  if(!updateLocked) {
    window.AC_GM_Interface.save(BlockSaveName, blockState.blockRuleList)
  }
}

function acpush(data = "") {
  this.hasEdit = true
  data = data.trim()
  // 如果是垃圾数据，那么可以丢弃的
  if (!data) return '无效内容';
  // 如果数据中有回车，那数据也是无效的正文而已
  if (data.search(/(,|：|。|\n)/) >= 0) return '格式不符合要求';
  if (this.findIndex(m => m === data) < 0) {
    this.push(data);
  } else {
    return "已存在相同项"
  }
}
function acremove (data) {
  this.hasEdit = true
  let delId = this.findIndex(m => m === data);
  if (delId >= 0) {
    this.splice(delId, 1);
    return delId
  }
  return -1
}
function safeFunc(callback, failed_res = '') {
  try{
    return callback()
  }catch(e){}
  return failed_res
}

function addBlockRule() {
  const msg = blockState.blockRuleList.acpush(base.inputRule)
  if(!msg) {
    base.inputRule = ''
    ElMessage({
      message: "添加成功",
      type: 'success'
    })
    updateToScript()
  } else {
    ElMessage({
      message: "添加失败：" + msg,
      type: 'error'
    })
  }
}

function toMultiEditMode() {
  base.multiEdit = true
  base.multiText = blockState.blockRuleList.join('\n')
}

function toSignleEditMode() {
  base.multiEdit = false
  
  const list = []
  Object.defineProperty(list, 'acpush', { value: acpush })
  Object.defineProperty(list, 'acremove', { value: acremove })

  base.multiText.split('\n').filter(one => one.length).map(one => {
    list.acpush(one)
  })
  blockState.blockRuleList = list
  updateToScript()
}

function removeRule(index) {
  blockState.blockRuleList.splice(index, 1)
  updateToScript()
}

</script>

<style scoped lang="scss">
.el-tag{
  display: flex;
  margin-left: 4px;
  margin-top: 18px;
  font-size: 16px;
  block-size: auto;
  padding: 6px 0; 
  color: #333;
  
  &:hover {
    color: #0b8235;
  }

  :deep &__content {
    min-width: 400px;
    text-align: center;
  }
}
</style>
