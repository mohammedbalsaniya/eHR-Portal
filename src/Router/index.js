import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home.vue";
import selfService from "@/views/selfService.vue";
import login from "@/components/login.vue";
import NotFoundView from "@/components/NotFoundView.vue";


const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "Home",
            component: HomeView
        },
        {
            path: "/selfServices",
            name: "selfService",
            component: selfService
        }, 
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
          },
    ]
})

export default routes;