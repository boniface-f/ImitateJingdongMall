import { reqSearchInfo } from "@/axios"

const state = {
    searchInfoList: {}
}

const mutations = {
    searchInfoList(state, searchInfoList) {
        state.searchInfoList = searchInfoList;
    }
}

const actions = {
    async reqSearchInfoList({ commit }, params = {}) {
        let res = await reqSearchInfo(params);
        // console.log(res.data);
        if (res.code == 200) {
            commit("searchInfoList", res.data);
            console.log(res.data)
        }
    }
}

const getters = {
    goodsListResult(state) {
        return state.searchInfoList.goodsList || [];
    },
    attrsListResult(state) {
        return state.searchInfoList.attrsList || [];
    },
    trademarkListResult(state) {
        return state.searchInfoList.trademarkList || [];
    }


}
export default ({
    state,
    mutations,
    actions,
    getters
})