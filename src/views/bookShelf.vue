<template>
  <div class="book-shelf">
    <headerBar></headerBar>
    <shelfList v-if="shelfBookList.length > 0"></shelfList>
    <empty v-else></empty>
    
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SHELF_PAGE } from "../util/util";
import empty from "../components/shelf/empty";
import shelfList from "../components/shelf/shelfList";
import headerBar from "../components/header/headerBar";
export default {
  components: {
    empty,
    headerBar,
    shelfList
  },
  computed: {
    ...mapState(["shelfBookList"])
  },
  data() {
    return {
      isShowPageLoading: true,
      bookList: [],
    };
  },
  created() {
    this.SET_HEADER_INFO({
      title: "我的书架",
      type: SHELF_PAGE
    });
    this.isShowPageLoading = false;
  },
  methods: {
    ...mapMutations(["SET_HEADER_INFO"])
  }
};
</script>

<style lang="scss" scoped>
.book-shelf {
  margin-top: 40px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  overflow: hidden;
  color: #fff;
  background-color: #fff;
  background-color: #ed424b;
  box-sizing: border-box;
  z-index: 99;

  h2.header-logo {
    position: absolute;
    top: 12px;
    left: 15px;
    color: #fff;
    line-height: 20px;
  }
  .nav-group {
    margin: 10px auto;
    display: table;
    border: 1px solid #fff;
    border-radius: 4px;

    .nav-item {
      display: table-cell;
      font-weight: 400;
      line-height: 20px;
      padding: 0 10px;
      color: #fff;

      &.active {
        color: #666;
        background-color: #fff;
      }
    }
  }

  .header-search {
    position: absolute;
    display: inline-block;
    top: 6px;
    right: 15px;

    .icon-sousuo {
      width: 20px;
      height: 20px;
      font-size: 20px;
      color: #fff;
    }
  }
}

</style>