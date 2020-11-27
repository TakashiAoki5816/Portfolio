import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import works from '@/components/works'
import skill from '@/components/skill'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: home
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
