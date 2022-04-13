import requests from "./req";
import requestsMock from "./reqMock";

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', mothed: 'get' })
export const reqCategoryList = () => requestsMock({ url: '/category', mothed: 'get' })
export const reqbanner = () => requestsMock.get('/banner')