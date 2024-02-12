import MainPage from "@/pages/MainPage.vue";
import PostListGoalPage from "@/pages/PostListGoalPage.vue";
import PostListReadPage from "@/pages/PostListReadPage.vue";

export const postRouter = [
    {
        name: 'main',
        path: '/',
        component: MainPage,
        children:[
            {
                name: 'Goal',
                path: '',
                component: PostListGoalPage,
            },
            {
                name: 'Read',
                path: '/read',
                component: PostListReadPage,
            },
        ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]