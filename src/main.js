// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'

import api from './api/api.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(vuex)

var store = new vuex.Store({
  state: {
    courses: [1]
  },
  actions: {
    Init_Courses(context) {
      api.getCourses(context);
    },
    add_course(context, course) {
      context.commit('APPEND_COURSE', course)
    }
  },
  mutations: {
    SET_COURSES(state, payload) {
      state.courses = payload;
    },
    APPEND_COURSE(state, payload) {
      state.courses.push(payload);
    }
  },
  getters: {
    all_course: state => {
      return state.courses
    }
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
