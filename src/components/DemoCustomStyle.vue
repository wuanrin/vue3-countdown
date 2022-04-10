<template>
  <demo-block title="Custom Style">
    <countdown :time="30 * 60 * 60 * 1000" format="HH:mm:ss">
      <template #="{ resolved }">
        <span class="countdown-item">{{ resolved.HH }}</span> :
        <span class="countdown-item">{{ resolved.mm }}</span> :
        <span class="countdown-item">{{ resolved.ss }}</span>
      </template>
    </countdown>
    <template #code>
      <source-code lang="xml" :code="code" />
    </template>
  </demo-block>
</template>
<script>
const code = `<template>
  <countdown :time="30 * 60 * 60 * 1000" format="HH:mm:ss">
    <template #="{ resolved }">
      <span class="countdown-item">{{ resolved.HH }}</span> :
      <span class="countdown-item">{{ resolved.mm }}</span> :
      <span class="countdown-item">{{ resolved.ss }}</span>
    </template>
  </countdown>
</template>
<style>
.countdown-item {
  padding: 3px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: #c00;
}
</style>`
export default {
  name: 'DemoCustomStyle',
  data () {
    return {
      code
    }
  }
}
</script>
<style>
.countdown-item {
  padding: 3px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: #c00;
}
</style>
