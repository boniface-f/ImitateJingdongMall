import Mock from "mockjs"
import banner from "./banner.json"
import floor from "./floor.json"
import category from "./category"
//参数一：请求地址；参数二：返回数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/category", { code: 200, data: category })