import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router);

import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import WhatIDo from './components/WhatIDo.vue'

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/whatido', component: WhatIDo },
]

const router = new Router({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
