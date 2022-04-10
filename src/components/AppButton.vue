<template>
  <button
    class="button"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    disabled: Boolean
  }
}
</script>
<style>
.button {
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  background-color: #4395ff;
}
.button:active {
  box-shadow: 0 2px 4px rgba(0,0,0,.4) inset;
}
.button[disabled] {
  background-color: #c3c3c3;
  box-shadow: none;
}
</style>
