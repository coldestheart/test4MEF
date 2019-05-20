import Vue from 'vue'
import Router from 'vue-router'

import InputPage from 'pages/InputPage'

Vue.use(Router)

const routes = [
  {
    path: '*',
    component: InputPage
  }
]

export default new Router({
  routes
})
