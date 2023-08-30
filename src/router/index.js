import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {path:'/',component:()=>import('../views/Main.vue')},
      {path:'/pageshow',name:'pageshow',component:()=>import('../views/PageShow.vue'),},
      {path:'/shopcart',component:()=>import('../views/ShopCart.vue')},
    ]
  },
  {
    path: '/init',
    name: 'init',
    component:() => import('../views/Init.vue'),
    children:[
      {path:'/',component:()=>import('../views/Login.vue')},
      {path:'reg',component:()=>import('../views/Reg.vue')},
    ]
  },
  {
    path: '/pay',
    name: 'pay',
    component:() => import('../views/pay.vue'),
    children:[
      {path:'/',component:()=>import('../views/Login.vue')},
      {path:'reg',component:()=>import('../views/Reg.vue')},
      {path:'/shopcart',component:()=>import('../views/ShopCart.vue')}
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component:() => import('../views/manage.vue'),
    children:[
      {path:'/',component:()=>import('../views/Login.vue')},
      {path:'reg',component:()=>import('../views/Reg.vue')},
      {path:'/pay',component:()=>import('../views/pay.vue')}
    ]
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to,from,next ){//检查登录状态
     if(to.path.indexOf('init')>=0  || to.path=='/' ||to.path=='/pageshow') next()
     else{
        if(sessionStorage.username) next()
        else {
           next('/init')
        }
     }
})

export default router
