import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Watched from '@/components/Watched'
import Content from '@/components/Content'
import ContentSpecial from '@/components/ContentSpecial'
import Mine from '@/components/Mine'
import ProjectDetails from '@/components/ProjectDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: Content,
          children: [
            {
              path: '',
              component: Mine
            },
            {
              path: 'mine',
              component: Mine
            },
            {
              path: 'watched',
              component: Watched
            },
            {
              path: 'projectDetails',
              component: ProjectDetails
            }
          ]
        },
        {
          path: 'content',
          component: Content,
          children: [
            {
              path: '',
              component: Mine
            },
            {
              path: 'mine',
              component: Mine
            },
            {
              path: 'watched',
              component: Watched
            },
            {
              path: 'projectDetails',
              component: ProjectDetails
            }
          ]
        },
        {
          path: 'special',
          component: ContentSpecial
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
