import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store"
import VTooltip from 'v-tooltip'
import VueMeta from 'vue-meta'
import 'tippy.js/dist/tippy.css';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
    config: { id: "G-560YWL7J6B" }
});

Vue.use(VueMeta);
Vue.use(VTooltip);
VTooltip.options.defaultHtml = false
// https://www.npmjs.com/package/v-tooltip

Vue.config.productionTip = false;

Vue.prototype.$selectBox = "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400",
Vue.prototype.$searchBox = "text-2xl text-gray-800 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full border-gray-300 rounded-md dark:focus:border-zinc-600 dark:focus:ring-zinc-600 dark:bg-zinc-700 dark:border-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
