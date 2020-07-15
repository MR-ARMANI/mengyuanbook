<template>
  <div class="book-bar">
    <div class="book-bar-item" v-show="!isAdded" @click="addToShelf">
      <div class="book-bar-icon">
         <span class="iconfont icon-jiarushujia6 icon"></span>
      </div>
      <p class="book-bar-content">加入书架</p>
    </div>
    <div class="book-bar-item" v-show="isAdded">
      <div class="book-bar-icon">
        <span class="iconfont icon-yijiarushujia icon"></span>
      </div>
      <p class="book-bar-content">已加入书架</p>
    </div>
    <div class="book-bar-item read">
     <router-link :to="{ name: '阅读', params: { id: curBook.id }}">
        <p class="book-bar-content nowread">立即阅读</p>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isAdded: false
    };
  },
  computed: {
    ...mapState(["curBook", "shelfBookList"])
  },
  created() {
    this.isAdded = this.curBook.isInShelf;
  },
  methods: {
    ...mapMutations(["SET_CUR_BOOK", "ADD_TO_SHELF"]),
    addToShelf: function() {
      let book = this.curBook;
      book.isInShelf = true;
      this.SET_CUR_BOOK(book);
      this.ADD_TO_SHELF(book);
      this.isAdded = true;
    }
  }
};
</script>

<style lang="scss">
.book-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  height: 60px;
  background-color: #fff;

  .book-bar-item {
    display: block;
    flex: 1;
    padding: 10px 0;
    font-size: 12px;
    color: #999;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    &.read {
      font-size: 16px;
      color: #fff;
      background: #b83320;
      line-height: 40px;
      border-top-color: #b83320;
    }
  }

  .book-bar-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 4px;

    .icon {
      width: 24px;
      height: 24px;
      font-size: 18px;
    }
  }
  .book-bar-content {
    text-align: center;
  }
  .nowread{
    color: #fff;
  }
}
</style>


