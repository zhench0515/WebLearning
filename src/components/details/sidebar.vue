<template>
    <div class="sidebar">
        <article v-show="isshow">
            <h3>欢迎访问前端网</h3>
            <p>您是第
                <mark>0</mark>位访问者</p>
            <hr>
            <h3 class="date">日期</h3>
            <span>{{year}}-{{month}}-{{date}}&emsp;{{h}}:{{m}}:{{s}}&emsp;{{week}}</span>
            <hr>
            <h3>天气情况</h3>
            <span><img src="#" width='69' height='69'></span>
            <span>{{weather.temperature}}°C</span>
            <span>{{weather.description}}</span>
            
        </article>
        <button class="btn1 btn btn-info"
                @click="showbtn">展开</button>
        <button class="btn2 btn btn-info"
                @click="hiddenbtn">隐藏</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isshow: false,
            // 日期变量
            year: '',
            month: '',
            date: '',
            h: '',
            m: '',
            s: '',
            week: '',
            // 天气
            weather:{},
            // str:''
        }
    },
    created() {
        // 记录浏览器访问者
        $.get(
            '/counter',
            null,
            (data) => {
                $('mark').text(data);
            }
        )
        // 提取天气情况
        this.$axios.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=34.72476&longitude=113.76655')
            .then((res)=>{
                this.weather=res.data
                // this.str='https://fuss10.elemecdn.com/'+res.data.image_hash.slice(0,1)+'/'+res.data.image_hash.image_hash.slice(1,3)+'/'+res.data.image_hash.image_hash.slice(3)+'.png?imageMogr/thumbnail/!69x69r/gravity/Center/crop/69x69/';
            })
            // console.log(this.weather)
        // 生成年月日：
        var today = new Date();
        this.year = today.getFullYear();
        this.month = today.getMonth() + 1;
        this.month = this.month < 10 ? "0" + this.month : this.month;
        this.date = today.getDate();
        this.date = this.date < 10 ? "0" + this.date : this.date;

        this.week = new Date().getDay()
        switch (this.week) {
            case 0:
                this.week = "星期日";
                break;
            case 1:
                this.week = "星期一";
                break;
            case 2:
                this.week = "星期二";
                break;
            case 3:
                this.week = "星期三";
                break;
            case 4:
                this.week = "星期四";
                break;
            case 5:
                this.week = "星期五";
                break;
            case 6:
                this.week = "星期六";
                break;
            default: break;
        }
        // 生成时分秒
        setInterval(() => {
            var now = new Date();
            this.h = now.getHours();
            this.h = this.h < 10 ? "0" + this.h : this.h;
            this.m = now.getMinutes();
            this.m = this.m < 10 ? "0" + this.m : this.m;
            this.s = now.getSeconds();
            this.s = this.s < 10 ? "0" + this.s : this.s;
        }, 1000);
    },
    methods: {
        showbtn() {
            this.isshow = true;
            var btns = document.getElementsByClassName('btn-info')
            btns[0].style.left = "300px";
            btns[1].style.left = "300px"
        },
        hiddenbtn() {
            this.isshow = false;
            var btns = document.getElementsByClassName('btn-info')
            btns[0].style.left = "0";
            btns[1].style.left = "0"
        },
    }
}
</script>

<style lang="less" scoped>
.sidebar {
    position: fixed;
    z-index: 9999;
    top: 120px;
    width: 300px;
    background-color: lightsteelblue;
    article {
        width: 100%;
        height: 400px;
        h3 {
            text-align: center;
            color: orangered;
        }
        p {
            text-align: center;
            font-size: 20px;
        }
        span {
            display: inline-block;
            width:100%;
            font-size: 18px;
            text-align: center;
        }
    }
}

button {
    display: block;
    position: absolute;
    z-index: 666;
}

.btn1 {
    top: 0px;
}

.btn2 {
    top: 60px;
}
</style>