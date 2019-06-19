import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from '../components/home'
import zhengmu from '../components/zhengmu'
import classFy from '../components/classFy'
import completePics from '../components/completePics'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/zhengmu',
            component: zhengmu
        },
        {
            path: '/classFy',
            component: classFy
        },
        {
            path: '/completePics',
            component: completePics
        },
    ]
})

export default router;