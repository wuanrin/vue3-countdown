(function(){"use strict";var n={2129:function(n,e,o){var t=o(9242),u=o(75),c=o.n(u),a=o(3396);const r=["disabled"];function s(n,e,o,t,u,c){return(0,a.wg)(),(0,a.iD)("button",{class:"button",disabled:o.disabled,onClick:e[0]||(e[0]=e=>n.$emit("click",e))},[(0,a.WI)(n.$slots,"default")],8,r)}var d={name:"AppButton",props:{disabled:Boolean}},l=o(89);const i=(0,l.Z)(d,[["render",s]]);var m=i,p=o(7139);const f={class:"source-code"},w=["innerHTML"];function v(n,e,o,t,u,c){return(0,a.wg)(),(0,a.iD)("pre",f,[(0,a._)("code",{ref:"code",class:(0,p.C_)(`language-${o.lang}`),innerHTML:t.html},null,10,w)])}var g=o(4870),C=o(1795),h=o(6774),k=o(9384);C.Z.registerLanguage("javascript",h.Z),C.Z.registerLanguage("xml",k.Z);var b={name:"SourceCode",props:{lang:String,code:String},setup(n){const e=(0,g.iH)("");return(0,a.bv)((()=>{e.value=C.Z.highlight(n.code,{language:n.lang}).value})),{html:e}}};const _=(0,l.Z)(b,[["render",v]]);var D=_;const W={class:"demo-block"},y={key:0,class:"demo-block__title"},j={class:"demo-block__content"},x={class:"demo-block__code"};function H(n,e,o,t,u,c){return(0,a.wg)(),(0,a.iD)("div",W,[o.title?((0,a.wg)(),(0,a.iD)("h3",y,(0,p.zw)(o.title),1)):(0,a.kq)("",!0),(0,a._)("div",j,[(0,a.WI)(n.$slots,"default",{},void 0,!0)]),(0,a._)("div",x,[(0,a.WI)(n.$slots,"code",{},void 0,!0)])])}var S={name:"DemoBlock",props:{title:String}};const B=(0,l.Z)(S,[["render",H],["__scopeId","data-v-5e5adc4a"]]);var Z=B;function O(n){n.component(c().name,c()),n.component(m.name,m),n.component(D.name,D),n.component(Z.name,Z)}function F(n,e,o,t,u,c){const r=(0,a.up)("countdown-demo");return(0,a.wg)(),(0,a.j4)(r)}const T={class:"page"},M=(0,a._)("h2",{class:"page-title"},"Vue3Countdown Examples",-1);function U(n,e,o,t,u,c){const r=(0,a.up)("demo-basic"),s=(0,a.up)("demo-custom-format"),d=(0,a.up)("demo-custom-style"),l=(0,a.up)("demo-masual-control"),i=(0,a.up)("demo-second-countdown"),m=(0,a.up)("demo-countdown-events");return(0,a.wg)(),(0,a.iD)("div",T,[M,(0,a.Wm)(r),(0,a.Wm)(s),(0,a.Wm)(d),(0,a.Wm)(l),(0,a.Wm)(i),(0,a.Wm)(m)])}function P(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("source-code"),d=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(d,{title:"Basic Usage"},{code:(0,a.w5)((()=>[(0,a.Wm)(s,{lang:"xml",code:u.code},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(r,{time:108e6})])),_:1})}var z={name:"DemoBasic",data(){return{code:'<countdown :time="30 * 60 * 60 * 1000" />'}}};const E=(0,l.Z)(z,[["render",P]]);var $=E;function A(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("source-code"),d=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(d,{title:"Custom Format"},{code:(0,a.w5)((()=>[(0,a.Wm)(s,{lang:"xml",code:u.code},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(r,{time:108e6,format:"DD ~Day, HH:mm:ss"})])),_:1})}var I={name:"DemoCustomFormat",data(){return{code:'<countdown\n  :time="30 * 60 * 60 * 1000"\n  format="DD ~Day, HH:mm:ss"\n/>'}}};const L=(0,l.Z)(I,[["render",A]]);var R=L;const Y={class:"countdown-item"},q=(0,a.Uk)(" : "),V={class:"countdown-item"},G=(0,a.Uk)(" : "),J={class:"countdown-item"};function K(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("source-code"),d=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(d,{title:"Custom Style"},{code:(0,a.w5)((()=>[(0,a.Wm)(s,{lang:"xml",code:u.code},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(r,{time:108e6,format:"HH:mm:ss"},{default:(0,a.w5)((({resolved:n})=>[(0,a._)("span",Y,(0,p.zw)(n.HH),1),q,(0,a._)("span",V,(0,p.zw)(n.mm),1),G,(0,a._)("span",J,(0,p.zw)(n.ss),1)])),_:1})])),_:1})}const N='<template>\n  <countdown :time="30 * 60 * 60 * 1000" format="HH:mm:ss">\n    <template #="{ resolved }">\n      <span class="countdown-item">{{ resolved.HH }}</span> :\n      <span class="countdown-item">{{ resolved.mm }}</span> :\n      <span class="countdown-item">{{ resolved.ss }}</span>\n    </template>\n  </countdown>\n</template>\n<style>\n.countdown-item {\n  padding: 3px 6px;\n  border-radius: 3px;\n  color: #fff;\n  background-color: #c00;\n}\n</style>';var Q={name:"DemoCustomStyle",data(){return{code:N}}};const X=(0,l.Z)(Q,[["render",K]]);var nn=X;const en={class:"control-buttons"},on=(0,a.Uk)("Start"),tn=(0,a.Uk)("Pause"),un=(0,a.Uk)("Reset");function cn(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("AppButton"),d=(0,a.up)("source-code"),l=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(l,{title:"Masual Control"},{code:(0,a.w5)((()=>[(0,a.Wm)(d,{lang:"xml",code:t.templateCode},null,8,["code"]),(0,a.Wm)(d,{lang:"javascript",code:t.scriptCode},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(r,{ref:"countdown",time:108e6,"auto-start":!1},null,512),(0,a._)("div",en,[(0,a.Wm)(s,{onClick:t.start},{default:(0,a.w5)((()=>[on])),_:1},8,["onClick"]),(0,a.Wm)(s,{onClick:t.pause},{default:(0,a.w5)((()=>[tn])),_:1},8,["onClick"]),(0,a.Wm)(s,{onClick:t.reset},{default:(0,a.w5)((()=>[un])),_:1},8,["onClick"])])])),_:1})}const an='<countdown\n  ref="countdown"\n  :time="30 * 60 * 60 * 1000"\n  :auto-start="false"\n/>\n<div class="control-buttons">\n  <Button @click="start">Start</Button>\n  <Button @click="pause">Pause</Button>\n  <Button @click="reset">Reset</Button>\n</div>',rn="import { ref } from 'vue'\nexport default {\n  setup () {\n    const countdown = ref()\n    const start = () => countdown.value.start()\n    const pause = () => countdown.value.stop()\n    const reset = () => countdown.value.reset()\n\n    return {\n      countdown,\n      start,\n      pause,\n      reset\n    }\n  }\n}";var sn={name:"DemoMasualControl",setup(){const n=(0,g.iH)(),e=()=>n.value.start(),o=()=>n.value.stop(),t=()=>n.value.reset();return{countdown:n,start:e,pause:o,reset:t,templateCode:an,scriptCode:rn}}};const dn=(0,l.Z)(sn,[["render",cn]]);var ln=dn;const mn=(0,a.Uk)("Start");function pn(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("AppButton"),d=(0,a.up)("source-code"),l=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(l,{title:"Second Countdown"},{code:(0,a.w5)((()=>[(0,a.Wm)(d,{lang:"xml",code:t.templateCode},null,8,["code"]),(0,a.Wm)(d,{lang:"javascript",code:t.scriptCode},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"countdown-button",disabled:t.inCountdown,onClick:t.handleClick},{default:(0,a.w5)((()=>[t.inCountdown?((0,a.wg)(),(0,a.j4)(r,{key:1,ref:"countdown",time:6e4,"auto-start":!1,format:"ss",onFinish:e[0]||(e[0]=n=>t.inCountdown=!1)},{default:(0,a.w5)((({formatted:n})=>[(0,a.Uk)((0,p.zw)(n)+"s",1)])),_:1},512)):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[mn],64))])),_:1},8,["disabled","onClick"])])),_:1})}const fn='<Button\n  class="countdown-button"\n  :disabled="inCountdown"\n  @click="handleClick"\n>\n  <template v-if="!inCountdown">Start</template>\n  <countdown\n    v-else\n    ref="countdown"\n    :time="60 * 1000"\n    :auto-start="false"\n    format="ss"\n    @finish="inCountdown = false"\n  >\n    <template #="{ formatted }">{{ formatted }}s</template>\n  </countdown>\n</Button>',wn="import { ref, nextTick } from 'vue'\nexport default {\n  setup () {\n    const countdown = ref()\n    const inCountdown = ref(false)\n    const handleClick = () => {\n      inCountdown.value = true\n      nextTick(() => {\n        countdown.value.reset()\n        countdown.value.start()\n      })\n    }\n    return {\n      countdown,\n      inCountdown,\n      handleClick\n    }\n  }\n}";var vn={name:"DemoSecondCountdown",setup(){const n=(0,g.iH)(),e=(0,g.iH)(!1),o=()=>{e.value=!0,(0,a.Y3)((()=>{n.value.reset(),n.value.start()}))};return{countdown:n,inCountdown:e,handleClick:o,templateCode:fn,scriptCode:wn}}};const gn=(0,l.Z)(vn,[["render",pn]]);var Cn=gn;function hn(n,e,o,t,u,c){const r=(0,a.up)("countdown"),s=(0,a.up)("source-code"),d=(0,a.up)("demo-block");return(0,a.wg)(),(0,a.j4)(d,{title:"Countdown Events"},{code:(0,a.w5)((()=>[(0,a.Wm)(s,{lang:"xml",code:t.templateCode},null,8,["code"]),(0,a.Wm)(s,{lang:"javascript",code:t.scriptCode},null,8,["code"])])),default:(0,a.w5)((()=>[(0,a.Wm)(r,{time:5e3,format:"ss",onChange:t.handleChange,onFinish:t.handleFinish},null,8,["onChange","onFinish"])])),_:1})}const kn='<countdown\n  :time="5 * 1000"\n  format="ss"\n  @change="handleChange"\n  @finish="handleFinish"\n/>',bn="export default {\n  setup () {\n    const handleChange = ({ currentTime, resolved, formatted }) => {\n      console.log(currentTime, resolved, formatted)\n    }\n    const handleFinish = () => {\n      console.log('finished')\n    }\n    return {\n      handleChange,\n      handleFinish\n    }\n  }\n}";var _n={name:"DemoCountdownEvents",setup(){const n=({currentTime:n,resolved:e,formatted:o})=>{console.log(n,e,o)},e=()=>{console.log("finished")};return{handleChange:n,handleFinish:e,templateCode:kn,scriptCode:bn}}};const Dn=(0,l.Z)(_n,[["render",hn]]);var Wn=Dn,yn={name:"CountdownDemo",components:{DemoBasic:$,DemoCustomFormat:R,DemoCustomStyle:nn,DemoMasualControl:ln,DemoSecondCountdown:Cn,DemoCountdownEvents:Wn}};const jn=(0,l.Z)(yn,[["render",U]]);var xn=jn,Hn={name:"App",components:{CountdownDemo:xn}};const Sn=(0,l.Z)(Hn,[["render",F]]);var Bn=Sn;const Zn=(0,t.ri)(Bn);Zn.use(O).mount("#app")}},e={};function o(t){var u=e[t];if(void 0!==u)return u.exports;var c=e[t]={exports:{}};return n[t](c,c.exports,o),c.exports}o.m=n,function(){var n=[];o.O=function(e,t,u,c){if(!t){var a=1/0;for(l=0;l<n.length;l++){t=n[l][0],u=n[l][1],c=n[l][2];for(var r=!0,s=0;s<t.length;s++)(!1&c||a>=c)&&Object.keys(o.O).every((function(n){return o.O[n](t[s])}))?t.splice(s--,1):(r=!1,c<a&&(a=c));if(r){n.splice(l--,1);var d=u();void 0!==d&&(e=d)}}return e}c=c||0;for(var l=n.length;l>0&&n[l-1][2]>c;l--)n[l]=n[l-1];n[l]=[t,u,c]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var u,c,a=t[0],r=t[1],s=t[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(u in r)o.o(r,u)&&(o.m[u]=r[u]);if(s)var l=s(o)}for(e&&e(t);d<a.length;d++)c=a[d],o.o(n,c)&&n[c]&&n[c][0](),n[c]=0;return o.O(l)},t=self["webpackChunkvue3_countdown_demo"]=self["webpackChunkvue3_countdown_demo"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(2129)}));t=o.O(t)})();
//# sourceMappingURL=app.2cce9501.js.map