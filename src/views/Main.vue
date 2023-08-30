<template>
    <div >
        <!--横幅  -->
            <div id="banner">
                
                <div id="photo">
                    <a href=""><img src="../assets/lb1.jpg"></a>
                    <a href=""><img src="../assets/lb2.jpg"></a>
                    <a href=""><img src="../assets/lb3.jpeg"></a>
                    <a href=""><img src="../assets/lb4.jpg"></a>
                    <a href=""><img src="../assets/lb5.jpg"></a>
                </div>
            </div>
            <!-- 广告活动 -->
            <div id="adver">
                <table>
                    <tr>
                        <td><a href=""><img src="../assets/pm1.png" class="pm"></a></td>
                        <td><a href=""><img src="../assets/pm2.png" class="pm"></a></td>
                    </tr>
                    <tr>
                        <td><a href=""><img src="../assets/pm3.png" class="pm"></a></td>
                        <td><a href=""><img src="../assets/pm4.png" class="pm"></a></td>
                    </tr>
                    <tr>
                        <td><a href=""><img src="../assets/pm5.png" class="pm"></a></td>
                        <td><a href=""><img src="../assets/pm6.jpg" class="pm"></a></td>
                    </tr>
                </table>
            </div>
            <div id="gallery">
                <p>
                    <b>好书推荐</b>
                </p>
                
                <ul>
                    <li v-for="book in books1" :key="book.book_id">
                        <span class="hlimg" @click="detail(book)"><img :src="'http://images.amazon.com/images/' + book.image_url"></span>
                        <span class="title" >{{book.name}}</span>
                        <span class="writer">{{book.author}} 著</span>
                        <span class="price">￥{{book.price}}</span>
                    </li>
                </ul>
            </div>

             <div id="gallery2">
                <p>
                    <b>大家都在读的——Top20书单</b>
                </p>
                
                <ul>
                    <li v-for="book in books2" :key="book.book_id">
                        <span class="hlimg" @click="detail(book)"><img :src="'http://images.amazon.com/images/' + book.image_url"></span>
                        <span class="title" >{{book.name}}</span>
                        <span class="writer">{{book.author}} 著</span>
                        <span class="price">￥{{book.price}}</span>
                    </li>
                </ul>

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
//import {books} from "../data/books";
//import {rbooks} from "../data/booksRecommand";
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios
export default {
    data:function(){
        return{
            books1:[],
            books2:[]
        }
    },
    /*computed:{
        books:() => books,
        rbooks:() => rbooks
    },*/
    created:function(){
        //获得top20书籍
        axios.get('/get_books_tops')
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                   // alert("获取成功")
                    console.log(response.data)
                    //alert(response)
                    //this.oftenGoods=response.data
                    this.books2 = response.data.data
                })
                //获取失败
                .catch(error=>{
                 console.log(error.response)
                
            })

    axios.post('/get_books_for_user', { username: sessionStorage.username})
	.then((response) => {
        console.log(response)
        this.books1 = response.data.data;
	})
	.catch((error) => {
		console.log(error)
	})

    },
    /*mounted:function(){
        this.goodshow()
    },*/
    methods:{
        detail:function(book){
            this.$router.push({name:'pageshow',params:{id:book}})
        },
        goodshow:function(){
            /*books.filter(item =>{
                if (item.good==1){this.books1.push({...item})}
            })
            rbooks.filter(item =>{
                if (item.good==1){this.books2.push({...item})}
            })*/
        }
    },
}
</script>
<style src="../style/main.css" scoped>

</style>