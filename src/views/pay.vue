<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
        </h4>
        <div class="paymark">
          <span class="fl">请您在提交订单<em class="orange time">4小时</em>之内完成支付，超时订单会自动取消。订单号：<em>145687</em></span>
          <span class="fr"><em class="lead">应付金额：</em><em class="orange money">{{$route.query.id}} </em></span>
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明：</h4>
        <ol>
          <li>止间图书网平台目前支持<span class="zfb">支付宝</span>支付方式。</li>
          <li>其它支付渠道正在调试中，敬请期待。</li>
          <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
        </ol>
        <h4>支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）</h4>
        <ul>
          <li>支付帐号：384729482</li>
          <li>金额：{{$route.query.id}}</li>
        </ul>
      </div>
      <div class="checkout-steps">
        <!--div class="step-tit">
          <h5>支付平台</h5>
        </div>
        <div id="image">
          <img alt="BookPayCode" src="../assets/alipay.jpg"> 
        <div-->

        <div class="hr"></div>
 
        <div class="payshipInfo">
          <div class="step-tit">
            <h5>支付网银</h5>
          </div>
          <div class="ol">

              <li>支持扫码或转账</li>
          
              <!--span id="img-div"><viewer><img src="../assets/alipay.jpg"></viewer></span-->
         
              <!--li><img src="D:/booksales/src/assets/3"></li>
              <li><img src="D:/booksales/src/assets/3"></li>
              <li><img src="D:/booksales/src/assets/3"></li>
              <li><img src="D:/booksales/src/assets/3"></li-->
          </div>
 
        </div>
        <div class="hr"></div>
 
        <div class="submit">
          <!--router-link class="btn" to="/manage">立即支付</router-link-->
          <div class="btu">
          <button @click="pay()" >立即支付</button><br>
          </div>
        </div>
        <div class="otherpay">
          <div class="step-tit">
            <h5>其他支付方式</h5>
          </div>
          <div class="step-cont">
            <span><a href="weixinpay.html" target="_blank">微信支付 </a></span>
            <span><a href="weixinpay.html" target="_blank">银联支付</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios 
  export default {
    name: 'Pay',
     methods:{
      pay:function(){
        //alert("支付成功")
        this.$store.state.carts.forEach(element => {
                this.$store.commit('remove',element.index)
          });
         this.$router.replace("/")
          axios.post('/add_order', { username: sessionStorage.username}).then((res)=>{
            console.log(res)
            }).catch((error) =>  {console.log(error);});
      }
  }
  }
 
</script>
 
<style lang="less" scoped> 
  .pay-main {
    margin-bottom: 20px;
 
    .pay-container {
      margin: 0 auto;
      width: 1220px;
 
      a:hover {
        color: #4cb9fc;
      }
 
      .orange {
        color: #e1251b;
      }
 
      .money {
        font-size: 18px;
      }
 
      .zfb {
        color: #e1251b;
        font-weight: 700;
      }
 
      .checkout-tit {
        padding: 5px;
 
        .tit-txt {
          font-size: 14px;
          line-height: 21px;
 
          .success-icon {
            width: 30px;
            height: 30px;
            display: inline-block;
           // background: url(D:/booksales/src/assets/3) no-repeat 0 0;
          }
 
          .success-info {
            padding: 0 8px;
            line-height: 30px;
            vertical-align: top;
          }
        }
 
        .paymark {
          overflow: hidden;
          line-height: 26px;
          text-indent: 38px;
 
          .fl {
            float: left;
          }
 
          .fr {
            float: right;
 
            .lead {
              margin-bottom: 18px;
              font-size: 15px;
              font-weight: 400;
              line-height: 22.5px;
            }
          }
        }
      }
 
      .checkout-info {
        padding-left: 20px;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border: 2px solid #e1251b;
 
        h4 {
          margin: 9px 0;
          font-size: 14px;
          line-height: 21px;
          color: #e1251b;
        }
 
        ol {
          padding-left: 25px;
          list-style-type: decimal;
          line-height: 24px;
          font-size: 14px;
        }
 
        ul {
          padding-left: 25px;
          list-style-type: disc;
          line-height: 24px;
          font-size: 14px;
        }
      }
 
      .checkout-steps {
        border: 1px solid #ddd;
        padding: 25px;
 
        .hr {
          height: 1px;
          background-color: #ddd;
        }
 
        .step-tit {
          line-height: 36px;
          margin: 15px 0;
        }
 
        .step-cont {
          margin: 0 10px 12px 20px;
 
          ul {
            font-size: 0;
 
            span {
              display:inline-block;
              height:35px;
              width:35px;
              position: relative;
              top: 20px;
            }
          }
        }
      }

      .image {
          display:inline-block;
          height:10px;
          width:10px;
          position: left;
      }
 
      .submit {
        text-align: center;
 
        .btn {
          display: inline-block;
          padding: 15px 45px;
          margin: 15px 0 10px;
          font: 18px "微软雅黑";
          font-weight: 700;
          border-radius: 0;
          background-color: #e1251b;
          border: 1px solid #e1251b;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
        }
      }
    }
  }
</style>



