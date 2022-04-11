import Vue from 'vue'
import App from './App.vue'
import router from './router';

// Vue.config.productionTip = false
// 全局组件
import TypeNav from '@/components/TypeNav'

import { reqCategoryList } from "@/axios"
reqCategoryList();

import store from "@/store"
Vue.component(TypeNav.name, TypeNav)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')