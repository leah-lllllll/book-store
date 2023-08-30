<template>
<div id="app1">


    <div id="head">
    <div id="head-left">
      守心一处&nbsp;&nbsp;止步此间
    </div>
    </div>

        <div class="head-right">
            <ul>
        <li >{{username}}<span id="a" @click="init()">{{message}}</span></li>
            </ul>
        </div>

  <!-- logo及搜索 -->
  <div id="logo">
    <img alt="booklogo" src="../assets/logo.png">
      <form action="">
        <!--input v-model="bookname" type="text" id="searchinput" placeholder="请输入书名"-->
        <!--input @click="query()" type="button" value="搜索" id="formbutton"-->
      </form>
  </div>

    <div id="left">
    <span>地区筛查:</span>
    </div>
    <div id="location_table">
    <table border="1">
        <tr>
            <th v-for="item in l_tableHeader" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in location" :key="(item,index)">
            <td > {{index}} </td>
            <td > {{item.address}} </td>
            <td > {{item.ip}} </td>
            <td > {{item.times}} </td>
            <td > {{item.user_id}} </td>
            <td>
                <button v-on:click="delDetailCol_l(index)">清空</button>
                 <!--el-tooltip effect="light" content="删除" placement="top-start">
                    <el-button id="delDetailCol" type="danger" size="mini" icon="el-icon-delete" @@click="delDetailCol(scope.row,scope.$index)"></el-button>
                </el-tooltip-->

 
            </td>
        </tr>
    </table>
    </div>

    <div id="order_left">
    <span>订单金额统计:</span>
    </div>
    <div id="order_table">
    <table border="1">
        <tr>
            <th v-for="item in o_tableHeader" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in order" :key="(item,index)">
            <td > {{index}} </td>
            <td > {{item.month}} </td>
            <td > {{item.sum}} </td>
            <td>
                <button v-on:click="delDetailCol_o(index)">清空</button>
                 <!--el-tooltip effect="light" content="删除" placement="top-start">
                    <el-button id="delDetailCol" type="danger" size="mini" icon="el-icon-delete" @@click="delDetailCol(scope.row,scope.$index)"></el-button>
                </el-tooltip-->

 
            </td>
        </tr>
    </table>
    </div>

    <div id="urls_left">
    <span>url筛选:</span>
    </div>
    <div id="urls_table">
    <table border="1">
        <tr>
            <th v-for="item in u_tableHeader" :key="item">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in urls" :key="(item,index)">
            <td > {{index}} </td>
            <td > {{item.times}} </td>
            <td > {{item.url}} </td>
            <td>
                <button v-on:click="delDetailCol_u(index)">清空</button>
                 <!--el-tooltip effect="light" content="删除" placement="top-start">
                    <el-button id="delDetailCol" type="danger" size="mini" icon="el-icon-delete" @@click="delDetailCol(scope.row,scope.$index)"></el-button>
                </el-tooltip-->

 
            </td>
        </tr>
    </table>
    <!--p>交易金额：{{currency}}{{totalPrice()}}</p-->
    </div>
    <!--底部  -->
            <div id="footer">
                <p>
                    &nbsp;&nbsp;&nbsp;止间图书销售网站<br/>
                    参考网站：<a href="https://www.kongfz.com/">孔夫子旧书网</a>
                </p>
    </div>
</div>

</template>

 
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios
import {dataList} from "../data/manage.js";
    export default ({
        el:'#app1',
        data:function(){
            return{
            l_tableHeader:["序号"," 地址 "," ip地址 "," 登录次数 ","用户id","操作"],
            o_tableHeader:["序号"," 月份 "," 总价 ","操作"],
            u_tableHeader:["序号"," 登录次数 "," url次数 ","操作"],
            dat:[],
            location:{},
            order:{},
            urls:{},
            username:'',
            currency:"￥"
            }
        },
        computed:{
        dataList:() => dataList,
         },
        mounted:function(){
            this.goodshow()
            if(sessionStorage.username){
            this.username="管理员："+sessionStorage.username+" /"
            this.message="退出登录"
        }
        },
        created:function(){
            axios.get('/admin/get_satistics')
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                   // alert("获取成功")
                    console.log(response.data)
                    //alert(response)
                    //this.oftenGoods=response.data
                    //this.books2 = response.data.data
                    this.location = response.data.locations;
                    this.order = response.data.orders;
                    this.urls = response.data.urls;
                })
                //获取失败
                .catch(error=>{
                 console.log(error.response)
                
            })

        },
     
        methods:{
           /* reduce(index){
                if(this.dat[index]. >= 1) return this.dat[index].quantity--
            },
            add(index){
                return this.dat[index].quantity++
            },*/
            totalPrice(){
                let da = this.dat.map(function (item){
                    return item['price']    
                }).reduce(function (preVales,n){
                    return preVales += n
                },0);
                return da
 
            },
            goodshow:function(){
                dataList.filter(item =>{
                if (item.good==1) this.dat.push({...item})
            })
        },
        // this.manageCheckPlanDetailTableData 表格数据数组
        delDetailCol_l(index) {
             this.location.splice(index, 1)
             alert('删除成功！');
        },
        delDetailCol_o(index) {
             this.order.splice(index, 1)
             alert('删除成功！');
        },
         delDetailCol_u(index) {
             this.urls.splice(index, 1)
             alert('删除成功！');
        },
        init:function(){
        if(sessionStorage.username){//已登录
            sessionStorage.removeItem("username")//注销登录
        }
        this.$router.push({path:'/init'})
      }

        }
    })
</script>


<style src="../style/manage.css" scoped>

</style>

