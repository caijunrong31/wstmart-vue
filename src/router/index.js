import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home/Home'
import Classify from '@/views/Classify/Classify'
import GoodsList from '@/views/GoodsList/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/GoodsList/:id',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
