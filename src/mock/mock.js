import { baseUrl } from "../config/env";
const Mock = require('mockjs');

const Random = Mock.Random;

//数据mock
Mock.mock( baseUrl + 'todolist','get',{
    'dataList|10-50': [{
        'title': "@ctitle(2,10)",
        "img": "@image('600x600',#b7ef7c)",
        "brief": "@csentence(1,50)",
        "price|0-20.0-2": 1,
        "num": 0,
        "minusFlag": true,
        "time": "@time",
        "peisongfei|0-100.0-2": 1,
        "limit|0-50": 1
      }]
});