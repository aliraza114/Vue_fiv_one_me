// Vue imports
import Vue from 'vue'
import App from './App.vue'

// Vue libs import
import router from './router/router'
import vuetify from './plugin/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
