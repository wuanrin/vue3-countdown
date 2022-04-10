<template>
  <div class="demo-block">
    <h3 class="demo-block__title" v-if="title">{{ title }}</h3>
    <div class="demo-block__content">
      <slot />
    </div>
    <div class="demo-block__code">
      <slot name="code" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock',
  props: {
    title: String
  }
}
</script>
<style lang="less" scoped>
.demo-block {
  margin: 80px 0;

  &__title {
    padding: 0;
    font-weight: normal;
    font-size: 22px;
  }

  &__content {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    line-height: 1;
  }
}
</style>
