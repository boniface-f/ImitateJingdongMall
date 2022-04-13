import { reqBanner, reqCategoryList, reqFloor } from "@/axios"

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}

const mutations = {
    CL(state, categoryList) {
        state.categoryList = categoryList;
    },
    bannerList(state, bannerList) {
        state.bannerList = bannerList;
    },
    floorList(state, floorList) {
        state.floorList = floorList;
    }
}

const actions = {
    async getCategoryList({ commit }) {
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit('CL', res.data)
        }
    },
    async getBannerList({ commit }) {
        let res = await reqBanner();
        // console.log(res);
        if (res.code == 200) {
            commit('bannerList', res.data)
        }
    },
    async getFloorList({ commit }) {
        let res = await reqFloor();
        if (res.code == 200) {
            commit("floorList", res.data)
        }
    }
}

const getters = {

}
export default ({
    state,
    mutations,
    actions,
    getters
})