import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = [
    {
        path: '/home',
        component: require('@/components/home.vue')
    },
    {
        path: '/zhengmu',
        component: require('@/components/zhengmu.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routers
})

export default router;