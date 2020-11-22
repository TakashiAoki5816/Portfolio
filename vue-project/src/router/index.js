import Vue from 'vue'
import Router from 'vue-router'

import myheader from '@/components/myheader'
import about from '@/components/about'
import works from '@/components/works'
import skill from '@/components/skill'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: myheader
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/skill',
      component: skill
    },
    {
      path: '/contact',
      component: contact
    }
  ]
})
