import Vue from 'vue'
import Router from 'vue-router'
import page2 from '../components/page2'
import page3 from '../components/page3'

import home from '../components/Home'
import about from '../components/About'
import TestVuex from '../components/TestVuex'
import TestVuex_2 from '../components/TestVuex_2'
//import TestVuex_3 from '../components/TestVuex_3'

//
import tasksIndex from '../components/Tasks/Index'
import tasksNew from '../components/Tasks/new'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'
import tasksTest from '../components/Tasks/test'
import tasksTestVuex from '../components/Tasks/test_vuex'

//
Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        { path: '/page2', component: page2 },
        { path: '/page3', component: page3 },
        /* task */
        { path: '/tasks/edit/:id', component: tasksEdit },
        { path: '/tasks', component: tasksIndex },
        { path: '/tasks/new', component: tasksNew },
        { path: '/tasks/show/:id', component: tasksShow },
        { path: '/tasks/test', component: tasksTest },
        { path: '/tasks/test_vuex', component: tasksTestVuex },
        // vuex
        { path: '/vx1', component: TestVuex },
        { path: '/vx2', component: TestVuex_2 },
//        { path: '/vx3', component: TestVuex_3 },

    ]
})
