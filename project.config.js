module.exports = {
    title: 'Vuex',
    port: 9000,
    dllEntry: [
        'vue',
        'vuex'
    ],
    pathConfig: {

    },
    devServer: {
        /*proxy: {
            '/api': 'http://localhost:9000/'
        }*/
        headers: {
            "Author": "shuoshubao"
        }
    }
}
