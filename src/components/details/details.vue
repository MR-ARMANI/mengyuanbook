<template>
  <div class="book"> 
    <!-- 标题 -->
    <backBar :title="title"></backBar>

    <book-info @load-result="loadResult"></book-info>
    
    <!-- 评价组件 -->
    <review></review>

    <!-- 同类推荐 -->
    <recommend></recommend>

    <!-- 底部导航 -->
    <bookbar></bookbar>



  </div>
</template>

<script>
import {
	mapState,
	mapMutations
} from 'vuex';
import { BOOK_PAGE } from '../../util/util';
import backBar from "../header/backBar"
import review from "./review";
import recommend from "./recommend";
import bookbar from "./bookbar";
import bookInfo from "./bookInfo";



export default {
  data() {
		return {
            isShowPageLoading: true,
			title: '书籍详情'
		}
	},
    computed: {
        ...mapState([
            'curBook',
            'shelfBookList'
        ])
    },
	created() {
		this.SET_HEADER_INFO({
			title: '同类推荐',
			type: BOOK_PAGE
		});
		// 如果当前书籍已存在书架中，则书架中的书籍设置为当前书籍
		let isInShelf = false;
		for(let book of Object.values(this.shelfBookList)) {
			if (book.id === this.$route.params.id) {
				isInShelf = true;
				this.SET_CUR_BOOK(book);
				break;
			}
		}
		if (!isInShelf) {
			this.SET_CUR_BOOK({
				id: this.$route.params.id,	//书籍id
				title: '',					//书名
				cover: '',					//封面
				author: '',					//作者
				lastChapter: '',			//已更新的最新章节
				updated: '',				//更新时间
				readChapter: '',			//已读章节
				isInShelf: false,			//是否已在书架中，false：不在，true：在
				sort: false					//目录顺序，false：正序， true：倒序
			});
		}
	},
	methods: {
		...mapMutations([
			'SET_HEADER_INFO',
			'SET_CUR_BOOK'
		]),
		loadResult: function() {
			this.isShowPageLoading = false;
		}
	},
  components: {
    review,
    recommend,
    bookbar,
    backBar,
    bookInfo
  }
};
</script>

<style lang="scss" scoped>
.book{
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>