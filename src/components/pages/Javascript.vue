<template>
    <div class="javascript-page">
        <headerbar></headerbar>
        <h3>有关JavaScript内容</h3>
        <!--<div class="html-books">-->
        <!--<div class="html-books-list">-->
        <!--<div class="html-books-box"
                         v-for="item in jsdata">
                        <router-link :to="{name:'detail',params:{id:item}}">
                            <p>{{item.name}}</p>
                            <img :src="item.src">
                        </router-link>
                        <div class="content">{{item.introduction}}</div>
                        <div class="drapdown-content">想了解更多信息请点击页面</div>
                    </div>-->
        <router-view></router-view>
        <!--</div>-->
        <!--</div>-->
        <ul>
            <li>
                <router-link :to="{name:'page1'}">1</router-link>
            </li>
            <li>
                <router-link :to="{name:'page2'}">2</router-link>
            </li>
            <li>
                <router-link :to="{name:'page3'}">3</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Headerbar from '../details/Header.vue'
// import Jspage1 from '../pages/javascript/js-page1'

export default {
    data() {
        return {
            jsdata: ''
        }
    },
    components: {
        Headerbar,
        // Jspage1
    },
    // created() {
    //     this.$axios.get('/api/books')
    //         .then((res) => {
    //             this.jsdata = res.data.data.javacript.slice(0, 9)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // },
    // computed: {
    //         filtereddata:function(){
    //             return this.msg1.slice(0, 10)
    //         }
    //     }
}
</script>

<style lang="less" scoped>
.javascript-page {
    width: 100%;
    height: 100%;
    background-color: #F0FFF0;
    h3 {
        margin: 0;
        text-align: center;
    }
}

ul {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    padding: 30px 0;
    margin-bottom: 120px;
}

ul>li {
    display: inline-block;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 1px solid rgba(100, 200, 200, 0.5);
    border-radius: 10px;
    transition-duration: 1s;
}

ul li a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    font-size: 24px;
}

.router-link-active {
    background-color: lightsalmon;
    color: whitesmoke;
    border-radius: 10px;
}




/*悬停时已选中的分页不受影响*/

ul>li:hover:not(.router-link-active) {
    background-color: lightgray;
    color: orangered;
    border-radius: 10px;
}
</style>