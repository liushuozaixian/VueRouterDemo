import Vue from 'vue';
import Router from 'vue-router';
import FirstOne from '@/components/FirstOne';
import FirstTwo from '@/components/FirstTwo';
import FirstThree from '@/components/FirstThree';
import FirstFour from '@/components/FirstFour';
import FirstFive from '@/components/FirstFive';
import Second from '@/components/Second';
Vue.use(Router);

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (to.hash) {
      console.log('dsghash:', to.hash)
      // return {
      //   selector: to.hash
      // };
    }
    console.log('dsgPosition:', savedPosition);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
  routes: [
    {
      path: '/',
      name: 'FirstOne',
      component: FirstOne,
      beforeEnter: (to, from, next) => {
        console.log('FirstOne路由独享的守卫');
        next();
      },
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
      components: {
        default: FirstTwo,
        a: FirstOne,
        b: FirstThree
      },
      children: [
        {
          path: '',
          component: Second
        },
      ],
      alias: '/FirstTwo1'
    },
    {
      path: '/FirstThree',
      name: 'FirstThree',
      component: FirstThree
      // redirect: to => {
      //   console.log('dsg', to)
      //   return '/'
      // }
    },
    {
      path: '/FirstFour/:first',
      name: 'FirstFour',
      component: FirstFour,
      props: true
    },
    {
      path: '/FirstFive',
      name: 'FirstFive',
      component: FirstFive,
      meta: {
        dsg: '大硕哥！'
      },
      children: [
        {
          path: '',
          redirect: 'five1'
        },
        {
          path: 'five1',
          component: Second,
          meta: {
            dsg2: '大硕哥2！'
          }
        }
      ]
    }
  ]
});
