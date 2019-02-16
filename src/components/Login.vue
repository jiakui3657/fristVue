<template>
  <div class="login">
    <header></header>
    <section class="container">
      <div class="login-panel">
        <div class="box-shadow">
          <h1 class="singleHead">用户登录</h1>
          <div class="ui-form">
            <div class="ui-form-item">
              <span class="ui-label">帐 号:</span>
              <input class="ui-input" type="text" v-model="username" placeholder="请输入您注册的邮箱或手机号">
            </div>
            <div class="ui-form-item">
              <span class="ui-label">密 码:</span>
              <input class="ui-input" type="password" autocomplete="new-password" v-model="password" placeholder="请输入密码">
            </div>
            <div class="fmes-bar">
              <button type="submit" class="btn btn-lg btn-primary mgl160" v-on:click="login">登 录</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer">
        <div class="copyright">
          Copyright © 2001-2018 Weaver Network All Rights Reserved.
          <a href="#">沪ICP备31011202007203号</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import common from '../../static/common/common.js'
export default {
  data () {
    return {
      username: '18229060103',
      password: '123456'
    }
  },
  methods: {
    login: function () {
      console.log(this.username)
      console.log(this.password)
      this.axios.get(common.url + '/member/login.htm', {params: {phone: this.username, password: this.password}})
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            common.userToken = res.data.userToken
            common.avatar = res.data.avatar
            common.name = res.data.name
            common.uid = res.data.uid
            this.$router.push('/home')
          }
        }, res => {
          console.log(res)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section{
    position: absolute;
    left: 50%;
    margin-left: -300px;
  }
  .login-panel {
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 600px;
  }
  .box-shadow {
    background: #ffffff;
    border-color: #ddd;
    border-style: solid;
    border-width: 1px;
    min-height: 200px;
    margin: 0 auto;
  }
  h1.singleHead {
    line-height: 68px;
    font-size: 24px;
    color: #666;
    margin-top: 0;
    border-bottom: 1px solid #f1f1f1;
    text-align: center;
  }
  .ui-form {
    padding: 50px 50px 25px;
    position: relative;
  }
  .ui-form-item {
    padding-bottom: 20px;
  }
  .ui-label {
    color: #4c4c4c;
    font-size: 14px;
    line-height: 16px;
    margin-right: 10px;
    padding-top: 7px;
    text-align: right;
    padding-top: 13px;
    width: 50px;
    margin-right: 0;
    text-align: left;
    float: left;
  }
  .ui-input {
    width: 426px;
    color: #4d4d4d;
    border: 1px solid #dddddd;
    font-size: 14px;
    height: 45px;
    line-height: 18px;
    padding: 11px 10px;
    vertical-align: middle;
    border-radius: 2px;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  }
  .ui-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }
  .fmes-bar .btn {
    display: block;
    margin: 0 auto;
    width: 160px;
    color: #ffffff;
    background-color: #428bca;
    background-image: none;
    border-color: #357ebd;
    font-size: 16px;
    line-height: 1.33;
    padding: 8px 16px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
  }
  .fmes-bar .btn:after{
    border: 0;
  }
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #f4f4f4;
    border-top: 2px solid #e9e9e9;
  }
  .footer {
    padding: 10px;
    margin: 0px auto;
  }
  .footer .copyright {
    color: #666;
    text-align: center;
    font-size: 12px;
  }
  .footer .copyright a {
    text-decoration: none;
    color: #3366CC;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
</style>
