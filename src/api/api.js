// luffyxuecheng api 
// http://127.0.0.1:8000/api/v1/

import axios from 'axios'

axios.defaults.baseURL='http://127.0.0.1:8000/api/v1/'


const state = {

}

const actions = {

}

const mutations = {

}

const getters = {

}

var ret;

export default {
    getCourses(context){
        axios.request({url:'/course', method:"get"}).then(response => {
            context.commit('SET_COURSES', response.data);
        }).catch(error => {
            console.log(error)
        });
    },
}