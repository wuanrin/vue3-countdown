import {
  defineComponent,
  PropType,
  ref,
  computed,
  h
} from 'vue'

import { resolveCountdown, formatCountdown } from '../utils'

export default defineComponent({
  name: 'Countdown',
  emits: ['change', 'finish'],
  props: {
    // Countdown time. ms
    time: {
      type: Number as PropType<number>,
      default: 0
    },
    format: {
      type: String as PropType<string>,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  },
  setup (props, { emit }) {
    const currentTime = ref(props.time)
    const resolved = ref(resolveCountdown(currentTime.value, props.format))
    const inCountdown = ref(false)

    const config = {
      restTime: props.time,
      now: 0,
      timer: 0
    }

    // computed
    const stepInterval = computed(
      () => /s/i.test(props.format) ? 300 : 1000
    )
    const formatted = computed(
      () => formatCountdown(resolved.value, props.format)
    )

    // methods
    const start = () => {
      if (!inCountdown.value) {
        config.now = Date.now()
        config.restTime = currentTime.value
        window.clearInterval(config.timer)
        config.timer = window.setInterval(step, stepInterval.value)
        inCountdown.value = true
      }
    }
    const step = () => {
      const { restTime, now } = config
      const interval = Date.now() - now
      const target = restTime > interval ? restTime - interval : 0
      const thisResolved = resolveCountdown(target, props.format)
      const thisFormatted = formatCountdown(thisResolved, props.format)
      if (thisFormatted !== formatted.value) {
        emit('change', {
          currentTime: target,
          resolved: thisResolved,
          formatted: thisFormatted
        })
        resolved.value = thisResolved
      }
      currentTime.value = target
      if (restTime <= interval) {
        stop()
      }
    }

    const stop = () => {
      doStop()
      emit('finish')
    }
    const doStop = () => {
      inCountdown.value = false
      window.clearInterval(config.timer)
    }

    const reset = () => {
      currentTime.value = config.restTime = props.time
      resolved.value = resolveCountdown(props.time, props.format)
      doStop()
    }

    if (props.autoStart) {
      start()
    }

    return {
      currentTime,
      resolved,
      formatted,
      inCountdown,
      start,
      stop,
      reset
    }
  },
  render () {
    const { currentTime, resolved, formatted } = this
    return h(
      'div',
      null,
      (
        this.$slots.default &&
        this.$slots.default({
          currentTime,
          resolved,
          formatted
        })
      ) || this.formatted
    )
  }
})
