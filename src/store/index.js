import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$axios = axios 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    user:[],
    mess:'',
  },
  getters:{
    total:function(state){
      var t=0;
      state.carts.forEach(function(ele){
        t+=ele.price*ele.num
      });
      return t;
    },
    count:function(state){
      var c=0;
      state.carts.forEach(function(ele){
        c+=ele.num
      });
      return c;
    },
  },
  mutations: {
    queryuser:function(state,user){
      var ele=state.user.find(function(ele){
        return ele.name==user.name//是否存在用户
      })
      
      if(ele){  
        state.mess=ele.pwd//存在则返回用户密码
      }
      else{
        return state.mess="f"
      }
    },
    reg:function(state,user){//添加用户
        if(user.pwd != ""){
        state.user.push({
          ...user
        })
      }
        else
           alert("密码不能为空")
    },
    addCart:function(state,book){
        var ele=state.carts.find(function(ele){
          return ele.book_id==book.book_id
        });

        if(ele) ele.num++
        else{
          state.carts.push({
            book_id: book.book_id,
            image_url: book.image_url,
            bookname: book.name,
            price: book.price,
            num:1
          })
        }
        axios.post('/add_cart', { username: sessionStorage.username, book_id:book.book_id}).then((res)=>{
          console.log(res)
          }).catch((error) =>  {console.log(error);});
    },
    intailCart:function(state,book){
     
        state.carts.push({
          book_id: book.book_id,
          image_url: book.image_url,
          bookname: book.name,
          price: book.price,
          num:book.number
        })

  },
    remove:function(state,index,cart){
      state.carts.splice(index,1)
     // alert(cart)
      axios.post('/del_cart', { username: sessionStorage.username, book_id:cart.book_id}).then((res)=>{
        console.log(res)
        }).catch((error) =>  {console.log(error);});
    }
  },
  actions: {
  },
  modules: {
  }
})
