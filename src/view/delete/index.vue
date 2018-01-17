<template>
    <div>
        <el-button type="primary" @click="handleDelete">Delete</el-button>
        <ul>
            <li v-for="(item, key) in info" :key="key">{{key}}: {{item}}</li>
        </ul>

        <el-button type="primary" @click="handleDelete2">Delete</el-button>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{index}}: {{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                info: {
                    name: 'abao',
                    age: 10,
                    sex: 1,
                },
                list: ['a', 'b', 'c']
            }
        },
        methods: {
            handleDelete() {
                // delete this.info.name // 不生效
                // Vue.delete(this.info, 'name')
                this.$delete(this.info, 'name')
            },
            handleDelete2() {
                // this.list.length = 2 // 不生效
                // Vue.delete(this.list, 1)
                this.$delete(this.list, 1)
            }
        }
    }
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
