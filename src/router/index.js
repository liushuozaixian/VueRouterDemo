import Vue from 'vue'
import Router from 'vue-router'
import FirstOne from '@/components/FirstOne'
import FirstTwo from '@/components/FirstTwo'
import FirstThree from '@/components/FirstThree'
import FirstFour from '@/components/FirstFour'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstOne',
      component: FirstOne
    },
    {
      path: '/FirstTwo',
      name: 'FirstTwo',
      component: FirstTwo
    },
    {
      path: '/FirstThree',
      name: 'FirstThree',
      component: FirstThree
    },
    {
      path: '/FirstFour/:first',
      name: 'FirstFour',
      component: FirstFour
    }
  ]
})
