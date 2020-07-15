import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import choiceness from "./routes/choiceness";
import classify from "./routes/classify";
import ranking from "./routes/ranking";
import bookShelf from "./routes/bookShelf";
import search from "./routes/search";
import details from "./routes/details";
import recommend from "./routes/recommend";
import bookbar from "./routes/bookbar";
import more from "./routes/more";
import catlist from "./routes/catlist";
import read from "./routes/read";
import vip from "./routes/vip";
import recharge from "./routes/recharge";
import my from "./routes/my";
import login from "./routes/login";
import historyRecord from "./routes/historyRecord"
import VIPmember from "./routes/VIPmember"
import Checkdaily from "./routes/Checkdaily"
import RechargeRecord from "./routes/RechargeRecord"
import ExpensesRecord from "./routes/ExpensesRecord"
import UserAgreement from "./routes/UserAgreement"
import UserPrivacy from "./routes/UserPrivacy"
import Guidelines from "./routes/Guidelines"



  const routes = [
    {
      path:"/",
      redirect:"/choiceness"
    },
    choiceness,     //首页
    classify, //分类
    ranking,     //购物车
    bookShelf,       //书架
    search,    //搜索
    details,      //书籍详情
    recommend,   //热门推荐
    bookbar,      //书籍导航栏
    more,         //更多
    catlist,      //书籍阅读列表
    read,         //书籍阅读页
    vip,
    recharge,
    my,
    login,
    historyRecord,
    VIPmember,
    Checkdaily,
    RechargeRecord,
    ExpensesRecord,
    UserAgreement,
    UserPrivacy,
    Guidelines,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
