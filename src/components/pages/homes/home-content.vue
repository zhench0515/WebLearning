<template>
    <div class="content">
        <h1>前端相关内容推荐</h1>
        <p>这些项目可以帮助开发者快速搭建一个炫丽的网页。</p>
        <hr>
        <div class="content-list">
            <div class="content-box"
                 v-for="item in framesdata"
                 col-sm-6
                 col-md-4
                 col-lg-3>
                <a :href="item.href"
                   target="_blank">
                    <img :src="item.src"
                         width="300"
                         height="150">
                    <h3>{{item.name}}</h3>
                </a>
                <p>{{item.text}}</p>
                <div class="dropdown-content">
                    点击卡片区域进入相关网页。
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import Bus from '../../../bus.js'
export default {
    data() {
        return {
            framesdata: ''
        }
    },
    created() {
        this.$axios.get('/api/books')
            .then(function (response) {
                // console.log(response.data.data.frames)
                this.framesdata = response.data.data.frames
                // console.log(this.framesdata)
                Bus.msg=response.data.data
            }.bind(this))
            .catch(function (error) {
                console.log('数据未请求到' + error)
            })
        // this.$http.get('/api/frames').then((res)=>{
        //     console.log(res)
        // },(error)=>{
        //     console.log(error)
        // })
    }
}
</script>

<style lang="less" scoped>
.content {
    width: 80%;
    margin: 0 auto;
    // background-color: #F0FFF0;
    text-align: center;
    p {
        text-align: center;
        font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3";
        font-size: 2rem;
        color: gray;
    }
    h1 {
        font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3";
        text-align: center;
        padding: 30px 15px 15px 15px;
        font-weight: 600;
    }
    hr {
        border: 3px dotted gray;
    }
    .content-list {
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .content-box {
            position: relative;
            display: inline-block; // flex: auto;
            width: 300px; // height: 450px;
            margin: 15px 30px;
            border: 1px solid gray;
            // outline: 1px solid gray;
            // outline-offset: 5px;
            border-radius: 15px;
            box-shadow: 3px 3px 2px 3px rgba(0, 0, 0, 0.3);
            a {
                display: inline-block; // font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3";
                font-size: 20px; // padding: 30px 0;
                width: 100%;
                text-align: center;
                background-color: lightskyblue;
                cursor: pointer;
                text-decoration: none;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                img {
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    width: 100%;
                }
                h3 {
                    border: 0;
                }
            }
            p {
                padding: 15px 10px;
                font-size: 1.5rem;
                color: gray;
                background-color: lightyellow;
                margin: 0;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
            }
        }
        .dropdown-content {
            display: none;
            position: absolute;
            bottom:10px;
            background-color: #f9f9f9;
            min-width: 300px;
            // height:50px;
            line-height: 50px;
            color:orangered;
            font-size: 20px;
            background-color: lightskyblue;
            // opacity:0.5;
            // background-color: rgba(70,130,180, 0.3);
            z-index: 999;
        }
    }
}

.content-box:hover .dropdown-content{
    display: block;
    animation: donghua 2s linear;
}
@keyframes donghua{
    from{
        height:0px;
    }
    to{
       height:50px;
    }
}
</style>