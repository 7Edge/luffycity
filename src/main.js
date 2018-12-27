// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(vuex)

var store = new vuex.store({
  state:{
    courses:[]
  },
  actions:{
    
  },
  mutations:{
    SET_COURSES(state, payload){
      state.courses = payload;
    }
  },
  getters:{

  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})