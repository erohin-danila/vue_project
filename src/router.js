import Vue from 'vue';
import Router from 'vue-router';
import Eror from '@/views/Eror.vue';
import Home from "@/views/Home.vue";
import Merops from "@/views/Merops.vue";

Vue.use(Router)
export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
   
        {
            path: "*",
            component: Eror
        },
        {
            path: "/merops",
            component: Merops
        },
    ]
})