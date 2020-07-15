<template>
  <div class="read">
    <read-content :read-content="readContent" @show-menu="showMenu" @next-chapter="nextChapter"></read-content>
    <!-- <chapter :chapters="chapters" :show="isShowChapters" @hide-menu="hideMenu" @select-chapter='selectChapter' v-if="chapters.length > 0"></chapter> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import api from "../../fetch/api";
import readContent from "./readContent";
// import chapter from "./chapter";



export default {
  name: "read",
  components: {
    readContent,
    // chapter
  },
  data() {
    return {
      readdata: "",
      isShowPageLoading: true,
      showDialog: false,
      bookId: "",
      chapters: [],
      isShowChapters: false,
      isFromMenu: false,
      readContent: [],
      isLoading: true,
      isEnding: false,
      readIndex: 0,
      pageOption: {
        top: "0px",
        bottom: "0px"
      },
      dialogOption: {
        title: "加入书架",
        text: "喜欢本书就加入书架吧",
        cancelButtonText: "不用了",
        confirmButtonText: "加入书架"
      }
    };
  },
  computed: {
    ...mapState(["curBook", "shelfBookList"])
  },
  watch: {
    chapters() {
      if (this.curBook.readChapter !== "") {
        // 去书架中取书籍的历史阅读记录
        for (let [idx, chapter] of Object.entries(this.chapters)) {
          if (this.curBook.readChapter === chapter.id) {
            this.readIndex = idx;
            break;
          }
        }
      }
      this.fetchChapterContent(this.chapters[this.readIndex].id);
    },
    readInde() {
      let book = this.curBook;
      book.readChapter = this.chapters[this.readIndex].id;
      this.SET_CUR_BOOK(book);
    }
  },
  created() {
    this.$store.state.vanTabbar = false;
    this.bookId = this.$route.params.id;
    console.log(this.bookId)
    for (let book of Object.values(this.shelfBookList)) {
      if (this.bookId === book.id) {
        this.SET_CUR_BOOK(book);
        break;
      }
    }
    this.fetchChapters(this.bookId);
    if (this.$route.query.menu) {
      this.isFromMenu = true;
      this.isShowChapters = true;
    }
  },
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  },
  methods: {
    ...mapMutations(["SET_CUR_BOOK", "ADD_TO_SHELF"]),
    fetchChapters(bookId) {
      this.axios("/api/atoc/"+bookId+"?view=chapters").then(readdata => {
        this.readdata = readdata.data;
      console.log("res", this.readdata);
      
    });
    },
    fetchChapterContent(chapterId) {
      api.getChapterContent(chapterId).then(data => {
        this.readContent.push({
          contentTitle: data.title,
          contentList: data.isVip
            ? ["vip章节，请到正版网站阅读"]
            : data.cpContent.split("\n")
        });
        this.isLoading = false;
        this.$nextTick(function() {
          this.isShowPageLoading = false;
        });
      });
    },

    showMenu: function() {
      this.isShowChapters = true;
    },
    hideMenu: function() {
      if (this.isFromMenu) {
        this.$router.go(-1);
      }
      this.isShowChapters = false;
    },
    nextChapter: function() {
      if (this.readIndex === this.chapters.length - 1) {
        return;
      }
      this.readIndex++;
      this.isLoading = true;
      this.fetchChapterContent(this.chapters[this.readIndex].id);
    },
    selectChapter: function(chapterId) {
      if (this.isFromMenu) {
        this.isFromMenu = false;
      }
      this.isShowChapters = false;
      this.isShowPageLoading = true;
      for (let [index, value] of Object.entries(this.chapters)) {
        if (value.id === chapterId) {
          this.readIndex = index;
          break;
        }
      }
      api.getChapterContent(chapterId).then(data => {
        this.readContent.splice(0, this.readContent.length);
        this.readContent.push({
          contentTitle: data.title,
          contentList: data.isVip
            ? ["vip章节，请到正版网站阅读"]
            : data.cpContent.split("\n")
        });
        this.$nextTick(function() {
          this.isShowPageLoading = false;
        });
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.curBook.isInShelf && !this.isFromMenu) {
      this.showDialog = true;
      this.$refs.dialog
        .confirm()
        .then(() => {
          this.showDialog = false;
          let book = this.curBook;
          book.isInShelf = true;
          this.SET_CUR_BOOK(book);
          this.ADD_TO_SHELF(book);
          next();
        })
        .catch(() => {
          this.showDialog = false;
          next();
        });
    } else {
      next();
    }
  }
};
</script>

<style lang="scss">
.read {
  position: relative;
  height: 100%;
}
</style>
