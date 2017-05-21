<template>
    <div class="about-page">
        <headerbar></headerbar>
        <div class="forum">
            <h3>程序员自己的问答社区</h3>
            <button class="btn btn-primary"
                    @click="alert()">我要提问</button>
        </div>
        <!--问答区-->
        <section class="content">
    
        </section>
    </div>
</template>

<script>
import Headerbar from '../details/Header.vue'

export default {
    data() {
        return {
            aboutdata: ''
        }
    },
    components: {
        Headerbar
    },
    methods: {
        alert() {
            alert('注册后才能提问')
        }
    }
}
</script>

<style lang="less" scoped>
.forum {
    width: 50%;
    background-color: aquamarine;
    margin: 0 auto;
    text-align: center;
    height: 80px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3{
        margin: 0;
    }
    button{
        height:40px;
    }
}

.content {
    width: 80%;
    margin: 0 auto;
    // border: 1px solid gray;
    margin-top: 30px;
    height: 100vh;
    padding:30px 20px;
    background-color: lightcyan;
}
</style>