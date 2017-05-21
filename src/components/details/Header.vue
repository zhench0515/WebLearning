<template>
    <nav class="heade">
        <!--导航栏标题-->
        <!--<div class="container-fluid">-->
        <div class="headertitle option hidden-xs">前端网</div>
        <!--导航栏选项-->
        <div class="nav-option option hidden-xs">
            <ul>
                <li>
                    <router-link :to="{name:'home'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{name:'html'}">HTML/CSS</router-link>
                </li>
                <li>
                    <router-link :to="{name:'javascript'}">JavaScript</router-link>
                </li>
                <!--带有下拉菜单的导航栏选项-->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown">其他
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link :to="{name:'jquery'}">JQuery</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'nodejs'}">Nodejs</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'ajax'}">Ajax</router-link>
                        </li>
                        <div class="divider"></div>
                        <li>
                            <router-link :to="{name:'others'}">其他</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{name:'about'}">论坛</router-link>
                </li>
    
            </ul>
        </div>
        <!--输入框内容-->
        <div class='option hidden-md visible-lg option-input'>
            <form class="navbar-form"
                  role="search">
                <div class="form-group">
                    <input type="text"
                           class="form-control"
                           placeholder="Search">
                </div>
                <button type="submit"
                        class="btn btn-primary">提交</button>
            </form>
        </div>
        <!--登录注册信息-->
        <div class="right option hidden-xs hidden-sm">
            <span><router-link :to="{name:'register'}"><i class="fa fa-user fa-x"></i> 注册</router-link></span>
            <span><router-link :to="{name:'login'}"><i class="fa fa-sign-in fa-x"></i> 登录</router-link></span>
        </div>
        <!--</div>-->
    
        <!--面包菜单-->
        <div class="crumbs visible-xs">
            <!--<div class='crumbs-title'>前端网</div>-->
            <div class="crumbs-icon">
                <a><i class="fa fa-bars fa-2x"></i></a>
                <!--<div class="crumbs-title"></div>-->
            </div>
            <div class="dropdown-content">
                <ul>
                    <li><router-link :to="{name:'home'}">首页</router-link></li>
                    <li><router-link :to="{path:'html'}">HTML/CSS</router-link></li>
                    <li><router-link :to="{name:'javascript'}">JavaScript</router-link></li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown">其他 
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-list">
                            <li>
                                <router-link :to="{name:'jquery'}">JQuery</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'nodejs'}">Nodejs</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'ajax'}">Ajax</router-link>
                            </li>
                            <div class="divider"></div>
                            <li>
                                <router-link :to="{name:'others'}">其他</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--小屏幕标题-->
        <div class="crumbs-title visible-xs">前端网</div>
    </nav>
</template>

<script>
import $ from '../../assets/JS/jquery.js';
// import '../../js/header.js'
// document.querySelector('')
export default {

}

// $("nav").click(function () { alert('Hello') })
</script>

<style lang="less">
.heade {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    background-color: #555;
    height: 8vh;
    line-height: 8vh; // overflow: hidden;
    margin-bottom: 30px;
}

.option {
    margin-left: 15px;
    flex: 1 1 auto;
    text-align: center;
}

.option-input {
    text-align: right;
}

.nav-option>ul {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    li {
        // width: 100px;
        // padding: 0 15px;
        margin-left: 15px;
        list-style: none;
        font-size: 2rem;
        cursor: pointer;
        text-align: center;
        a {
            display: inline-block;
            color: #97FFFF;
            text-decoration: none;
            height: 100%;
            width:100%;
            padding:0 15px;
        }
        a.router-link-active{
            background-color: #FF6347;
            color:whitesmoke;
        }
        ul {
            background-color: #555;
            line-height: 45px;
            background-color: #555;
            li {
                // display: inline-block;
                width: 100%;
                margin: 0;
                // padding:0 15px;
                a {
                    display: inline-block;
                    width: 100%; // height: 100%;
                    font: 1.2rem;
                    text-align: left;
                    padding: 0 15px;
                    color: #97FFFF;
                }
            }
        }
    }
}

.nav-option>ul>li>ul>li>a:hover {
    background-color: #97FFFF;
    color: #555;
}

.nav-option>ul>li.active {
    background-color: #FF6347;
    a {
        color: whitesmoke
    }
}

.nav-option>ul>li:hover {
    background-color: #FF6347;
    transition-duration: 1.5s;
    a {
        color: whitesmoke;
    }
}

.navbar-right>span {
    display: inline-block;
}

.headertitle {
    font: 3rem '楷体';
    color: aqua;
    line-height: 8vh;
}

.option>form {
    margin: 0;
}

.right {
    margin-right: 15px;
    text-align: right;
    span {
        margin: 0 5px;
        a {
            font-size: 2rem;
            color: #97FFFF;
            i {
                color: #97FFFF;
            }
        }
    }
}

.dropdown-menu {
    background-color: #FF6347;
    min-width: 300px;
}

.dropdown-menu>p {
    height: 2rem;
    width: 100%;
}

.divider {
    width: 100%;
}

.crumbs {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 20%; // text-align: center;
    padding: 0 15px;
    text-align: left;
    line-height: 8vh;
    .crumbs-icon>a {
        display: inline-block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        i {
            display: block;
            height: 100%;
            width: 100%;
            color: aqua;
            line-height: 8vh;
        }
    }
    .crumbs-icon>a:hover {
        background-color: #FF6347;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        z-index: 99999;
        background-color: #555;
        min-width: 150px;
        box-shadow: 0px 8px 16px 3px rgba(0, 0, 0, 0.2);
        text-align: left;
        line-height: 45px;

        ul>li {
            list-style: none;
            width: 100%;
            a {
                display: inline-block;
                width: 100%;
                padding: 0 15px;
                font-size: 2rem;
                color: #97FFFF;
            }
            position: relative;
            ul {
                left: 150px;
                top: -45px;
                width: 240px;
                right: 0;
                background-color: #555;
                li {
                    margin-bottom: 10px;
                }
            }
        }
        ul>li:hover {
            background-color: whitesmoke;
            a {
                color: lightseagreen;
            }
        }
    }
}

.crumbs:hover .dropdown-content {
    display: block;
}

.crumbs-title {
    width: 60%;
    text-align: center;
    font-size: 2.5rem;
    color: aqua;
}

</style>