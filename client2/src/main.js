import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';

import axios from './http';
import store from './store';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$axios=axios;

import Register from './components/Register.vue';
import Index from './components/index.vue';
import Notfound from './components/notfound.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import InfoShow from './components/InfoShow.vue';
import FundList from './components/FundList.vue';
import Comment from './components/Comment.vue';
import Mood from './components/Mood.vue';
const routes=[
  {
    path:'/register',component:Register
  },
  {
    path:'/index',component:Index,children:
    [
      {
        path:'',component:Home
      },
      {
        path:'/home',component:Home
      },
      {
        path:'/infoshow',component:InfoShow
      },
      {
        path:'/fundlist',component:FundList
      },
      {
        path:'/commentshow',component:Comment
      },
      {
        path:'/moodshow',component:Mood
      }
    ]
  },
  {
    path:'*',component:Notfound
  },
  {
    path:'/login',component:Login
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

//路由守卫
router.beforeEach((to,from,next)=>
{
  const isLogin=localStorage.eleToken ? true :false;
  if(to.path=='/login'||to.path=='/register')
  {
    next();
  }else
  {
    isLogin ? next() :next('/login');
  }
})
export default router;

new Vue({
  render: h => h(App),router,store
}).$mount('#app')

