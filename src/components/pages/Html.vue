<template>
    <div class="html-page">
        <headerbar></headerbar>
        <h3>有关HTML及CSS内容</h3>
        <div class="html-books">
            <div class="html-books-list">          
                <div class="html-books-box" v-for="item in htmldata">
                    <router-link :to="{name:'detail',params:{id:item}}">
                        <p>{{item.name}}</p>
                        <img :src="item.src">
                    </router-link>
                    <div class="content">{{item.introduction}}</div>
                    <div class="drapdown-content">想了解更多信息请点击页面</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Headerbar from '../details/Header.vue'
// import Bus from '../../bus.js'
export default {
    data() {
        return {
            htmldata: ''
        }
    },
    components: {
        Headerbar,
    },
    created() {
        this.$axios.get('/api/books')
            .then((res) => {
                this.htmldata = res.data.data.htmlcss
                // Bus.msg=this.$route.params.data
                // console.log(this.$route.query.id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}
</script>
<style lang="less" scoped>
.html-page {
    width: 100%;
    height: 100%;
    background-color: #F0FFF0;
    h3 {
        margin: 0;
        text-align: center;
    }
    .html-books {
        margin: 0 auto;
        margin-top: 30px;
        padding:30px 15px;
        width: 60%;
        background-color: whitesmoke;
        .html-books-list{
            width:100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .html-books-box:hover{
                border: 2px solid lightskyblue;
                box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.2);
                a{
                    -moz-text-decoration-color:#68228B;
                    // text-decoration-color: #68228B;
                    p{
                        color:#9A32CD;
                    }
                }
            }
            
            .html-books-box{
                background-color: white;
                border: 1px solid gray;
                width:300px;
                margin-bottom: 15px;
                padding:10px;
                // outline: 1px solid gray;
                // outline-offset: 10px;
                text-align: center;
                a{
                    display: inline-block;
                    p{
                        font-size: 16px;
                        color:gray;
                    }
                    img{
                        display: inline-block;
                        width:200px;
                        height:240px;
                        margin-bottom: 10px;
                    }
                }
                .content{
                    height:60px;
                    overflow: hidden;
                    text-overflow: ">>";
                    color:gray;
                }
            }
        }
    }
}
.html-books-box{
    position: relative;
    text-align: center;
}
.drapdown-content{
    display:none;
    position: absolute;
    z-index: 2;
    width:100%;
    // height:50px;
    background-color: lightskyblue;
    line-height: 50px;
    font-size: 20px;
    color:orangered;
    bottom:10px;
}
.html-books-box:hover .drapdown-content{
    display: block;
    animation: yundong 1.5s linear;
}

@keyframes yundong{
    from{
        height:0;
    }
    to{
        height:50px;
    }
}
</style>