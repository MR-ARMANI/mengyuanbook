<template>
    <div>
        <div class="back-bar">
      <span class="back" @click="$router.go(-1)">
        <span class="iconfont icon-jiantou2 icon"></span>
      </span>
      <h2>历史记录</h2>
    </div>
    </div>
</template>

<script>
    export default {
        created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
    }
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
    left: 5px;
    text-align: center;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  h2 {
    width: 70%;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
  }
}
</style>