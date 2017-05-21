<template>
    <div class="details">
        <detailhead></detailhead>
        <div class="detail-box">
            <h2>{{booksdata.name}}</h2>
            <small>{{time}}&emsp;{{date}}</small>
            <hr>
            <p>&emsp;&emsp;简介：{{booksdata.introduction}}</p>
            <a :href="booksdata.href"
               class="a1"
               target="_blank"><img :src="booksdata.src"></a>
            <p class="books-detail">书本详细信息：<a :href="booksdata.href"
                   class="a2"
                   target="_blank">{{booksdata.href}}</a></p>
            <hr>
            <strong>注：本书信息全部来自于JavaScript中文网</strong>
        </div>
    </div>
</template>

<script>
import Detailhead from './detail-head.vue'
// import Bus from '../../bus.js'
export default {
    data() {
        return {
            booksdata: '',
            time: "",
            date: ''
        }
    },
    components: {
        Detailhead
    },
    created() {
        this.booksdata = this.$route.params.id;

        // console.log(this.booksdata)
        this.time = new Date().toLocaleDateString()
        this.date = new Date().getDay()
        switch (this.date) {
            case 0:
                this.date = "星期日";
                break;
            case 1:
                this.date = "星期一";
                break;
            case 2:
                this.date = "星期二";
                break;
            case 3:
                this.date = "星期三";
                break;
            case 4:
                this.date = "星期四";
                break;
            case 5:
                this.date = "星期五";
                break;
            case 6:
                this.date = "星期六";
                break;
            default: break;
        }
    }
}
</script>

<style lang="less" scoped>
.detail-box {
    width: 50%;
    background-color: #F0FFF0;
    margin: 0 auto;
    padding: 30px 15px;
    h2 {
        text-align: center;
    }
    small {
        font-size: 16px;
    }
    hr {
        border: 1px dashed gray;
    }
    p {
        color: gray;
        font: 20px '楷体';
        line-height: 36px;
        margin-bottom: 30px;
    }
    .a1 {
        display: block;
        text-align: center;
        margin-bottom: 30px;
    }
    .books-detail {
        text-align: center;
    }
}
</style>