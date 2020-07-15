<template>
  <div>
    <div>
      <header>
        <van-nav-bar title="登录 / 注册" left-arrow @click-left="onClickLeft" color="#cf1b1b"/>
      </header>
      <van-form @submit="onSubmit" v-show="!bool">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button color="#cf1b1b" round block type="info" native-type="submit" style="margin-top:20px;" @click="submit">登录</van-button>
        </div>
      </van-form>

      <van-form @submit="onSubmit" v-show="bool">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请填写用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请填写密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="请填写确认密码"
          :rules="[{ required: true, message: '请填写确认密码' }]"
        />
        <div style="margin: 16px;">
          <van-button color="#cf1b1b" round block type="info" native-type="submit" style="margin-top:20px" @click="register">注册</van-button>
        </div>
      </van-form>
      <div class="register clearfix" style="color: #999999;">
        <a class="fl" @click="bool=false">账号密码登录</a>
        <a class="fr" @click="bool=true">快速注册</a>
      </div>
      <div class="else-login">
        <span>其他方式登录</span>
        <div class="eles">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconQQ1" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconweixin4" />
          </svg>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      username: "",
      password: "",
      password2:"",
      bool:false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },

    submit(){
      var user = this.$store.state.user;
      for(var i=0;i<user.length;i++){
        if(this.username == user[i].uname && this.password == user[i].upass){
            this.$store.state.islogin = true;
            this.$store.state.loginNum = user[i].id-1;
            console.log(this.$store.state.loginNum);
            this.$router.go(-1);
            return;
        }
      }
      Dialog.alert({
        title: '用户名或密码错误',
        message: '请重新输入用户名或密码!',
      }).then(() => {
    
      });
    },

    register(){
      if(this.password == this.password2){
        this.$store.state.user.push({
          uname:this.username,
          upass:this.password,
          id:this.$store.state.user.length+1
        });
        this.bool = false;
    
        this.username ="";
        this.password ="";
        console.log(this.$store.state.user);
      }else{
        console.log("重新输入");
      }
    }
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.else-login {
  border-top: 1px solid #ccc;
  margin: 70px 30px 0px;
  height: 200px;
  position: relative;
  span {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 0 10px;
  }
  .eles {
    text-align: center;
    font-size: 50px;
    svg {
      margin: 20px;
    }
  }
  p {
    text-align: center;
    a {
      color: #4a90e2;
    }
  }
}
.register {
    padding: 0 5%;
    font-size: 14px;
  }
</style>
