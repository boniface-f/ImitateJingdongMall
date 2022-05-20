import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from './routes'

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
    //路由
    routes,
    //路由条状后屏幕y=0
    scrollBehavior(to, from, savePosition) {
        return { y: 0 }
    }
})