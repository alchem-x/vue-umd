export default {
    mode: 'production',
    entry: './index.js',
    output: {
        library: {
            type: 'umd',
            name: 'Vue',
        },
        filename: 'vue.umd.js',
    },
}
