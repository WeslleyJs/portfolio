import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path:'/',
        name: 'home',
        components: () => import(/* webpackChunkName: "home" */'./pages/Homeeg.vue')
    },
    {
        path:'/eg',
        name: 'ingles',
        components: () => import(/* webpackChunkName: "home" */'./pages/Homeeg.vue')
    },
    {
        path:'/pt',
        name: 'portugues',
        components: () => import(/* webpackChunkName: "home" */'./pages/Homeeg.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router;