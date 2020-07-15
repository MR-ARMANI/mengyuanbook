<template>
  <div>
    <div class="header">
	<h2 class="header-logo">{{ headerTitle }}</h2>
	<nav class="nav-group" v-if="isShow">
		<h3 :class="['nav-item', { active: sexType === 'male' }]" @click="changSex('male')">男生</h3>
		<h3 :class="['nav-item', { active: sexType === 'female' }]" @click="changSex('female')">女生</h3>
	</nav>
	<div class="header-search">
		<router-link to="/search">
            <span class="iconfont icon-sousuo icon"></span>
		</router-link>
	</div>
		
</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { FEATURED_PAGE, RANK_PAGE } from '../../util/util';

export default {
	props: {
		sex: {
			type: String,
			default: '',
		}
	},
	computed: {
		...mapState([
			'headerTitle',
			'headerType'
		])
	},
	created() {
		if (this.headerType === FEATURED_PAGE || this.headerType === RANK_PAGE) {
			this.isShow = true;
		}
		this.sexType = this.sex;
	},
	data() {
		return {
			isShow: false,
			sexType:''
		};
	},
	methods: {
		changSex: function (sex) {
			this.sexType = sex;
			this.$emit('change-sex', sex);
		}
	}
	
}
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
    width: 100%;
    height: 40px;
    overflow: hidden;
    // border-bottom: 1px solid #ed424b;
	color: #fff;
	background-color: #b83320;
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
        top: 7px;
        right: 15px;

        .icon {
            width: 20px;
            height: 20px;
            color: #fff;
            font-size: 20px;
        }
    }
}
</style>