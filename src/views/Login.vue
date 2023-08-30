<template>
    <div id=form rule="loginRules">
            <span>用户名</span>
            <input v-model="name"  placeholder="请输入用户名" required><br>
            <span>密码</span>
            <input v-model="pwd" type="password"  placeholder="请输入密码" required><br>
            <button @click="login()" >登录</button><br>
            <img class="ftimg" src="../assets/登录.png" alt="">
    </div>



</template>
<style src="../style/init.css" scoped>

</style>


<script>
// 全局注册 axios
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios // 使用 this.$axios.get()
//import {request} from "../request.js"
// 在某个组件中使用，组件中导入axios
export default {
    data:function(){
        return{
            name:"",
            pwd:"",
        }
    },
    /*created() {
      request({
        url:'/login/'
      }).then(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })
    },*/
   /* created(){
          /*axios.get('/login')
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                    alert("获取成功")
                    console.log(response.data)
                    alert(response)
                    this.oftenGoods=response.data
                })
                //获取失败
                .catch(error=>{
                 alert(error.response)
                
            })*/
   /*this.axios({
		method: 'post',
		url: '/login',
		data:{ username: this.name, password: this.pwd },
	})
	.then((response) => {
        console.log(response)
        alert("get")
        alert(response.data)
	})
	.catch((error) => {
		console.log(error)
        alert("error")
        alert(error)
	})
    },*/

    methods:{
       /* login:function(){
            var user={name:this.name,pwd:this.pwd}
            this.$store.commit('queryuser',user)
            var mess=this.$store.state.mess
            if(mess=='f'){
                alert("用户不存在")
                return
            }
            else if(this.pwd==mess && this.name != "xx"){
                sessionStorage.username=this.name
                alert("欢迎━(*｀∀´*)ノ亻!")
                this.$router.replace("/")//避免后退
                this.postInfo()
            } else if(this.pwd==mess && this.name == "xx"){
                sessionStorage.username=this.name
                alert("管理员上线啦━(*｀∀´*)ノ亻!")
                this.$router.replace("/manage")//避免后退
                this.postInfo()
            }else{
                alert("用户名或密码错误")
                alert(this.pwd)
            }
        },*/
    /*test: function(){
        this.get_mes*/
        /*async*/login:function () {
            //var res;
            var user={name:this.name,pwd:this.pwd}
            var s_this = this
            axios.post('/login', { username: s_this.name, password: s_this.pwd }).then(function(res){
            console.log(res)
            if(res.data.status=='-1'){
                alert("用户不存在")
                return
            }
            else if(res.data.status=='0'){
                sessionStorage.username=user.name
                alert("欢迎━(*｀∀´*)ノ亻!")
                s_this.get_status()
               // router.replace("/")//避免后退
                //s_this.postInfo()
               // router.replace("/")
            }
            /*} else if(res.data.status=='-2'){
                sessionStorage.username=user.name
                alert("管理员上线啦━(*｀∀´*)ノ亻!")
                this.$router.replace("/manage")//避免后退
            }*/else{
                alert("用户名或密码错误")
               // alert(res.status.toString)

            }
            }).catch(function (error) {console.log(error);});
           // console.log(res)
           // axios.delete("url='/login")
            //var user={name:this.name,pwd:this.pwd}
           // this.$store.commit('queryuser',user)
           // var mess=this.$store.state.mess
           //alert("开始验证")
          // this.get_status()
       
            
    },
    get_status:function(){
        var router = this.$router
        axios.post('/login/get_user_status', { username: this.name }).then(function(res){
                console.log(res)
                if(res.data.data.role == "1"){
                    router.push("/manage")
                }
                else{
                    router.push("/")
                    axios.post('/get_cart', { username: sessionStorage.username}).then((res)=>{
                    console.log(res)
                    let response = res.data.data
                    response.forEach(element => {
                        this.$store.commit('intailCart',element)
                    });
               // alert("添加成功")
                    }).catch((error) =>  {console.log(error);});
                }
                })
            
    }
    }
}
</script>