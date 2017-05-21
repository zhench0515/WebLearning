<template>
    <div class="home">
        <!--导航区-->
        <headerbar></headerbar>
    
        <!--轮播区-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!--<div class="swiper-slide" v-for="item in homedata">
                                                            <router-link :to="{name:'detail',params:{id:item}}">
                                                                <img :src="item.src" width='360' height="420">
                                                            </router-link>
                                                        </div>-->
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[0]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1511/thread/2_1_b33e68520cea02b.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[1]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1511/thread/2_1_19e71ef13e00ee7.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[2]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1601/thread/2_1_fa6ac4d092dbc13.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[3]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1510/thread/2_1_6bda5e209a3e587.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[4]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1512/thread/2_1_2015336aca52d93.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[5]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1510/thread/2_1_edb4089f0358e6c.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
    
                <div class="swiper-slide">
                    <router-link :to="{name:'detail',params:{id:homedata[6]}}">
                        <img src='https://www.javascriptcn.com/attachment/thumb/mini/1510/thread/2_1_202e0ffcc3385b1.jpg'
                             width='360'
                             height="420">
                    </router-link>
                </div>
            </div>
            <!-- 如果需要分页器:圆点 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    
        <!--侧拉菜单部分-->
        <sidebar></sidebar>
    
        <!--内容区-->
        <home-content></home-content>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HomeContent from './homes/home-content'
import Headerbar from '../details/Header'
import Sidebar from '../details/sidebar'

export default {
    data() {
        return {
            homedata: "",
        }
    },
    components: {
        HomeContent,
        Headerbar,
        Sidebar
    },
    created() {
        this.$axios.get('/api/books')
            .then((res) => {
                this.homedata = res.data.data.lunbo
            })
            .catch((error) => {
                console.log(error)
            })
    },
    mounted() {
        // window.onload = function () {
        var mySwiper = new Swiper('.swiper-container', {
            // 垂直滚动
            // direction: 'vertical',
            // 水平滚动,默认
            // direction:'horizontal',
            loop: true,//循环播放
            autoplay: 2000,//可选选项，自动滑动，2秒切换一次
            speed: 1000,//图片滑动时间1秒
            // 如果需要分页器
            pagination: '.swiper-pagination',
            //样式：fraction：1/3，progress:进度条，bullets:圆点,custom:没有
            paginationType: 'bullets',
            paginationClickable: true,
            // paginationBulletRender: function (swiper, index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // },
            initialSlide: 3,//初始化后从第四张开始播放

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
            autoplayDisableOnInteraction: false,

            effect: 'coverflow',//t图片以3D流的样式切换
            coverflow: {
                rotate: 10,
                stretch: 10,
                depth: 60,
                modifier: 2,
                slideShadows: true
            },
            slidesPerView: 3,//预览3张
            centeredSlides: true,
            // paginationClickable: true, //分页器可以点击
            autoHeight: true, //高度随内容变化
            // spaceBetween : 10,
            // grabCursor: true//轮播设置小手
        })
    }
}
</script>

<style lang="less" scoped>
.home {
    overflow: hidden;
}

.swiper-container {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    width: 60vw;
    height: 28vw; // padding-top: 30px;
    text-align: center;
    margin-bottom: 30px;
    /*background-color: lightskyblue;*/
    position: relative; // .swiper-wrapper{
    //     text-align: center;
    // }
    .swiper-pagination {
        display: inline-block;
        margin-right: 5vw;
        color: black;
        font-size: 24px;
        .swiper-pagination-bullet {
            height: 60px;
            width: 60px;
        }
    }
}
</style>