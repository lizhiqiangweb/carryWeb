import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = [
    {
        name: home,
        path: '/home',
        component: home
    },
    {
        name: zhengmu,
        path: '@/components/zhengmu',
        component: zhengmu
    },
]

const router = new VueRouter({
    mode: 'history',
    routers
})

export default router;