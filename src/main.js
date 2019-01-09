// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'
import vuecookie from 'vue-cookie'

import api from './api/api.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios // 让所有Vue子对象都有$axios属性，属性对应的是axios

Vue.use(vuex) // 使用vuex作为vue的插件。
Vue.use(vuecookie)

var store = new vuex.Store({ // 全局vuex存储
  state: {
    courses: [], // 存储获取到的课程列表
    online_user_info: {
      user: null,
      user_token: null,
      expired: null,
    },
  },
  actions: {
    Init_Courses(context) { // 使用api模块提供的接口，发起ajax请求初始化获取课程列表。
      api.getCourses(context);
    },
    add_course(context, course) { // 添加课程
      context.commit('APPEND_COURSE', course)
    },
    login(context, userinfo){ 
      context.commit('ONLINE_USER', userinfo)
    }
  },
  mutations: { // 只有变化操作才定义mutations
    SET_COURSES(state, payload) { // 设置课程state.courses列表
      state.courses = payload;
    },
    APPEND_COURSE(state, payload) { // 向state.courses列表中添加课程
      state.courses.push(payload);
    },
    ONLINE_USER(state, payload) { // 更新登录用户信息
      state.online_user_info = payload;
    },
  },
  getters: { // 读取数据都定义
    all_course: state => { // store对外提供获取课程列表的服务
      return state.courses
    },
    logined: state => {
      let curr_date = new Date();
      let expired = new Date(state.online_user_info.expired);
      return Boolean(state.online_user_info.user_token && (expired >= curr_date))
    },
    get_online_userinfo: state => state.online_user_info,

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: {
    App
  },
  template: '<App/>'
})
