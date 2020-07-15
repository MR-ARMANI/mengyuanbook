<template>
  <div class="recharge-view">
    <div class="back-bar">
      <span class="back" @click="$router.go(-1)">
        <span class="iconfont icon-jiantou2 icon"></span>
      </span>
      <h2>充值</h2>
    </div>

    <div class="c-full-screen-page-body">
      <div class="page-pay-wraper">
        <div class="payList">
          <div class="title">请选择充值方式</div>
          <div class="li">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1OTBDOTcwOUE3QTExRTY4NTc3RkYyRTcyN0YzMEM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1OTBDOTcxOUE3QTExRTY4NTc3RkYyRTcyN0YzMEM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzU5MEM5NkU5QTdBMTFFNjg1NzdGRjJFNzI3RjMwQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzU5MEM5NkY5QTdBMTFFNjg1NzdGRjJFNzI3RjMwQzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/XTl5AAALhElEQVR42uxd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"
              class="weixin"
            />
            <div class="right">
              <div class="name">微信</div>
              <div class="desc">推荐安装微信6.0.2及以上版本用户使用</div>
              <van-checkbox v-model="result"></van-checkbox>
            </div>
          </div>
          <div class="li">
            <img src="http://m.zhuishushenqi.com/image/96ebd44848e3.zhifubao.png" class="zhifubao" />
            <div class="right">
              <div class="name">支付宝</div>
              <div class="desc">数亿用户都在用，安全可托付</div>
              <van-checkbox v-model="result2"></van-checkbox>
            </div>
          </div>
        </div>
        <div class="value">
          <div class="title">请选择充值金额</div>
          <div id="1143" class="value-block">
            <p>30元</p>
            <p>3000追书币</p>
          </div>
          <div id="1154" class="value-block">
            <p>50元</p>
            <p>5000追书币</p>
            <p>+3500追书券</p>
            <p class="gift-bg"></p>
            <p class="gift-value">
              <span>送70%</span>
            </p>
          </div>
          <div id="1155" class="value-block">
            <p>100元</p>
            <p>10000追书币</p>
            <p>+8000追书券</p>
            <p class="gift-bg"></p>
            <p class="gift-value">
              <span>送80%</span>
            </p>
          </div>
          <div id="1156" class="value-block">
            <p>200元</p>
            <p>20000追书币</p>
            <p>+20000追书券</p>
            <p class="gift-bg"></p>
            <p class="gift-value">
              <span>送100%</span>
            </p>
          </div>
        </div>
        <div class="explain">
          <p>说明：</p>
          <p>1、1元 = 100个追书币</p>
          <p>2、所充值金额暂不支持退款或提现。如充值遇到问题，请关注微信公众号：「zssqnb」，我们会及时为您服务。</p>
          <p>客服时间：周一至周日00:00-24:00</p>
        </div>
        <div id="alipay-form"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: true,
      result2: false
    };
  },
  component: {},
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
.recharge-view{
    padding-bottom: 0;
}
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
.c-full-screen-page-body {
  width: 100%;
  height: 100%;
  margin-top: 40px;
  .page-pay-wraper {
    height: 100%;
    padding: 12px 15px 30px;
    overflow-y: auto;
    background: #f4f4f4;
    .payList {
      .title {
        height: 25px;
        line-height: 25px;
        color: #999;
        font-size: 14px;
      }
      .li {
        position: relative;
        height: 40px;
        padding: 17px 0;
        img {
          width: 40px;
          height: 40px;
          float: left;
        }
        .right {
          height: 100%;
          margin-left: 20px;
          padding: 2px 0;
          float: left;
          .name {
            color: #222;
            font-size: 14px;
          }
          .van-checkbox {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 0;
            top: 25%;
          }
        }
      }
    }
    .value {
      margin-top: 10px;
      .title {
        height: 25px;
        line-height: 25px;
        color: #999;
        font-size: 14px;
      }
      .value-block {
        position: relative;
        margin-top: 12px;
        display: inline-block;
        vertical-align: middle;
        width: 45%;
        height: 93px;
        border-radius: 4px;
        border: 2px solid #b93321;
        margin-bottom: 7px;
        text-align: center;
        color: #b93321;
        padding-top: 25px;
        p:first-child {
          font-size: 28px;
          line-height: 34px;
          font-weight: 600;
        }
        .gift-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 58px;
          height: 58px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MWFjOTQxMy01YjZmLTQxMjgtODRmMy00ZWNjM2E0NTkxNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFNDc3N0E2MkVBMTFFNzk3ODlGNjM0RUQzMzc2OTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFNDc3Nzk2MkVBMTFFNzk3ODlGNjM0RUQzMzc2OTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYTg4MjVmMy1jYWQ2LTQyN2MtYjM5NC0xMGI5ZTA4NmJkMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MjAzMWQyNi05Yjc2LTExN2EtOTY0Yy04ODJjNjYxM2ZlY2QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40hmQeAAADpklEQVR42uzd52oUYRSH8UnwiryCxEKIRLEgoqiIKOI1WRERsSFiFyPpSLqabosxvVeNMep7yBmYD5K+m51/ngcO+bznl3d2N0tm8xZP7SyNoqgwIsnyw5SEKWMVusBzYfaFKWcdmsARyPrA1qwjV7AWTeAkciWr0QS2ZkDWBramHbmKFWkCJ5GrWZMmsDUFsjawNenINaxLEzhGLg7zlpVpAsfIRWFqWZsmcIy8F2Rd4CRyHevTBE4i17NCTWBrAmRtYGvckRtYpSZwErmRdWoCW2OO3MRKNYGt0TB7QNYFjpHtJDezWk1ga8SR37FeTWBr2C/XIIsCJ5E/sGZN4Bh5V5gWVq0JnERuZd2awNZQtPTvMSCLAsfIdpLbWLsmsDXoyO2sXhPYGvDLNciiwDGyneQOCDSBrX5H7oRBE9jqA1kb2Op15C44NIGTyB8h0QS2vvur60+waALHyAUg6wInT/JneDSBrR5H/gKRJrD1DWRtYKvbkb9CpQmcRO6GSxM48hMMsjBw5M/Fhf7cTILASeQe6DSBI39/XOjvl0kQ2LK/dBWArAscI3OShYEt+/TJPoXqhVIT2OoCWRvY6nTkPkg1gZPI/bBqAlsdjjwArSaw1e6vrkEWBY6R7SQPAqxbmyMPAaxbq1+uhwDWRraTPAywbi3bFTl/Gz1Wu1fI7u2GnL/NfqHfR0s3hhkGWDe7tZPdx2sEYN2aHXkUYN2a/HI9CrA2sp3kMYB1a3TkcYB1a/DL9TjA2sh2kicA1q3ekScB1q1OCRng/1erggzw8shFaUcGePns21aL04wM8MrVpBkZ4NUj25dkTwGsW7UjTwOsW1XakAFee5WOPAOwPvIswLpVpAEZ4I1V7shzAIMMcIorC1OSi8gAb15vwuzPNWSAN7fSMAdyCRngze91mIO5ggxwZnoV5lAuIAOcuV468g+A9ZF/AqzbC0eeB1i35/7Cax5gbWQ7yb8A1u1ZtpEBzn5PwxzOFjLAW9OTMEeygQzw1vU4zNFMIwO8tT0KcyyTyABvfQ8ziQxw7iAfzwQywLnTgzAnwiwArNt9P8kLAGsj20n+DbBu9xx5EWDd7m4GMsC53Z2NIgOcDuST60UGOB3dDnN6PcgAp6db60EGOH3IZ9aCDHD6uhnm7GqRAU5nN1aLDHC6kc+thAxwurse5nyYPwDrdm055B3sR6Kr/vNymDxOsC6yneS/AOt2JcyFJDLAel1KIgOsi3zRkP8JMACqQ/DUxz6RXQAAAABJRU5ErkJggg==)
            no-repeat;
        }
        .gift-value {
            position: absolute;
            top: 5px;
            right: -7px;
            width: 60px;
            height: 35px;
            line-height: 35px;
            color: #fff;
            font-size: 12px;
            transform: rotate(45deg);
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
      }
      .value-block:nth-child(2n) {
        margin-right: 10px;
      }
    }
    .explain{
        color: #999;
        padding: 20px 0;
         p {
            font-size: 14px;
            line-height: 20px;
        }
    }
  }
}
</style>