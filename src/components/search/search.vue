<template>
  <div>
    <!-- $router.go(-1) -1表示返回上一级 -->
    <!-- 顶部导航栏 -->
    <van-row class="topsearchNav">
      <van-col span="3" @click="$router.go(-1)">
        <span class="iconfont icon-jiantou2"></span>
      </van-col>
      <van-col span="17">
        <input
          type="text"
          class="search-input"
          ref="searchInput"
          placeholder="请输入您要搜索的关键字"
          @keyup.enter="searchByKeyword"
          style="color: #fff;font-size:14px;"
        />
      </van-col>
      <van-col span="4">
        <span class="iconfont icon-sousuo" @click="searchByKeyword"></span>
      </van-col>
    </van-row>

    <book-list :book-list="searchBooks" v-if="searchBooks.length > 0"></book-list>

    <template v-else>
      <div class="search-hot search-section">
        <h4>热门搜索</h4>
        <ul class="search-keyword-list">
          <li
            class="search-keyword"
            v-for="(hot,index) in hotKeywords"
            :key="index"
          >{{ hot.word }}</li>
        </ul>
      </div>
      <div class="search-history search-section">
        <h4>
          历史搜索
          <span class="clear-all" @click="clearAll">清空</span>
        </h4>
        <ul class="search-keyword-list">
          <li
            class="search-keyword"
            v-for="(history,index) in searchHistory"
            :key="index"
          >{{ history }}</li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import api from "../../fetch/api";
import bookList from "../classify/bookList";

export default {
  data() {
    return {
      hotKeywords: [],
      searchBooks: []
    };
  },
  components: {
    bookList
  },
  created() {
    api.getSearchHotKeywords().then(data => {
      this.hotKeywords = data.slice(0, 19);
    });
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
  computed: {
    ...mapState(["searchHistory"])
  },
  methods: {
    ...mapMutations(["SET_SEARCH_HISTORY", "CLEAR_SEARCH_HISTORY"]),
    searchByKeyword() {
      let keyword = this.$refs.searchInput.value;
      this.SET_SEARCH_HISTORY(keyword);
      api.searchByKeyword(keyword).then(data => {
        this.searchBooks = data;
      });
    },
    clearAll() {
      this.CLEAR_SEARCH_HISTORY();
    },
  }
};
</script>

<style lang="scss" scoped>
.fr {
  float: right;
}
.topsearchNav {
  background-color: #cf1b1b;
  .icon-jiantou2 {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #fff;
  }
  .van-search {
    padding: 0px;
    margin: 5px;
    background-color: #cf1b1b;
  }
  .van-search__content {
    background-color: #fff;
  }
  .search-input {
    width: 100%;
    height: 25px;
    background-color: #cf1b1b;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    margin-top: 10px;
    padding-left: 10px;
    margin-right: 15px;
  }
  //placeholder 颜色
  ::-webkit-input-placeholder {
    color: rgb(237, 178, 177);
    font-size: 14px;
  }
  :-moz-placeholder {
    color: rgb(237, 178, 177);
  }
  ::-moz-placeholder {
    color: rgb(237, 178, 177);
  }
  :-ms-input-placeholder {
    color: rgb(237, 178, 177);
  }
  .icon-sousuo {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    color: #fff;
    margin-left: 6px;
  }
}
.search-section {
  position: relative;
  padding: 10px 10px 20px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;

  h4 {
    line-height: 30px;
    border-bottom: 1px solid rgb(198, 199, 201);

    span.clear-all {
      float: right;
    }
  }

  //热门搜索
  .search-keyword-list {
    padding: 10px;
    .search-keyword {
      display: inline-block;
      font-size: 12px;
      margin: 5px;
      padding: 5px;
      color: rgb(140, 140, 140);
      border: 1px solid rgb(198, 199, 201);
      border-radius: 20px;
    }
  }
}
</style>