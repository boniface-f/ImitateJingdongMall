import Vue from 'vue'
import App from './App.vue'
import router from './router';

// Vue.config.productionTip = false
// 全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from "@/components/Carousel"
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

import store from "@/store"
import "@/mock/mockServer"
import "swiper/css/swiper.css"



new Vue({
    render: h => h(App),
    router,
    store,
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app')