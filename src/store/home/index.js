import { reqCategoryList } from "@/axios"

const state = {
    categoryList: [],
}

const mutations = {
    CL(state, categoryList) {
        state.categoryList = categoryList;
    }


}

const actions = {
    async categoryList({ commit }) {
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit('CL', res.data)
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