import requests from "./req";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', mothed: 'get' })