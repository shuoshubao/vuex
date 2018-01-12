<script>
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count = state.count + 100
        }
      }
    })

    console.log(store.state.count);

    store.commit('increment')

    console.log(store.state.count);

    export default {
        data () {
            return {
                msg: 'world'
            }
        },
        render(h) {
            return (
                <div>
                    <h1>hello, {this.msg}</h1>
                </div>
            )
        }
    }
</script>

<style rel="stylesheet/scss" scoped>
h1 {
    font-size: 20px;
}
</style>
