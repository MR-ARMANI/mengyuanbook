<template>
  <div>
    <!-- 顶部 -->
    <div class="back-bar">
      <h2>个人中心</h2>
      <span class="back" @click="toSearch">
        <span class="iconfont icon-sousuo icon"></span>
      </span>
    </div>


     <!-- 登录页面 -->
    <div class="login">
      <div class="userImg fl">
        <img src="../assets/img/user01.jpg" />
      </div>
      <router-link tag="span" to="/login" class="fl" v-show="!$store.state.islogin">登录/注册</router-link>
      <div class="username fl" v-show="$store.state.islogin">
        <div class="username-left">
          <b>用户0{{$store.state.loginNum+1}}</b>
          <p>账号:{{$store.state.user[$store.state.loginNum].uname}}</p>
          <i>普通会员</i>
        </div>
        
      </div>
    </div>


    <div class="myList" v-for="(item,index) in myList" :key="index">
      <ul> 
        <router-link :to="item.routelink">
          <li>
            <img :src="require(`../assets/img/${item.icon}.png`)" alt="">
            <i>{{item.text}}</i>
            <span class="iconfont icon-jiantou8"></span>
        </li>
        </router-link>
      </ul>
    </div>

    <div class="exit" @click="quit" v-show="$store.state.islogin">
        <div>退出登录</div>
    </div>


  </div>
</template>

<script>
export default {
    
  data() {
    return {
      myList: [
        { text: "我的书架", icon: "myicon1", routelink:"/bookShelf" },
        { text: "历史记录", icon: "myicon2", routelink:"/historyRecord" },
        { text: "VIP会员", icon: "myicon3", routelink:"/VIPmember" },
        { text: "充值记录", icon: "myicon5", routelink:"/RechargeRecord" },
        { text: "消费记录", icon: "myicon6", routelink:"/ExpensesRecord" },
        { text: "用户协议", icon: "myicon7", routelink:"/UserAgreement" },
        { text: "用户隐私保护政策", icon: "myicon8", routelink:"/UserPrivacy" },
        { text: "侵权申诉指引", icon: "myicon9", routelink:"/Guidelines" },
      ],
      active:4,
    };
  },
  methods: {
    quit() {
      this.$store.state.islogin = false;
    },
    toSearch(){
          this.$router.push({path:'/search'})
      },
  }

};
</script>

<style lang="scss" scoped>
.back-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  overflow: hidden;
  color: #fff;
  background-color: #b83320;
  z-index: 1;

  .back {
    position: absolute;
    top: 8px;
    right: 10px;
    text-align: center;
    .icon {
        font-size: 20px;
      width: 30px;
      height: 30px;
    }
  }
  h2 {
    width: 70%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
  }
}


.login {
  height: 80px;
  box-sizing: border-box;
  padding: 14px 30px;
  background-image: url("../assets/img/mybg01.png");
  background-size: 100%;
  background-color: #bb4b3a;
  margin-top: 40px;
  .userImg {
    width: 42px;
    padding: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: relative;
    img {
      padding: 1px;
      border-radius: 50%;
      padding: 0;
      vertical-align: middle;
    }
  }
  span {
    margin-top: 12px;
    margin-left: 12px;
    color: #ffffff;
    font-size: 14px;
  }
  .username {
    color: #fff;
    margin-left: 16px;
    .username-left {
      p {
        font-size: 12px;
        color: #fff;
      }
      i {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    
  }
}

.myList {
  padding-top: 1px;
  background-color: #f5f5f5;
  ul {
    li {
      height: 52px;
      line-height: 52px;
      font-size: 13px;
      background-color: white;
      position: relative;
      border-bottom: 1px solid #d9d9d9;
      img {
       width: 25px;
       height: 25px;
       float: left;
       line-height: 30px;
       margin: 14px 10px 0;
      }
      span {
        position: absolute;
        top: 0;
        right: 20px;
      }
      &:nth-child(2n),
      &:last-child {
        border: 0;
      }
      &:nth-child(2n + 1) {
        margin-top: 10px;
      }
    }
  }
}
.exit{
    position: relative;
    width: 60%;
    height: 40px;
    margin: 20px auto;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: #b83320;
    line-height: 40px;
    border-radius: 2px;
}
</style>