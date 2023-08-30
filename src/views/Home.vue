<template>
<div id="Home">
  <!-- 登录通栏 -->
  <div id="head">
    <div id="head-left">
      守心一处&nbsp;&nbsp;止步此间
    </div>
    <div class="head-right">
      <ul> 
        <li >{{username}}<span id="a" @click="init()">{{message}}</span></li>
      </ul>
    </div>
  </div>
  <!-- logo及搜索 -->
  <div id="logo">
    <img alt="booklogo" src="../assets/logo.png">
      <form action="">
        <input v-model="bookname" type="text" id="searchinput" placeholder="请输入书名">
        <input @click="query()" type="button" value="搜索" id="formbutton">
      </form>
  </div>
  <!--导航  -->
  <div id="nav">
    <table>
      <tr>
        <td><router-link to="/">首页</router-link></td>
        <td><router-link to="pageshow">所有商品</router-link></td>
        <td><router-link to="shopcart">购物车</router-link></td>
      </tr>
    </table>
  </div>
  <router-view/>
</div>
</template>
<style src="../style/home.css" scoped>

</style>
<script>
export default {
  data:function(){
    return{
      username:'',
      bookname:'',
      message:'登录/注册',
    }
  },
  mounted:function(){
        if(sessionStorage.username){
            this.username="书友"+sessionStorage.username+" /"
            this.message="退出登录"
        }
    },
    methods:{
      query:function(){
        //if(this.bookname.trim()){
          
          this.$router.push({name:'pageshow',params:{bookname:this.bookname}})
        //}
      },
      init:function(){
        if(sessionStorage.username){//已登录
            sessionStorage.removeItem("username")//注销登录
        }
        this.$router.push({path:'/init'})
      }
    },
}
</script>