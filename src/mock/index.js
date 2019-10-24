import Mock from 'mockjs'
import {getUserInfo} from "./response/user";
import {getTableData} from "./response/data";
const Random = Mock.Random
// url写法
// Mock.mock('http://localhost:10000/getUserInfo', 'post',  getUserInfo);
// 正则
Mock.mock(/\/getUserInfo/, 'post',  getUserInfo);
Mock.mock(/\/getTableData/, 'get',  getTableData);
// 模板
// Mock.mock(/\/getUserInfo/, 'post',  {name: 'June_Test1'});

Mock.setup({
  timeout: 500
});

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon'];
    return this.pick(fruit);
  }
});

export default Mock;
