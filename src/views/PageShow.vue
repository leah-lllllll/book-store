<template>
    <div id="page">
        <div id="query">{{num}}条结果</div>
        <div id="main">
            <div id="left">
                <span>分类筛选:</span>
                <div class="typeitem">
                    <button   @click="querytype('Philosophy Religion')">哲学宗教学</button>
                    <button   @click="querytype('Sciences')">科学类</button>
                    <button   @click="querytype('Political Science Law')">政治法律学</button>
                    <button   @click="querytype('Military Science')">军事学</button>
                    <button   @click="querytype('Economics')">经济学</button>
                    <button   @click="querytype('Culture Education and Sports')">文化教育体育类</button>
                    <button   @click="querytype('History')">历史学</button>
                    <button   @click="querytype('Medicine Health Care')">医学卫生类</button>
                </div>
            </div>
            <div id="right">
                <!-- 若搜索内容为空则输出全部书籍 -->
                <template v-if="tf"><Bookitems :books="books1==null?books:books1" :mess="mess" @change="onchange"></Bookitems></template>
                <template v-if="!tf"><Detail  :book="book" @change="onchange"></Detail></template>
            </div>
        </div>
    </div>
</template>
<style src="../style/pageshow.css" scoped>
</style>
<script>
//import {books} from "../data/books";
//import Bookitems from '../components/Bookitems.vue';
import Detail from '../components/Detail.vue'
import axios from 'axios'
import Vue from 'vue'
import Bookitems from '../components/Bookitems.vue'
Vue.prototype.$axios = axios 
export default {
  name: 'PageShow',
  components: {//组件
    Detail,
    Bookitems,
  },
    data:function(){
        return{
            bookname:this.$route.params.bookname?this.$route.params.bookname:null,
            mess:'',
            book:{},
            tem_book:{},
            tf:true,
            books1:null,
        }
    },
    computed:{
       // books:() => this.books,
       books: {
        get: function(){
            return this.tem_book; // 在这里把临时对象的值通过计算属性赋值给页面中用到的对象
        }
       },
        num(){
            return this.books1==null?this.books.length:this.books1.length
        }
    },
    mounted:function(){
        this.query()
    },
    created:function(){
    //this.cancelRequest();
    axios.post('/get_books', { username: sessionStorage.username})
	.then((response) => {
        console.log(response)
        this.tem_book = response.data.all_books;
        this.tem_book = this.tem_book.concat(response.data.cus_books)
        this.tem_book = this.tem_book.concat(response.data.tops_books)
        /*for (var i = 0; i < this.response.data.data.index; i++) {
            //7+18=25
            if(this.response.data.data[i].category == '2'){
                this.tem_book[i].category = "科学类"
            }
            this.tem_book[i] = response.data.data[i];
            }*/
	})
	.catch((error) => {
		console.log(error)
	})
    },

    methods:{
        querytype:function(type){
            this.tf=true
            this.books1=[]
            this.books.forEach(item =>{
                if (item.category===type){this.books1.push({...item})}
            })
        },
        query:function(){
            if(this.$route.params.bookname){//Home查询书名结果
                this.bookname=this.$route.params.bookname
               // this.books1=[]
                var s_this = this
                /*this.books.filter(item =>{
                    if (item.bookname.indexOf(this.bookname)>-1){this.books1.push({...item})}
                })*/
                axios.post('/search_books', { keyword:this.bookname, type:1 }).then((res)=>{
                console.log(res.data)
                s_this.books1 = res.data.data
                if(s_this.books1.length==0) return this.mess="该书籍暂未入库"
                
                }).catch((error) =>  {console.log(error);});
                this.tf=true
                
            }
            if(this.$route.params.id){//Main点击书籍图片跳转详情
                this.book = this.$route.params.id
                this.tf=false
            }
        },
        onchange:function(book){
            this.book=book,
            this.tf=!this.tf
        },
    },
}
</script>