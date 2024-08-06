<template>
  <t-layout-page class="t_button_demo">
    <t-layout-page-item>
      <t-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <t-button text tip="删除" icon="Delete" />
      <t-button link tip="primary" icon="Search" />
      <t-button text tip="primary" icon="Search" />
      <t-button text type="primary" tip="primary" icon="Edit" />
      <t-button text type="success" tip="success" icon="Check" />
      <t-button text type="info" tip="info" icon="Message" />
      <t-button text type="warning" tip="warning" icon="Star" />
      <t-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom'
        }"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
