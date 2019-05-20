import Vue from 'vue'
import router from './router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import './styles.scss'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
