import { reqGoodInfo } from "@/axios"
const state = {
    goodInfoList: {}
}

const mutations = {
    goodInfoList(state, goodInfoList) {
        state.goodInfoList = goodInfoList;
    }
}

const actions = {
    async dispatchReqGoodInfo({ commit }, skuId) {
        let res = await reqGoodInfo(skuId);
        // console.log(res.data);
        if (res.code == 200) {
            commit("goodInfoList", res.data)
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