---
head:
  - - meta
    - name: keywords
      content: AC-Baidu,页面配置,AC-Baidu优化脚本,百度优化脚本,谷歌优化脚本,必应优化脚本,搜索优化脚本,搜索结果优化,搜索结果
---
<Teleport to="body">
  <div id="save_hint"></div>
</Teleport>

<component is="script" src="/inject.js">
</component>

# 配置项

### 适用于所有搜索引擎 {#main}

:::demo 全局配置项
@custom/common/base
:::

### 百度配置 {#baidu}

:::demo 百度配置项
@custom/baidu/base
:::

### 谷歌配置 {#google}

:::demo 谷歌配置项
@custom/google/base
:::

### 必应配置 {#bing}

:::demo 必应配置项
@custom/bing/base
:::

### 鸭鸭配置 {#duckduckgo}

:::demo 鸭鸭配置项
@custom/duckduckgo/base
:::

### 好搜配置 {#haosou}

:::demo 好搜配置项
@custom/haosou/base
:::

<style lang="scss">
#save_hint{
  position: fixed;
  top: 50px;
  right: 20px;
  z-index: 66;
  width: 130px;
  height: 100px;

  &:empty{
    display: none;
  }
}
.el-drawer__header{
  margin-bottom: unset;
}
.el-form-item {
  margin-bottom: 4px !important;
}
.el-divider--horizontal{
  margin: 8px 0 !important;
}
.el-collapse {
  :deep(&-item__header) {
    border: unset;
  }

  .el-form-item{
    margin-bottom: unset;
  }
  &{
    border: unset;
  }
}
</style>
