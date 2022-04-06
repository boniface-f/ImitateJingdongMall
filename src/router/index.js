import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, res, rej) {
    if (res && rej) {
        originPush.call(this, location, res, rej)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, res, rej) {
    if (res && rej) {
        originReplace.call(this, location, res, rej)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}


export default new VueRouter({
    routes: [{
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/search/:keyword',
            component: Search,
            meta: {
                show: true
            },
            name: "search"
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})