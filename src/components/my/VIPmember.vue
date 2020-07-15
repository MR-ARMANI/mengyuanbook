<template>
  <div>
    <div class="back-bar">
      <span class="back" @click="$router.go(-1)">
        <span class="iconfont icon-jiantou2 icon"></span>
      </span>
      <h2>充值</h2>
    </div>

    <div class="pay-monthly-wraper">
      <div class="top">
        <div class="vip">
          <img
            src="http://statics.zhuishushenqi.com//avatar/65/af/65af4fcefdce66970c165972b78b042a"
            class="avatar"
          />
          <h4 class="name">一拳超人</h4>
          <p class="time">您还不是VIP用户</p>
        </div>
      </div>
      <p class="pay_tit">支付方式</p>
      <div class="pay-type">
        <div class="type current">
          <img src="../../assets/img/weixin.png" class="logo wechat" />
          <p class="name">微信支付</p>
          <p class="select"></p>
        </div>
        <div class="type">
          <img src="../../assets/img/zhifubao.png" class="logo alipay" />
          <p class="name">支付宝支付</p>
          <p class="select"></p>
        </div>
      </div>
      <p class="pay_tit">充值会员</p>
      <ul class="product-list">
        <li id="1157" class="current">
          <p class="num">1个月</p>
          <p class="price">
            <span>￥</span>12.00
          </p>
          <p class="sub">每天仅0.4元</p>
        </li>
        <li id="1158" class>
          <p class="num">3个月</p>
          <p class="price">
            <span>￥</span>30.00
          </p>
          <p class="sub">每天仅0.3元</p>
          <p class="gift">赠250书券</p>
        </li>
        <li id="1159" class>
          <p class="num">6个月</p>
          <p class="price">
            <span>￥</span>60.00
          </p>
          <p class="sub">每天仅0.3元</p>
          <p class="gift">赠600书券</p>
        </li>
        <li id="1160" class>
          <p class="num">12个月</p>
          <p class="price">
            <span>￥</span>108.00
          </p>
          <p class="sub">每天仅0.3元</p>
          <p class="gift">赠1080书券</p>
        </li>
      </ul>
      <div class="tip">
        <span>注：部分书籍因版权限制，不参与VIP</span>
      </div>
      <div class="bot">
        <div class="button">微信支付(12元)</div>
      </div>
      <div id="alipay-form"></div>
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

.pay-monthly-wraper {
  position: relative;
  height: 100%;
  overflow-y: auto;
  background: #fff;
  margin-top: 40px;
  padding-bottom: 40px;
  .top {
    position: relative;
    width: 100%;
    padding-top: 54%;
    background: #fff url("../../assets/img/viptop.png") no-repeat;
    background-size: 100%;
    margin-bottom: 20px;
    .vip {
      position: absolute;
      top: 20px;
      left: 4%;
      width: 92%;
      padding-top: 50%;
      background: url("../../assets/img/vip.png") no-repeat;
      background-size: 100% 100%;
      img {
        position: absolute;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #dfdfdf;
        top: 20px;
        left: 20px;
      }
      .name {
        width: 44%;
        position: absolute;
        top: 27px;
        left: 80px;
        font-size: 15px;
        color: #584019;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .time {
        position: absolute;
        top: 48px;
        left: 80px;
        font-size: 11px;
        color: #584019;
      }
    }
  }
  .pay_tit {
    padding-left: 15px;
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .pay-type {
    display: flex;
    padding: 0 15px;
    margin-bottom: 25px;
    justify-content: space-between;
    display: flex;
    .current {
      position: relative;
      display: flex;
      width: 165px;
      height: 58px;
      border: 1px solid #dfdfdf;
      border-radius: 5px;
      img {
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 30px;
        margin-top: 10px;
      }
      .name {
        font-size: 14px;
        color: #666666;
        margin-left: 10px;
        margin-top: 14px;
      }
      .select {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 25px;
        height: 25px;
        background: url("../../assets/img/vipicon.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .type {
      position: relative;
      display: flex;
      width: 165px;
      height: 58px;
      border: 1px solid #dfdfdf;
      border-radius: 5px;
      img {
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 30px;
        margin-top: 10px;
      }
      .name {
        font-size: 14px;
        color: #666666;
        margin-left: 10px;
        margin-top: 14px;
      }
    }
  }
  .pay_tit {
    padding-left: 15px;
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .product-list {
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      position: relative;
      width: 38%;
      height: 80px;
      padding: 15px 18px;
      border: 1px solid #dfdfdf;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 15px;
      float: left;
      .num {
        font-size: 12px;
        color: #666;
        margin-bottom: 4px;
      }
      .price {
        font-size: 26px;
        color: #dd503e;
        font-weight: 700;
      }
      .sub {
        font-size: 10px;
        color: #999;
      }
      .gift {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 20px;
        background: #ec484a;
        border-bottom-left-radius: 10px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: #fff;
      }
    }
    .current {
      border: 1px solid #dc4052;
      background: #fff1f1;
    }
  }

   .tip {
    padding-left: 15px;
    font-size: 12px;
    color: #666;
    padding-bottom: 25px;
}
 .bot {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 59px;
    border-top: 1px solid #dfdfdf;
    background: #fff;
    .button {
    width: 258px;
    height: 40px;
    background: #cf1b1b;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
}
}
}
</style>