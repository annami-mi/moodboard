import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'

import "@/shared/scss/main.scss";
import {router} from "./plugins/routers";
import vClickOutside from "click-outside-vue3";

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(vClickOutside)
app.mount('#app')
