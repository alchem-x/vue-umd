const ss = (strings, ...keys) => strings.map((s, i) => s + (keys[i] ?? '')).join('').replace(/\.js$/, '')

requirejs.config({
    enforceDefine: true,
    paths: {
        'vue': ss`https://unpkg.com/vue-umd@3.2.31/dist/vue.umd.js`,
    },
})

function startApp() {
    define(['vue', './App',], ({ createApp, h }, App) => {
        const app = createApp({
            render() {
                return h(App)
            }
        })
        return app.mount('#app')
    })
}

startApp()
