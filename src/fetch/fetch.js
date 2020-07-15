import axios from 'axios';

// 需要使用代理来解决跨域问题
// axios.defaults.baseURL = 'http://api.zhuishushenqi.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 2000;

export default async(url = '', params = {}, method = 'get') => {
    method = method.toLowerCase();
    if (method === 'get') {
        let paramArr = []; //数据拼接字符串
        for (let [key, value] of Object.entries(params)) {
            paramArr.push(key + '=' + value);
        }
        if (paramArr.length > 0) {
            url += '?' + paramArr.join('&');
        }
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                   reject(error)
                })
        });
    } else if (method === 'post') {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                   reject(error)
                })
        });
    } else {
        return Promise.reject('传递的参数错误');
    }
}