<template>
    <footer>
        <div class="dropdown">
            <h3>前端相关网站</h3>
            <div class="dropdown-content">
                <a href="https://www.javascriptcn.com/index.php?m=bbs&c=forumlist"
                 title="JavaScript中文网" target="_blank">
                    <img src="https://www.javascriptcn.com/attachment/background/fc039cbd932d553.png"
                         width="150"
                         height="60">
                </a>
                <a href="http://www.imooc.com/course/landingpagephp?from=phpkecheng"
                 title="慕课网" target="_blank">
                    <img src="http://www.imooc.com/static/img/index/logo.png?t=1.1" width="150" height="60">
                </a>
                <a href="https://www.tslang.cn/" style="color:white;width:150px;height:80px;font-size:24px"
                 title="TypeScript中文网" target="_blank">
                    TypeScript
                </a>
                <a href="https://angularjs.org/" title="Angular中文网" target="_blank">
                    <img src="http://www.apjs.net/img/AngularJS.jpg" width="150" height="60">
                </a>
                <a href="http://www.yyyweb.com/" title="前端里网站" target="_blank">
                    <img src="http://www.yyyweb.com/wp-content/themes/dream/images/logo.png" width="150" height="60">
                </a>
                <a href="https://facebook.github.io/react/" title="React官网" target="_blank">
                    <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1494919205&di=63a922acb0ad2a018885f0773c6b520a&src=http://www.wanhuajing.com/pic/1604/2611/2952599/4_578_270.jpg" 
                    width="150" height="60">
                </a>
            </div>
        </div>
    </footer>
</template>
<script>

</script>

<style lang="less" scoped>
footer{
     margin-top: 80px;
     width:100%;
     text-align: center;
     position: fixed;
     bottom: 0;
}
.dropdown {
    position: relative;
    display: block;
    height: 120px;
    background-color: #202020;
    h3 {
        margin: 0;
        height: 100%;
        color: whitesmoke;
        line-height: 120px;
        color:#959595;
    }
}

.dropdown-content {
    display: none;
    position: absolute;
    bottom:120px;
    background-color:#202020;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 15px;
}

.dropdown:hover .dropdown-content {
    display: block;
    // height:120px;
    animation: yundong 0.5s linear;
    line-height:80px;
    display: flex;
    justify-content: space-around;
    a {
        display: inline-block;
        height:80px;
        text-decoration: none;
        background-color: lightseagreen;
        img{
            padding:0 15px;
        }
    }
}
@keyframes yundong {
    from{
        height:0px;
    }
    to{
        height:120px;
    }
}
</style>