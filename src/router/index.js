import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tour01 from '@/components/tour01'
import tour02 from '@/components/tour02'
import tour03 from '@/components/tour03'
import tour04 from '@/components/tour04'
import tour05 from '@/components/tour05'
import tour07 from '@/components/tour07'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/tour01',
      component: tour01
    },
    {
      path: '/tour02',
      component: tour02
    },
    {
      path: '/tour03',
      component: tour03
    },
    {
      path: '/tour04',
      component: tour04
    },
    {
      path: '/tour05',
      component: tour05
    },
    {
      path: '/tour07',
      component: tour07
    }
  ]
})
