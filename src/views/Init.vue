<template>
    <div id="init">
        <div id="head">
            <div id="head-left">
                守心一处&nbsp;&nbsp;止步此间
            </div>
            <div id="head-right">
                <ul> 
                    <li ><router-link to="/">首页</router-link></li>
                </ul>
            </div>
        </div>
        <div id="logo">
            <img src="../assets/logo.png"/>
        </div>
        <div id="main">
            <div id="w">
                <div id="loginimg"><img src="../assets/init2.png" alt=""></div>
                <div id="view">
                    <div id=title>
                        <div id=title_left>
                            <router-link to="/init/">用户登录</router-link>
                        </div>
                        <div id=title_right>
                            <router-link to="/init/reg">用户注册</router-link>
                        </div>
                    </div>
                    <router-view/>
                </div>
            </div>
        </div>
        <div id="footer">
                <p>止间&nbsp;&nbsp;&nbsp;图书销售网站<br></p>
        </div>
    </div>
</template>
<style src="../style/init.css" scoped>

</style>

