<template>
  <demo-block title="Masual Control">
    <countdown
      ref="countdown"
      :time="30 * 60 * 60 * 1000"
      :auto-start="false"
    />
    <div class="control-buttons">
      <AppButton @click="start">Start</AppButton>
      <AppButton @click="pause">Pause</AppButton>
      <AppButton @click="reset">Reset</AppButton>
    </div>
    <template #code>
      <source-code lang="xml" :code="templateCode" />
      <source-code lang="javascript" :code="scriptCode" />
    </template>
  </demo-block>
</template>
<script>
import { ref } from 'vue'
const templateCode = `<countdown
  ref="countdown"
  :time="30 * 60 * 60 * 1000"
  :auto-start="false"
/>
<div class="control-buttons">
  <Button @click="start">Start</Button>
  <Button @click="pause">Pause</Button>
  <Button @click="reset">Reset</Button>
</div>`

const scriptCode = `import { ref } from 'vue'
export default {
  setup () {
    const countdown = ref()
    const start = () => countdown.value.start()
    const pause = () => countdown.value.stop()
    const reset = () => countdown.value.reset()

    return {
      countdown,
      start,
      pause,
      reset
    }
  }
}`

export default {
  name: 'DemoMasualControl',
  setup () {
    const countdown = ref()
    const start = () => countdown.value.start()
    const pause = () => countdown.value.stop()
    const reset = () => countdown.value.reset()

    return {
      countdown,
      start,
      pause,
      reset,
      templateCode,
      scriptCode
    }
  }
}
</script>
<style>
.control-buttons {
  margin-top: 20px;
}

.control-buttons button {
  margin-right: 10px;
}
</style>
