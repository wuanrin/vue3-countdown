<template>
  <pre class="source-code"><code ref="code" :class="`language-${lang}`" v-html="html" /></pre>
</template>
<script>
import { ref, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

export default {
  name: 'SourceCode',
  props: {
    lang: String,
    code: String
  },
  setup (props) {
    const html = ref('')
    onMounted(() => {
      html.value = hljs.highlight(props.code, { language: props.lang }).value
    })
    return {
      html
    }
  }
}
</script>
<style>
@import url("highlight.js/styles/atom-one-light.css");

.source-code {
  display: block;
  margin-top: 20px;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.45;
  background-color: #f6f8fa;
}
</style>
