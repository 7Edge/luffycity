import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Course from '@/components/Course'
import Micro from '@/components/Micro'
import News from '@/components/News'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Course
    },
    {
      path: '/micro',
      name: 'Mirco',
      component: Micro
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ],
  mode: 'history'
})
