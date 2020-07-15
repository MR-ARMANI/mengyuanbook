<template>
<div class="catlist-section" ref="catList">
	<backBar :title="title"></backBar>
	<catBar @filter-change="filterBooks" :gender="gender" :major="major"></catBar>
	<book-list :book-list="list" v-if="list.length > 0"></book-list>
	<!-- <list-loading v-show="isLoading"></list-loading> -->
</div>
</template>

<script>
import api from '../../fetch/api';
import {
	debounce
} from '../../util/util';
import bookList from './bookList';
import backBar from '../header/backBar';
import catBar from './catBar';
// import listLoading from '@/components/ListLoading';

export default {
	name: 'catlist',
	components: {
		backBar,
		bookList,
		catBar,
		// listLoading
	},
	data() {
		return {
			title: '',
			list: [],
			page: 0,
			limit: 20,
			gender: '',
			type: 'hot',
			major: '',
			minor: '',
			isLoading: true,
			isEnding: false,
			$docElement: null,
			$body: null,
			$list: null,
			clientHeight: 0
		}
	},
	created() {
		this.gender = this.$route.query.gender;
		this.title = this.major = this.$route.params.major;
		this.fetchData();
	},
	mounted() {
		this.$docElement = document.documentElement;
		this.$body = document.body;
		this.clientHeight = this.$body.clientHeight;
		this.$list = this.$refs.catList;
		window.addEventListener('scroll', debounce(this.loadMore));
	},
	methods: {
		fetchData: function() {
			api.getCatBooks(this.gender, this.type, this.major, this.minor, this.page * this.limit)
				.then(data => {
					if (data.length < this.limit) {
						this.isEnding = true;
						this.isLoading = false;
					}
					this.list.push(...data);
				})
		},
		loadMore: function() {
            let scrollTop = this.$body.scrollTop + this.$docElement.scrollTop;
			let offsetHeight = this.$list.offsetHeight;
			if (offsetHeight - scrollTop - this.clientHeight < 160) {
				if (this.isEnding === true) {
					return;
				}
				this.page++;
				this.isLoading = true;
				this.fetchData();
			}
		},
		filterBooks: function(type, minor) {
			if (this.type === type && this.minor === minor) {
				return;
			} else {
				this.type = type;
				this.minor = minor;
				this.list = [];
				this.page = 0;
				this.isLoading = true;
				this.fetchData();
			}
		}
	}
}
</script>

<style lang="scss">
.catlist-section {
    padding-top: 120px;
}
</style>
