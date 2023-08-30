<template>
    <div id=form rule="loginRules">
            <span>用户名</span>
            <input v-model="name" type="tel" title="请输入用户名"  placeholder="请输入用户名" required autofocus><br/>
            <span>密码</span>
            <input v-model="pwd" type="password" placeholder="请输入密码"  required><br/>
            <button @click="register" >同意协议并注册</button><br/>
            <img class="ftimg" src="../assets/注册.png">
    </div>
</template>
<style src="../style/init.css" scoped>

</style>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios 
export default {
    data:function(){
        return{
            name:"",
            pwd:"",
        }
    },
    methods:{
        /*register:function(){
            var user={name:this.name,pwd:this.pwd}
            this.$store.commit('queryuser',user)
            var mess=this.$store.state.mess
            if(user.pwd == "")
                alert("用户名不能为空")
            else if(mess=='f'){
                this.$store.commit('reg',user)
                alert("注册成功，将为你自动登录")
                sessionStorage.username=this.name
                this.$router.replace("/");//避免后退
            }
            else{
                alert("用户名已存在")
            }
        },*/
        register:function(){
           var s_this = this;
           var router = this.$router
           //1 超级管理员 2 普通用户
           var role = 2;
           axios.post('/regist', { username: s_this.name, password: s_this.pwd, role: role}).then(function(res){
            console.log(res)
            var user={name:s_this.name,pwd:s_this.pwd};
            var mes = res
             if(user.pwd == "")
                alert("用户名不能为空")
            else if(mes.data.status=='0'){
                //s_this.$store.commit('reg',user)
                alert("注册成功，将为你自动登录")
                sessionStorage.username=user.name
                router.replace('/');//避免后退
                //s_this.click_change()
            }
            else{
                alert("用户名已存在")
            }
            }).catch(function (error) { // 请求失败处理
            console.log(error);
            });
           /* fetch('http://47.101.69.44:5000/regist',{
            method: 'post',
            body:{ username: this.name, password: this.pwd , role: '1'} ,
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
			// 第一个 then 接受到的是请求头的相关信息
			.then(res=>{
				console.log(res)  //拿到的是一个状态码
				//用json格式读出来，也可以改为text，得到的就是一个text字符串，但是要做一个json解析，所以极少用text格式
				return res.json()
			})
			//第二个.then拿到的是从后端请求回来的真正的数据
			//想要获取响应数据，需在第一个then中将响应数据转为json再返回给第二个then，在第二个then中去获取值
			.then(res=>{
				console.log(res)
			})
			// 请求错误时执行
			.catch(err=>{
				console.log(err)
			})*/
        },
            //console.log(res)
           /* const { data: res }= this.$axios.post('/regist', {
            username: this.name,
            password: this.pwd,
            }).then(function(res){
            console.log(res.data)
            })*/

           // var dataObj = res.data;
           // var dataJson = JSON.stringify(dataObj);
           // var dome = JSON.parse(res.data.Json)//经典操作，这是对于后端传过来的json对象进行对象化

            //alert(mes.key)
            //console.log(mes.key)
            //var mes = eval(res)
            //由JSON字符串转换为JSON对象
            //var mes = eval('(' + res.data + ')');
           // console.log(dataJson[status])
            //this.$store.commit('queryuser',user)
           // var mess=this.$store.state.mess
          /*  var user={name:this.name,pwd:this.pwd};
            var mes = res
            if(user.pwd == "")
                alert("用户名不能为空")
            else if(mes.status=='0'){
                this.$store.commit('reg',user)
                alert("注册成功，将为你自动登录")
                sessionStorage.username=this.name
                this.$router.replace("/");//避免后退
            }
            else{
                alert("用户名已存在")
            }*/
           
    }
    }
</script>