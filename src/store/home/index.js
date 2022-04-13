import { reqbanner, reqCategoryList } from "@/axios"

const state = {
    categoryList: [],
    bannerList: []
}

const mutations = {
    CL(state, categoryList) {
        state.categoryList = categoryList;
    },
    bannerList(state, bannerList) {
        state.bannerList = bannerList;
    }
}

const actions = {
    async categoryList({ commit }) {
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit('CL', res.data)
        }
    },
    async bannerList({ commit }) {
        let res = await reqbanner();
        // console.log(res);
        if (res.code == 200) {
            commit('bannerList', res.data)
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