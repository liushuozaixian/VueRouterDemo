import Vue from 'vue';
import Router from 'vue-router';
import FirstOne from '@/components/FirstOne';
import FirstTwo from '@/components/FirstTwo';
import FirstThree from '@/components/FirstThree';
import FirstFour from '@/components/FirstFour';
import Second from '@/components/Second';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstOne',
      component: FirstOne,
      children: [
        // {
        //   path: '/',
        //   redirect: '/Second'
        // },
        // {
        //   path: 'Second',
        //   component: Second
        // },
        {
          path: '',
          component: Second
        },
        {
          path: 'Second/:id',
          component: Second
        }
      ]
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
});
