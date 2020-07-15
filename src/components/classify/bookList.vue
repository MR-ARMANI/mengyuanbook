<template>
  <div class="book-list-comm">
    <ol class="book-list-content">
      <li class="book-list-li book-list-li-comm" v-for="book in bookList" :key="book._id">
        <!-- 路由跳转到详情页 -->
        <router-link :to="{ name: '书籍详情', params: {id: book._id} }">
          <img class="book-list-book-cover fl" :src="book.cover | setCover" />
          <template v-if="headerType === type">
            <div class="book-list-book-info book-list-book-info-rank">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-info">
                <span class>
                  <span class="iconfont icon-wode3 icon book-author fl gray"></span>
                  {{ book.author }}
                </span>
              </p>
              <p class="book-summary text-line-comm gray">{{ book.shortIntro }}</p>
              <p class="book-info">
                <span class="red">{{ book.retentionRatio | setRetentionRatio }}%留存</span>
                <span class="split-line">|</span>
                <span class="blue">{{ book.latelyFollower | setLatelyFollower }}人气</span>
              </p>
            </div>
          </template>
          <template v-else>
            <div class="book-list-book-info">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-summary text-line-comm gray">{{ book.shortIntro }}</p>
              <p class="book-info">
                <span class="book-author fl gray">
                  <span class="iconfont icon-wode icon"></span>
                  {{ book.author }}
                </span>
                <span class="book-tags fr">
                  <em class="small-tag red">{{ book.retentionRatio | setRetentionRatio }}%留存</em>
                  <em class="small-tag blue">{{ book.latelyFollower | setLatelyFollower }}人气</em>
                </span>
              </p>
            </div>
          </template>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { RANK_PAGE, staticPath } from "../../util/util";

export default {
  name: "bookList",
  props: {
    bookList: Array
  },
  data() {
    return {
      type: RANK_PAGE
    };
  },
  computed: {
    ...mapState(["headerType"])
  },
  filters: {
    setLatelyFollower(latelyFollower) {
      return latelyFollower < 10000
        ? latelyFollower
        : (latelyFollower / 10000).toFixed(1) + "万";
    },

    setRetentionRatio(retentionRatio) {
      return parseFloat(retentionRatio).toFixed(1);
    },

    setCover(cover) {
      if (cover.indexOf(staticPath) > -1) {
        return cover;
      }
      return staticPath + cover;
    }
  }
};
</script>

<style scoped lang="scss">
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
</style>
