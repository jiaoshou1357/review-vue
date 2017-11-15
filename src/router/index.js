import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Detailes from '../components/detailes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
		path:'/detailes',
		name:"detailes",
		component:Detailes
    }

  ]
})
