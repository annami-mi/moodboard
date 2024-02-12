import {createRouter, createWebHistory} from "vue-router"
// import MainPage from "../../pages/MainPage.vue";
import {postRouter} from "./modules/postRouter.ts";

const routes = [
    ...postRouter
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
