# vue3-countdown

A simple countdown component for Vue3.x.

[Live Demo](https://wuanrin.github.io/vue3-countdown/)

## Installation

```
npm install vue3-countdown --save
```

```js
import { defineComponent } from 'vue'
import Countdown from 'vue3-countdown'

export default defineComponent({
  components: { Countdown }
})
```

## Usage

### Basic

```html
<countdown :time="30 * 60 * 60 * 1000" />
```

### Custom Format

```html
<countdown
  :time="30 * 60 * 60 * 1000"
  format="DD ~Day, HH:mm:ss"
/>
```

> `~` is an escape character to prevent the character `D` in `Day` from being escaped to a date.

### Custom Style

```html
<countdown
  :time="30 * 60 * 60 * 1000"
  format="HH:mm:ss"
>
  <template #="{ resolved }">
    <span class="countdown-item">{{ resolved.HH }}</span> :
    <span class="countdown-item">{{ resolved.mm }}</span> :
    <span class="countdown-item">{{ resolved.ss }}</span>
  </template>
</countdown>
```

### Masual Control

```html
<countdown
  ref="countdown"
  :time="30 * 60 * 60 * 1000"
  :auto-start="false"
/>
<div class="control-buttons">
  <Button @click="start">Start</Button>
  <Button @click="pause">Pause</Button>
  <Button @click="reset">Reset</Button>
</div>
```

```js
import { ref } from 'vue'
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
}
```

### Second Count Down

```html
<Button :disabled="inCountdown" @click="handleClick">
  <template v-if="!inCountdown">Start</template>
  <countdown
    v-else
    ref="countdown"
    :time="60 * 1000"
    :auto-start="false"
    format="ss~s"
    @finish="inCountdown = false"
  />
</Button>
```

```js
import { ref, nextTick } from 'vue'
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
}
```

### Events

```html
<countdown
  :time="5 * 1000"
  format="ss"
  @change="handleChange"
  @finish="handleFinish"
/>
```

```js
export default {
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
}
```

## API

### Props

| Prop       | Description                      | Type    | Default  |
| ---------- | -------------------------------- | ------- | -------- |
| time       | Total time                       | number  | 0        |
| format     | Time format                      | string  | HH:mm:ss |
| auto-start | Whether to auto start count down | boolean | true     |

### Available formats

| Format | Description          |
| ------ | -------------------- |
| D      | Day                  |
| DD     | Day, leading zero    |
| H      | Hour                 |
| HH     | Hour, leading zero   |
| m      | Minute               |
| mm     | Minute, leading zero |
| s      | Second               |
| ss     | Second, leading zero |
| S      | Millisecond, 1-digit |
| SS     | Millisecond, 2-digit |

You can prefixing the character `~` before the unit character if you don't want to convert a unit charactor.

For example, format prop `DD Day HH:mm:ss` will be converted to `01 1ay HH:mm:ss`, the word `Day` is incorrectly converted to `1ay`, using `DD ~Day HH:mm:ss` to avoid this problem.

### Events

| Event  | Description                      | Arguments |
| ------ | -------------------------------- | --------- |
| change | Emitted when count down changed  | { currentTime, resolved, formatted } |
| finish | Emitted when count down finished | -         |

### Slots

| Name    | Description    | SlotProps                      |
| ------- | -------------- | ------------------------------ |
| default | Custom Content | countdown, resolved, formatted |

#### SlotProps

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| countdown | number | Remaining countdown                  |
| resolved  | object | Remaining countdown after resolving  |
| formatted | string | Remaining countdown after formatting |

`resolved` is an object contains resolved countdown according to the `format` prop.

For example, `resolved` may be `{ mm: 10, ss: 10, SS: 10 }` when `format` is `mm:ss:SS`.
So you can custom display according `resolved`.

> If an time unit is not in prop `format`, it will not be in `resolved`.

### Methods

| Name  | Description      | Attribute | Return Value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| stop  | Stop count down  | -         | -            |
| reset | Reset count down | -         | -            |

### Attributes

| Name        | Type    | Description                          |
| ----------- | ------- | ------------------------------------ |
| currentTime | number  | Remaining countdown                  |
| resolved    | object  | Remaining countdown after resolving  |
| formatted   | string  | Remaining countdown after formatting |
| inCountdown | boolean | Whether in countdown                 |

## License

vue3-countdown is licensed under [The MIT License](https://github.com/wuanrin/vue3-countdown/blob/master/LICENSE).
