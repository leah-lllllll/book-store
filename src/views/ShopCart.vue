<template>
    <div class="shopcart">
        <table id="tb" v->
            <tr id="tr1">
                <td colspan="2">商品</td>
                <td>单价</td>
                <td>数量</td>
                <td>小计</td>
                <td>操作</td>
            </tr>
            <tr v-for="cart,index in carts" :key="cart.id" id="items">
                <td><img :src="'http://images.amazon.com/images/' + cart.image_url"></td>
                <td><span>{{cart.name}}</span></td>
                <td>{{cart.price}}</td>
                <td>
                    <Numbtn :sp="cart"></Numbtn>
                </td>
                <td><span>{{cart.price*cart.num}}</span></td>
                <td><button @click="remove(index,cart)">删除</button></td>
            </tr>
        </table>
        <div id="bottom"> 
            总价：{{total}}，数量：{{count}}
            <button @click="gotolink" class="btn btn-success">结算</button>
        </div>
    </div>
</template>
<style src="../style/shopcart.css" scoped>

</style>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Numbtn from '../components/numbtn.vue'
//import axios from 'axios'
export default {
    components: {//组件
    Numbtn
  },
   data:function(){
        return{
          // response:{}
        
        }
    },
    computed:{ 
        ...mapState(['carts']),
        ...mapGetters(['total','count']),
        
    },
    methods:{
        ...mapMutations(['remove']),
        gotolink(){
          //指定跳转地址
          if(this.total!=0){
          this.$router.push({
            path : '/pay',
            query:{
                id : this.total
            }

          });
          }else{
            alert("请选择至少一本书")
          }
          
        },

    },
    }
</script>