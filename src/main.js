// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import router from './router'
import axios from 'axios'
Vue.prototype.$http=axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  render:h=>h(layout),
  mounted(){
     this.$nextTick(()=>{
     	
     })
   },
  components: { layout }
})

//在引入axios的时候记得把它添加到Vue的原型上，方便引用