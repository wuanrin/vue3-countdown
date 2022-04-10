<template>
  <demo-block title="Basic Usage">
    <countdown :time="30 * 60 * 60 * 1000" />
    <template #code>
      <source-code lang="xml" :code="code" />
    </template>
  </demo-block>
</template>
<script>
export default {
  name: 'DemoBasic',
  data () {
    return {
      code: '<countdown :time="30 * 60 * 60 * 1000" />'
    }
  }
}
</script>
