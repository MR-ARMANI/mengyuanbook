<template>
  <div>
    <div class="back-bar">
      <span class="back" @click="$router.go(-1)">
        <span class="iconfont icon-jiantou2 icon"></span>
      </span>
      <h2>VIP</h2>
    </div>
    <div class="banner">
      <img
        src="https://plf-new.zhuishushenqi.com/management/images/20200602/13f7dc15640940968ad4223f78879161.jpg"
        alt
      />
    </div>
    <div class="top">
      <div class="left">
        <img
          src="http://statics.zhuishushenqi.com/avatar/65/af/65af4fcefdce66970c165972b78b042a"
          class="userImg"
        />
        <div class="userInfo">
          <span class="name">一拳超人</span>
          <span class="text">开通VIP，享受VIP特权</span>
        </div>
      </div>
      <a href="/recharge" class="right">开通VIP</a>
    </div>

    <div class="bottom">
      <div class="viptit">VIP特权</div>
      <a href="#" class="btn">
        <img
          class="icon1"
          src="data:image/png;base64,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"
        />
        <div class="text">VIP书库</div>
      </a>
      <a class="btn">
        <img
          class="icon2"
          src="data:image/png;base64,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"
        />
        <div class="text">全场折上折</div>
      </a>
      <a class="btn">
        <img
          class="icon3"
          src="data:image/png;base64,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"
        />
        <div class="text">专属客服</div>
      </a>
      <a href="#" class="btn">
        <img
          class="icon4"
          src="data:image/png;base64,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"
        />
        <div class="text">了解更多特权</div>
      </a>
    </div>

    <div class="book-list-section">
      <div class="book-list-top">
        <h2 class="book-list-title">女生佳作</h2>
        <div class="book-list-more fr">
          <a href="/more" class="red">更多</a>
        </div>
      </div>
      <div class="book-home-list">
        <ol class="book-list-content">
          <li class="book-list-li">
            <a href="/details/5bbdcc59baf4690e4efbaea7" class>
              <img
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3316087%2F3316087_49049fbed1ea4a4c8652dce5d4a22ef2.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">暖婚100分：老公，轻点宠</h3>
                <p class="book-summary text-line-comm gray">
                  “轻点，疼......”
                  “太太，是你自己天天说腿酸，我才给你揉的。”
                  布桐在路边捡了个帅到惨绝人寰的老公，婚后，厉先生化身妻，宠起老婆来连老婆本人都怕。
                  “老公，说好的高冷禁欲呢？”
                  厉先生无辜摊手，“禁的是欲，不禁你。”
                  “老公，你公司的秘书不错。”
                  第二天，厉先生把女员工全部遣散。
                  布桐欲哭无泪：“我只是想问问她的口红色号而已啊。”
                  厉先生要出差一个月，布桐假装闷闷不乐相送，转身就开香槟庆祝，终于可以放大假了。
                  第二天醒来，厉先生站在床头，“太太，惊不惊喜？感不感动？”
                  布桐：“不敢动，不敢动......”
                  【1v1超爽甜宠文，男女主身心健康。】
                </p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 一鹿小跑
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">现代言情</em>
                    <em class="small-tag red">连载中</em>
                    <em class="small-tag blue">36107人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="book-list-li">
            <a href="/details/5885d29f27ed60977b8f12e3" class>
              <img
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1422444%2F1422444_86f9db269821480585da0a71282b93fd.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">天下第一妃</h3>
                <p
                  class="book-summary text-line-comm gray"
                >她，二十一世纪Z国军情七处的顶尖特工，一朝穿越成为懦弱无能的萧家废物三小姐！未婚夫伙同天才姐姐一同害她遍体鳞伤，手筋脚筋被砍断，还险些被大卸八块？放肆！找死！谁再敢招惹她，休怪她下手无情！说她是废物？说她没有灵兽？说她买不起丹药？睁大眼睛看清楚，废物早就成天才！灵兽算个屁，神兽是她的跟屁虫！丹药很贵？别人吃丹药一个一个吃，她是一瓶一瓶当糖豆吃！他，绝色妖媚，杀伐决断，令人闻风丧胆的神秘帝王。当他遇上她，势必纠缠不休！ “你生生世世只能是我的女人！</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 萧歌
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">玄幻奇幻</em>
                    <em class="small-tag red">完结</em>
                    <em class="small-tag blue">18480人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="book-list-li">
            <a href="/details/5667c3a8d1f7b0b21cfce3a0" class>
              <img
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F745426%2F745426_dbe197818f474f408280dd9aa06d5813.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">金闺玉堂</h3>
                <p
                  class="book-summary text-line-comm gray"
                >开国之初，盛世再现，各色妹子齐聚，共舞一曲芳华争艳。 闺阁之中她是隐藏在嫡姐身后的跟屁虫，暗地里，她却一再的运用自己前世所学的各种本领一一化解前世灾难。 朝堂倾轧，腥风血雨，当隐忍已经不能保得家人平安的时候，她果断选择了主动出击。 果然是软的怕硬的，硬的怕横的，横的怕不要命的！ 当前世所有的渣人全都被消灭的时候，她万万料想不到，背后捅自己一刀的竟然是自己最亲近的家人！ 果然，最毒不过妇人心—— 不论亲疏！ 但芳华落幕，陪在自己身边的，竟然是…… 【小剧场抢先看】 冷华宫内，冰绡纱帐如烟似霞，流光溢彩，而铜镜前正在慢慢描绘唇形的女子却是绝艳无双。 凤冠，霞披，嫁衣如血，美人如画。 映着女子一张面无表情的脸。 忽的，一道慵懒声音从背后响起：“你就这么想做皇后？” “不然呢？”女子冷笑回头：“除了这样，还能有什么方法保得古家无恙？” “你还有我！”男子大步走近女子身边，一把拽下她头上的凤冠怒道：“既然你这么想做皇后，那本王便争一争这皇位，将这万里河山全都送到你脚下！” “不用了。”女子淡淡开口：“皇叔，你年纪不小了，怎么还会说出如此幼稚之语呢？” 男子一张脸顿时涨红如血，好半天才怒道：“本王今年才二十，哪里老了！”</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 红豆
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">女尊</em>
                    <em class="small-tag red">完结</em>
                    <em class="small-tag blue">3674人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="book-list-li">
            <a href="/details/5c6fcfbe3910c22f0a290342" class>
              <img
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3349000%2F3349000_ff24fa1144c8446a82c855d9875c6419.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">兽黑狂妃：皇叔逆天宠</h3>
                <p class="book-summary text-line-comm gray">
                  慕无双，二十一世纪金牌神医特工，一手医死人，一手杀罪犯，要人三更死，绝不留命到五更。
                  一朝穿越定国侯府三小姐，成了远近闻名的废物丑女。须不知她冷眸睁开，万兽臣服，天地变色。
                  她是凤毛麟角的逆天召唤师，她是炼丹师中的超级天才，她契约神兽，脚踩恶女渣男，遇佛挡佛，遇神杀神！
                  但是谁来告诉她，为什么这个一不小心撩上的皇叔，怎么甩都甩不掉了呢？
                  某王：“王妃美如天仙，你们给本王看紧了，任何搭讪者杀无赦！”
                  “主子，您眼瞎吗？要搭讪也是王妃搭讪别人吧！”
                  暗卫看着丑胖丑胖的王妃，在心底哀嚎。
                </p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 青扇
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">古代言情</em>
                    <em class="small-tag red">连载中</em>
                    <em class="small-tag blue">34521人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>

    <div class="book-list-section">
      <div class="book-list-top">
        <h2 class="book-list-title">畅销短篇</h2>
        <div class="book-list-more fr">
          <a href="/more" class="red">更多</a>
        </div>
      </div>
      <div class="book-home-list">
        <ol class="book-list-content">
          <li class="book-list-li">
            <a href="/details/51060bbfbb1c67cf28000026" class>
              <img
            
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42805%2F42805_a550b8dc2ab64132812a6a371f8fd287.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">十年一品温如言</h3>
                <p
                
                  class="book-summary text-line-comm gray"
                >多年以后,冬日火炉前,孙子们的小脑袋围成一团,要听老奶奶讲故事.温衡笑眯眯,那就讲个十年的故事好了,先说好,宝宝们,这只是个故事.第一年,她从江南小镇的乌鸦变成了金光闪闪的凤凰,撞到一男一女接吻,此男长得甚是可口,心喜.第二年,他生了怪病,她趁乱,鸠占鹊巢,赖在他家.第三年,他的奸夫从维也纳飞回,她,鸡飞蛋打,灰溜溜逃窜.第四年,她奉父命,当了别人家的童养媳,他几乎忘了她……</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 书海沧生
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">现代言情</em>
                    <em class="small-tag red">完结</em>
                    <em class="small-tag blue">25687人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="book-list-li">
            <a href="/details/5300ccb9b2c50edb7c008822" class>
              <img
            
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F871865%2F871865_f3527300a2b94cb59e24a906085073aa.png%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">念念不忘</h3>
                <p class="book-summary text-line-comm gray">
                  那一年，她与他擦肩而过
                  那一年，她成为他的女朋友
                  那一年，她与他天各一方
                  那一年，她与他相濡以沫
                  那一年，她与他相忘于江湖
                  那一年，她与他执子之手，与子偕老......你见，或者不见我，我就在那里，不悲不喜
                  你念，或者不念我，情就在那里，不来不去
                  你爱，或者不爱我，爱就在那里，不增不减
                  你跟，或者不跟我，我的手就在你手里，不舍不弃
                  来我怀里，或者，让我住进你的心里，黯然
                  相爱 寂静 欢喜
                  喜欢就戳戳这里!收藏此文章
                  新坑！
                  谢谢倚秋桐-大秋帮我做的专栏图片，灰常感谢！大家可以戳一戳哟！
                </p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 东奔西顾
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">现代言情</em>
                    <em class="small-tag red">完结</em>
                    <em class="small-tag blue">1090人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="book-list-li">
            <a href="/details/5aa6381e85a2d67ad2522ce7" class>
              <img
            
                src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2246148%2F2246148_ce07460988ca41869265dafb5381687a.jpg%2F"
                class="book-list-book-cover fl"
              />
              <div class="book-list-book-info">
                <h3 class="book-title">十年生死两茫茫</h3>
                <p
                
                  class="book-summary text-line-comm gray"
                >“君无焱，该死的人是我，你冲我来！”“一切都是我的错，是我不该爱上你，是我错了，我求你放过念家！”念轻歌跪着，额头一下又一下的磕在地上，任由鲜血渗出。君无焱冷冷的看着她，充满寒意的话从他口中说出：“念轻歌，我说过，早晚有一天会让你们念家付出代价！”毫无感情的话让念轻歌忽然明白，即使成亲三年，在君无焱的心里，她仍旧是个罪人。</p>
                <p class="book-info">
                  <span class="book-author fl gray">
                    <span class="iconfont icon-wode3 icon book-author fl gray"></span> 林未央
                  </span>
                  <span class="book-tags fr">
                    <em class="small-tag gray">现代言情</em>
                    <em class="small-tag red">完结</em>
                    <em class="small-tag blue">1087人气</em>
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.banner {
  height: 150px;
  margin-top: 40px;
  img {
    width: 100%;
    height: 150px;
  }
}
.top {
  height: 95px;
  padding: 0 15px;
  position: relative;
  .left {
    height: 95px;
    img {
      width: 50px;
      height: 50px;
      margin: 15px 14px 0 0;
      border-radius: 50%;
      float: left;
    }
    .userInfo {
      width: 50%;
      height: 50px;
      float: left;
      margin: 15px 0 0;
      .name {
        font-size: 15px;
        margin: 0 0 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text {
        display: block;
        font-size: 11px;
        color: #999;
      }
    }
  }
  .right {
    position: absolute;
    top: 28px;
    right: 40px;
    width: 75px;
    height: 23px;
    line-height: 23px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
    background: #cf1b1b;
  }
}

.bottom {
  width: 100%;
  height: 115px;
  position: relative;
  display: flex;
  .viptit {
    position: absolute;
    top: -13px;
    left: 50%;
    width: 80px;
    height: 25px;
    margin-left: -40px;
    background: #fff;
    font-size: 15px;
    color: #333;
    line-height: 25px;
    text-align: center;
  }
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon1,
    .icon2,
    .icon3,
    .icon4 {
      width: 45px;
      height: 45px;
      margin-bottom: 11px;
    }
    .text {
      font-size: 12px;
      color: #b93321;
    }
  }
}

.book-list-section {
  position: relative; 
  border-bottom: 10px solid #f6f7f9;
  padding: 15px 0 0 15px;
  background: #fff;
}
.book-home-list {
  position: relative;

  .book-list-li {
    padding: 10px 15px 10px 0;
    border-bottom: 1px solid #f0f1f2;

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

      .book-title {
        color: #333;
        line-height: 1;
        margin: 5px 0 8px;
      }
      .book-summary {
        font-size: 12px;
        line-height: 1.6;
      }
      .book-info {
        overflow: hidden;
        margin-top: 8px;
        line-height: 1.2;

        span {
          display: inline-block;
        }
        .book-author {
          margin-top: 2px;
          font-size: 13px;

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
  }
}

.book-list-top {
  position: relative;
  margin-bottom: 5px;
  overflow: hidden;

  .book-list-title {
    font-weight: 400;
    display: inline-block;
    color: #33373d;
    line-height: 1;
    border-left: 2px solid #ed424b;
    padding-left: 8px;
  }
  .book-list-more {
    display: inline-block;

    a {
      position: absolute;
      top: 0px;
      right: 15px;
      font-size: 13px;

      &::after {
        content: ">";
        display: inline-block;
        margin-left: 3px;
      }
    }
  }
}
</style>