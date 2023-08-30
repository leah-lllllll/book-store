<template>
    <div>
        <div id="bookresult">
            <div class="item" v-for="book in books" :key="book.book_id">
                <!--span id="img-div"><img :src="require(`../assets/bookimg/${book.isbn}.jpg`)" @click="$emit('change',book)"></span-->
                <span id="img-div"><img :src= "'http://images.amazon.com/images/' + book.image_url" @click="$emit('change',book)"></span>
                <div class="bookmess">
                    <span id="bookname" @click="$emit('change',book)">{{book.name}}</span>
                    <span>作者：{{book.author}}</span>
                    <span>出版社：{{book.press}}</span>
                    <span>类型：{{book.category}}</span>
                </div>
                <div class="money">
                    <span id="num">￥{{book.price}}</span>
                    <span>库存充足</span>
                    <button @click="addCart(book)">加入购物车</button>
                </div>
            </div>
            <h3>{{mess}}</h3>
        </div>
        <!--底部  -->
        <div id="footer">
            <p>
                参考网站：<a href="https://www.kongfz.com/">孔夫子旧书网</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Bookitems',
    props: {
        books: [],
        mess:null,
    },
    methods:{
        addCart:function(book){
            if(sessionStorage.username){
                this.$store.commit('addCart',book)
                alert("添加成功")
            }else{
                this.$router.push({path:'/init'})
            }
        }
    },
}
</script>
<style src="../style/bookresult.css" scoped>

</style>