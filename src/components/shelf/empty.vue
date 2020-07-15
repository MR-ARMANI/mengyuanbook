<template>
  <div class="emptybox">
    <div class="empty">
      <a href="/choiceness">
        <div class="empty-icon">
          <img src="http://c-shuqi.11222.cn/assets/bookshelf-empty_0f8e62c.png" alt="">
        </div>
        <p class="empty-notice">快去添加你喜欢的小说吧</p>
      </a>
    </div>
    <div class="thinglike">
      <img src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt />
      <div  class="book-list-comm">
        <ol class="book-list-content">
          <li class="book-list-li book-list-li-comm">
              <img
              
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F685505%2F685505_e9c83eb544944b11bf79053af5b990fb.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">修罗武神</h3>
                <p
                
                  class="book-summary text-line-comm gray"
                >论潜力，不算天才，可玄功武技，皆可无师自通。论魅力，千金小姐算什么，妖女圣女，都爱我欲罢不能。论实力，任凭你有万千至宝，但定不敌我界灵大军。我是谁？天下众生视我为修罗，却不知，我以修罗成武神。</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode icon"></span> 善良的蜜蜂
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag red">61.2%留存</em>
                    <em class="small-tag blue">4.5万人气</em>
                  </span>
                </p>
              </div>
          </li>
          <li class="book-list-li book-list-li-comm">
              <img
              
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1128471%2F1128471_1bb8950fbcf5499a84bd3260fb817545.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">无上神帝</h3>
                <p
                
                  class="book-summary text-line-comm gray"
                >万千大世界，强者如林。一代仙王牧云，重生到一个备受欺凌的私生子身上，誓要搅动风云，重回巅峰。苍茫天域，谁与争锋？诸天万界，我主沉浮！这一世，牧云注定要掌御万界，斗破苍穹！</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode icon"></span> 蜗牛狂奔
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag red">70.8%留存</em>
                    <em class="small-tag blue">11.8万人气</em>
                  </span>
                </p>
              </div>
          </li>
          <li class="book-list-li book-list-li-comm">\
              <img
              
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3387088%2F3387088_368c1a79dccf420d8a343009fd954d29.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">超级女婿</h3>
                <p class="book-summary text-line-comm gray">
                  “我叫韩三千”
                  三年前，我如同一条狗一样，被赶出家族的大门
                  三年后，家族掌门却来求我，让我回家主持大局……
                  入赘三年，我可以忍受岳母的欺辱，朋友的嘲笑，但我忍不了你受一丁点委屈
                  隐忍三年，我可以承担废物的骂名，家族的唾弃，但我受不了你哪怕一滴眼泪
                  所有人都以为可以骑在我头上，而我，只等你牵起我的手，便给你整个世界。
                </p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode icon"></span> 绝人
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag red">74.3%留存</em>
                    <em class="small-tag blue">15.1万人气</em>
                  </span>
                </p>
              </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.emptybox{
  padding-top: 20px;
}
.empty {
  
  a {
    display: block;
    text-align: center;
  }

  .icon-jiarushujia_01 {
    font-size: 80px;
    color: #ccc;
  }

  .empty-notice {
    margin-top: 10px;
    color: #999;
    font-size: 16px;
  }
}
.thinglike {
  margin-top: 30px;
  .book-list-comm {
  position: relative;
  padding-top: 40px;
  .book-list-li {
    padding: 10px 15px 10px 0;
    border-bottom: 1px solid #f0f1f2;

    &.book-list-li-comm {
      padding-left: 10px;
    }

    a {
      display: block;
      overflow: hidden;
    }
    .book-list-book-cover {
      display: inline-block;
      width: 66px;
      height: 88px;
      margin-right: 10px;
    }

    .book-list-book-info {
      position: relative;
      overflow: hidden;

      .book-title {
        color: #333;
        line-height: 1;
        padding-top: 5px;
        margin-bottom: 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .book-summary {
        font-size: 12px;
        line-height: 1.6;
        display: block;
      }
      .book-info {
        overflow: hidden;
        margin-top: 8px;
        line-height: 1.2;
        position: relative;
        span {
          display: inline-block;
        }
        .book-author {
          margin-top: 2px;
          font-size: 13px;
          position: relative;
          top: -2px;
          left: 0;
          .icon {
            width: 16px;
            height: 16px;
          }
        }
        .book-tags {
          margin: 3px 0;
        }
        
        em.small-tag {
          font-size: 10px;
          padding: 1px;
          margin: 2px;
        }
        em.gray {
          border: 1px solid #969ba3;
        }
        em.red {
          border: 1px solid #ed424b;
        }
        em.blue {
          border: 1px solid #4284ed;
        }
      }
    }
    .book-list-book-info-rank {
      .book-summary {
        -webkit-line-clamp: 1;
        margin: 5px 0;
      }
      .book-title {
        margin-bottom: 5px;
      }
      .book-info {
        margin-top: 8px;
        .split-line {
          padding: 0 3px;
        }
      }
    }
  }
}
}
</style>