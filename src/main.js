import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import 'tailwindcss/tailwind.css'
import './assets/tailwind.css'
Vue.config.productionTip = false
Vue.component('vue-draggable-resizable', VueDraggableResizable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
