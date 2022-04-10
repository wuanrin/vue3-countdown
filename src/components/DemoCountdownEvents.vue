<template>
  <demo-block title="Countdown Events">
    <countdown
      :time="5 * 1000"
      format="ss"
      @change="handleChange"
      @finish="handleFinish"
    />
    <template #code>
      <source-code lang="xml" :code="templateCode" />
      <source-code lang="javascript" :code="scriptCode" />
    </template>
  </demo-block>
</template>
<script>
const templateCode = `<countdown
  :time="5 * 1000"
  format="ss"
  @change="handleChange"
  @finish="handleFinish"
/>`
const scriptCode = `export default {
  setup () {
    const handleChange = ({ currentTime, resolved, formatted }) => {
      console.log(currentTime, resolved, formatted)
    }
    const handleFinish = () => {
      console.log('finished')
    }
    return {
      handleChange,
      handleFinish
    }
  }
}`
export default {
  name: 'DemoCountdownEvents',
  setup () {
    const handleChange = ({ currentTime, resolved, formatted }) => {
      console.log(currentTime, resolved, formatted)
    }
    const handleFinish = () => {
      console.log('finished')
    }
    return {
      handleChange,
      handleFinish,
      templateCode,
      scriptCode
    }
  }
}
</script>
