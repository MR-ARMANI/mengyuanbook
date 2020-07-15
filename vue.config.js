module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://api.zhuishushenqi.com",//代理跳转的目标网站
                changeOrigin: true, //代理跳转至指定的host
                pathRewrite: {
                    "^/api": "",
                }
            },
            '/chapterapi': {
                target: 'http://chapterup.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/chapterapi': 'http://chapterup.zhuishushenqi.com'
                },
            }
        }
    }
}