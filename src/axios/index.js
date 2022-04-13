import requests from "./req";
import requestsMock from "./reqMock";

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', mothed: 'get' })
export const reqCategoryList = () => requestsMock({ url: '/category', mothed: 'get' })
export const reqBanner = () => requestsMock.get('/banner')
export const reqFloor = () => requestsMock.get('/floor')