<template>
  <div id="app">
    <!-- 导航 -->
        <!-- <div class="tabbar" v-model="active" v-show="$store.state.vanTabbar" :route="routeboo" z-index="300">
          <router-link to="/choiceness/choicenessmale" class="tab-item" exact>
            <div class="tab-item-icon">
                <span class="iconfont icon-jingxuanyoupin" >
                </span>
            </div>
            <p class="tab-item-label">精选</p>
        </router-link>
          <router-link to="/category" class="tab-item" exact>
            <div class="tab-item-icon">
                <span class="iconfont icon-fenlei-" >
                </span>
            </div>
            <p class="tab-item-label">分类</p>
        </router-link>
          <router-link to="/cart" class="tab-item" exact>
            <div class="tab-item-icon">
                <span class="iconfont icon-paihang" >
                </span>
            </div>
            <p class="tab-item-label">排行</p>
        </router-link>
          <router-link to="/my" class="tab-item" exact>
            <div class="tab-item-icon">
                <span class="iconfont icon-shujia" >
                </span>
            </div>
            <p class="tab-item-label">书架</p>
        </router-link>
       
    </div> -->
    
    <van-tabbar v-model="active" active-color="#ed424b" v-show="$store.state.vanTabbar"> 
       <van-tabbar-item to="/choiceness" class="iconfont icon-jingxuanyoupin">精选</van-tabbar-item>
      <van-tabbar-item to="/classify" class="iconfont icon-fenlei-">分类</van-tabbar-item>
      <van-tabbar-item to="/ranking" class="iconfont icon-paihang">排行</van-tabbar-item>
      <van-tabbar-item to="/bookShelf" class="iconfont icon-shujia">书架</van-tabbar-item> 
      <van-tabbar-item to="/my" class="iconfont icon-wode">我的</van-tabbar-item> 
     </van-tabbar>
    <!-- 路由显示位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    bookinfo(){

    }
  },
};
</script>

<style lang="scss">
#app {
  padding-bottom: 50px;
}

.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;

    .tab-item {
        display: block;
        flex: 1;
        padding: 10px 0;

        &.router-link-exact-active {
            color: #ed424b;
        }
    }

    .tab-item-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto ;

        .iconfont {
            width: 24px;
            height: 24px;
        }
    }
    .tab-item-label {
        text-align: center;
        font-size: 12px;
    }
}
</style>
