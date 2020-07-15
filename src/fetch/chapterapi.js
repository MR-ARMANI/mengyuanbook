import axios from "axios"
import qs from "querystring"

export function  getChapter(id){
    return axios({
      url: '/api/atoc/'+id+'?view=chapters',
    })
  }
  
  //获取章节详细内容
  export function getBookChapter(link){
    return axios({
      url:'/chapterapi/chapter/'+link,
      // url:'http://chapterup.zhuishushenqi.com/chapter/'+link,
    })
  }

  //获取书籍源
export function getBookSources(bookid){
    let book_source = qs.stringify(bookid);
    return axios({
      url: '/api/atoc?'+book_source,
    })
  }