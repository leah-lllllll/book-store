<template>
    <div>
        <div class="detail">
            <span class="title">书籍详细信息</span>
            <span id="link" @click="$emit('change','')">&#60;&nbsp;返回书籍列表</span>
            <div class="info-main">
                <span id="img-div"><viewer><img :src="'http://images.amazon.com/images/' + book.image_url"></viewer></span>
                <div class="info-text">
                    <p>{{book.bookname}}</p>
                    <div class="list-left">
                        <span>书名：{{book.name}}</span>
                        <span>作者：{{book.author}}</span>
                        <span>ISBN：{{book.book_id}}</span>
                        <span>出版社：{{book.press}}</span>
                        <span>出版年份：{{book.publish_date}}</span>
                    </div>
                    <div class="list-right">
                        <span>类型：{{book.category}}</span>
                        <span>价格：{{book.price}}</span>
                        <button @click="addCart(book)">加入购物车</button>
                    </div>
                </div>
            </div>
            <div class="brief">
                <dl>
                    <dt>内容简介:</dt>
                    <dd>暂无</dd>
                </dl>
                <!--dl>
                    <dt>作者简介:</dt>
                    <dd>{{book.authorbrief}}</dd>
                </dl-->
            </div>
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
    name:"Detail",
    props:{
        book:{},
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
<style src="../style/detail.css" scoped>

</style>