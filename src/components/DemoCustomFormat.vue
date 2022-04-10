<template>
  <demo-block title="Custom Format">
    <countdown
      :time="30 * 60 * 60 * 1000"
      format="DD ~Day, HH:mm:ss"
    >
      <template #="{ formatted, resolved }">
        <div>{{ formatted }}</div>
        <div>{{ resolved }}</div>
      </template>
    </countdown>
    <template #code>
      <source-code lang="xml" :code="code" />
    </template>
  </demo-block>
</template>
<script>
export default {
  name: 'DemoCustomFormat',
  data () {
    return {
      code: `<countdown
  :time="30 * 60 * 60 * 1000"
  format="DD ~Day, HH:mm:ss"
/>`
    }
  }
}
</script>
