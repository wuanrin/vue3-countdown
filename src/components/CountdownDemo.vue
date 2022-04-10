<template>
  <div class="page">
    <h2 class="page-title">Vue3Countdown Examples</h2>

    <demo-basic />
    <demo-custom-format />
    <demo-custom-style />
    <demo-masual-control />
    <demo-second-countdown />
    <demo-countdown-events />
  </div>
</template>
<script>
import DemoBasic from './DemoBasic.vue'
import DemoCustomFormat from './DemoCustomFormat.vue'
import DemoCustomStyle from './DemoCustomStyle.vue'
import DemoMasualControl from './DemoMasualControl.vue'
import DemoSecondCountdown from './DemoSecondCountdown.vue'
import DemoCountdownEvents from './DemoCountdownEvents.vue'

export default {
  name: 'CountdownDemo',
  components: {
    DemoBasic,
    DemoCustomFormat,
    DemoCustomStyle,
    DemoMasualControl,
    DemoSecondCountdown,
    DemoCountdownEvents
  }
}
</script>
<style>
.page {
  max-width: 600px;
  margin: auto;
}
.page-title {
  margin: 50px 0;
  font-size: 30px;
}
</style>
