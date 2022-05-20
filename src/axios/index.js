import requests from "./req";
import requestsMock from "./reqMock";

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqCategoryList = () => requestsMock({ url: '/category', method: 'get' })
export const reqBanner = () => requestsMock.get('/banner')
export const reqFloor = () => requestsMock.get('/floor')

export const reqSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

export const reqGoodInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })