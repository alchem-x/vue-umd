define(['vue'], ({ defineComponent }) => {
    return defineComponent({
        data() {
            return {
                color: '#000',
                backgroundColor: '#fff',
            }
        },
        computed: {
            style() {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor,
                    minHeight: '100vh',
                    display: 'grid',
                    placeItems: 'center',
                    userSelect: 'none',
                    fontSize: '8rem',
                    fontWeight: 'bold',
                    fontFamily: 'ui-monospace, monospace',
                }
            },
        },
        methods: {
            onClick() {
                this.color = this.randomColor()
                this.backgroundColor = this.randomColor()
            },
            randomColor() {
                const c = () => Math.trunc(Math.random() * 256).toString(16)
                return `#${c()}${c()}${c()}`
            },
        },
        template: `
          <div @click="onClick" :style="style">
            Vue UMD
          </div>
        `,

    })
})
