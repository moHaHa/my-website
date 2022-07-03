import Vue from 'vue'
import App from './app/App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './assets/main.scss'
Vue.config.productionTip = false
import VueClipboard from 'vue-clipboard2'
import './components/components-define'

Vue.use(VueClipboard)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
