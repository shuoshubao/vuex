<template>
    <div>
        <!-- <el-button type="primary" @click="handleClick">click</el-button>
        <h1>name, {{info.name}}</h1>
        <h1>age, {{info.age}}</h1>
        <h1>typeof info.msg, {{typeof info.msg}}</h1>
        <h1>info.msg, {{info.msg}}</h1> -->

        <el-button type="primary" @click="handleClick2">click</el-button>
        <ul>
            <li v-for="(item, index) in arrList" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                info: {
                    name: '',
                    age: 0,
                },
                arrList: [11, 22, 33]
            }
        },
        methods: {
            handleClick() {
                // this.age = 18
                // this.info.name = 'shuoshubao'

                this.info.msg = 'abao'
                // this.$set(this.info, 'msg', 'abao')
            },
            handleClick2() {
                // this.arrList[1] = 'bb'
                this.arrList.splice(1, 1, 'bb')
            }
        }
    }
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
