import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import mutations from './mutations';
import actions from './action';
import login from './login';


Vue.use(Vuex)

const state = {
	/*	
		id: '',				//书籍id
		title: '',			//书名
		cover: '',			//封面
		author: '',			//作者
		lastChapter: '',	//已更新的最新章节
		updated: '',		//更新时间
		readChapter: '',	//已读章节,
		isInShelf: false,	//是否已在书架中，false：不在，true：在
		sort: false			//目录顺序，false：正序， true：倒序
	*/
	curBook: null,		//当前查看的书籍对象
	headerTitle: 'RM',	//头部标题
	headerType: '',		//头部类型：featured:精选、rank:排行榜
	shelfBookList: [],	//书架书籍对象数组
	nightMode: false,	//是否夜间模式
	skinColor: '',		//阅读页面背景色
	fontSize: 14,		//设置页面字体大小
	searchHistory: [],	//搜索历史
  vanTabbar:true, //默认显示 底部导航
  islogin:false,  //是否登录
  user:[
	{id:1,uname:"admin",upass:"123"},
	{id:2,uname:"123456",upass:"789"},
	{id:3,uname:"chengen",upass:"123456"}
  ],
  loginNum:0
  
}

export default new Vuex.Store({
  state,
	getters,
	mutations,
	actions,
	login,
})
