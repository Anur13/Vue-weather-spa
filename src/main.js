import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueDebounce from 'vue-debounce'
Vue.config.productionTip = false
Vue.use(vueDebounce)

// Or if you want to pass in the lock option
Vue.use(vueDebounce, {
  lock: true
})

// Setting a different event to listen to
Vue.use(vueDebounce, {
  listenTo: 'input'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
