<template>
  <demo-block title="Second Countdown">
    <AppButton
      class="countdown-button"
      :disabled="inCountdown"
      @click="handleClick"
    >
      <template v-if="!inCountdown">Start</template>
      <countdown
        v-else
        ref="countdown"
        :time="60 * 1000"
        :auto-start="false"
        format="ss~s"
        @finish="inCountdown = false"
      />
    </AppButton>
    <template #code>
      <source-code lang="xml" :code="templateCode" />
      <source-code lang="javascript" :code="scriptCode" />
    </template>
  </demo-block>
</template>
<script>
import { ref, nextTick } from 'vue'
const templateCode = `<Button
  class="countdown-button"
  :disabled="inCountdown"
  @click="handleClick"
>
  <template v-if="!inCountdown">Start</template>
  <countdown
    v-else
    ref="countdown"
    :time="60 * 1000"
    :auto-start="false"
    format="ss~s"
    @finish="inCountdown = false"
  />
</Button>`
const scriptCode = `import { ref, nextTick } from 'vue'
export default {
  setup () {
    const countdown = ref()
    const inCountdown = ref(false)
    const handleClick = () => {
      inCountdown.value = true
      nextTick(() => {
        countdown.value.reset()
        countdown.value.start()
      })
    }
    return {
      countdown,
      inCountdown,
      handleClick
    }
  }
}`

export default {
  name: 'DemoSecondCountdown',
  setup () {
    const countdown = ref()
    const inCountdown = ref(false)
    const handleClick = () => {
      inCountdown.value = true
      nextTick(() => {
        countdown.value.reset()
        countdown.value.start()
      })
    }
    return {
      countdown,
      inCountdown,
      handleClick,
      templateCode,
      scriptCode
    }
  }
}
</script>
<style>
.countdown-button {
  width: 60px;
}
</style>
