

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

import Home from './views/Home'

const Router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        }
    ]
})

export default Router