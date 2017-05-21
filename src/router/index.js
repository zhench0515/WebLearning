import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/details/Header.vue'

Vue.use(Router)
import Home from '../components/pages/Home.vue'
import Html from '../components/pages/Html.vue'
import Javascript from '../components/pages/Javascript.vue'
import About from '../components/pages/About.vue'
import Detail from '../components/details/details.vue'
import Ajax from '../components/pages/others/ajax.vue'
import JQuery from '../components/pages/others/jquery.vue'
import Nodejs from '../components/pages/others/nodejs.vue'
import Others from '../components/pages/others/others.vue'
import Register from '../components/pages/register.vue'
import Login from '../components/pages/login.vue'

// Javascript分页部分
import Page1 from '../components/pages/javascript/js-page1.vue'
import Page2 from '../components/pages/javascript/js-page2.vue'
import Page3 from '../components/pages/javascript/js-page3.vue'

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    // { path: '/about', name: 'about', component: About },
    { path: '/html', name: 'html', component: Html },
    { path: '/javascript', redirect: '/javascript/page1' },
    {
      path: '/javascript',
      name: 'javascript',
      component: Javascript,
      children: [
        { path: 'page1', name: 'page1', component: Page1 },
        { path: 'page2', name: 'page2', component: Page2 },
        { path: 'page3', name: 'page3', component: Page3 }
      ]
    },
    { path: '/about', name: 'about', component: About },
    { path: '/others', name: 'others', component: Others },
    { path: '/detail/:id', name: 'detail', component: Detail },
    { path: '/ajax', name: 'ajax', component: Ajax },
    { path: '/jquery', name: 'jquery', component: JQuery },
    { path: '/nodejs', name: 'nodejs', component: Nodejs },

    // 注册部分
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login }
  ]
})
