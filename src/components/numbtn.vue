<template>
    <div>
        <button @click="num(sp,-1)">-</button>
        <span>{{sp.num}}</span>
        <button @click="num(sp,1)">+</button>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios 
export default {
    name:'numbtn',
    props:{
        sp:{},
    },
    methods:{
        num:function(sp,x){
            if(x==-1){
                if(sp.num<=0) 
                {   
                    alert(sp.book_id)
                    axios.post('/del_cart', { username: sessionStorage.username, book_id: sp.book_id}).then((res)=>{
                    console.log(res)
                    }).catch((error) =>  {console.log(error);});
                    return sp.num=0;
                }
                else {
                    return sp.num--;
                    }

            }
            if(x==1){
                if(sp.num>=sp.stock) return sp.num=sp.stock;
                else return sp.num++;
            }
        },
    },
    
}
</script>
<style scoped>
span{
    width: 30px;
    display: inline-block;
}
</style>