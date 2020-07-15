<template>
  <div>
    <headerBar :title="headerTitle"></headerBar>
    <div class="cat-section">
            <cat v-for="category in categories" :category="category" :key="category.title"></cat>
        </div>
  </div>
</template>

<script>
import headerBar from "../components/header/headerBar";
import api from "../fetch/api";
import cat from "../components/classify/cat";
import { CATEGORY_PAGE } from "../util/util";
import { mapMutations } from "vuex";
export default {
  data() {
        return {
            isShowPageLoading: true,
            headerTitle: '分类',
            categories: []
        }
    },
    components: {
        cat,
        headerBar,
    },
    created: function () {
		this.SET_HEADER_INFO({
			title: '分类',
			type: CATEGORY_PAGE
		});
        this.fetchData();
    },
    methods: {
		...mapMutations([
			'SET_HEADER_INFO'
		]),
        fetchData: function() {
            api.getCategory()
                .then(data => {
                    for (let [key, value] of Object.entries(data)) {
                        let obj = null;
                        switch (key) {
                            case 'male':
                                obj = {
                                    title: '男生',
                                    gender: 'male',
                                    catList: value
                                };
                                break;
                            case 'female':
                                obj = {
                                    title: '女生',
                                    gender: 'female',
                                    catList: value
                                };
                                break;
                            case 'press':
                                obj = {
                                    title: '出版',
                                    gender: 'press',
                                    catList: value
                                };
                                break;
                            default:
                                break;
                        }
                        if (obj !== null) {
                            this.categories.push(obj);
                        }
                    }
                    this.$nextTick(function () {
                        this.isShowPageLoading = false;
                    })
                })
        }
    }
};
</script>

<style lang="scss" scoped>
</style>