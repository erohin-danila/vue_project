import Vue from 'vue';
import Router from 'vue-router';
import Eror from '@/views/Eror.vue';
import Home from "@/views/Home.vue";

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
      
    ]
})