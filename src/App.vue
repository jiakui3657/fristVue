<template>
  <div id="app" @click="state = false">
    <router-view>
      <Home></Home>
      <Login></Login>
    </router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Login from './components/Login.vue'

export default {
  components: {
    Home,
    Login
  },
  name: 'App',
  data () {
    return {
      message: '111'
    }
  }
//  beforeCreate: function () {
//    console.group('------beforeCreate创建前状态------')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  created: function () {
//    console.group('------created创建完毕状态------')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  beforeMount: function () {
//    console.group('------beforeMount挂载前状态------')
//    console.log('%c%s', 'color:red', 'el     : ' + (this.$el))
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  mounted: function () {
//    console.group('------mounted 挂载结束状态------')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  beforeUpdate: function () {
//    console.group('beforeUpdate 更新前状态===============》')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  updated: function () {
//    console.group('updated 更新完成状态===============》')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  beforeDestroy: function () {
//    console.group('beforeDestroy 销毁前状态===============》')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  },
//  destroyed: function () {
//    console.group('destroyed 销毁完成状态===============》')
//    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
//    console.log(this.$el)
//    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
//    console.log('%c%s', 'color:red', 'message: ' + this.message)
//  }
}
</script>

<style>
  html,body{
    height: 100%;
    font-family: 'PingFangSC-Light','Hiragino Sans GB',Microsoft YaHei Light,Microsoft YaHei,Arial,sans-serif;
  }
  #app{
    height: 100%;
  }
  .container{
    height: 100%;
  }
  .el-header {
    background-color: #53b6eb;
    padding: 0;
  }
  .el-aside {
    background-color: #fff;
    border-right: 1px solid #eaeaea;
  }
  .el-main {
    background-color: #f9f9f9;
    padding: 0;
  }
  .el-container{
    height: 100%;
  }
  .el-dialog__header{
    font-weight: bold;
    color: #454545;
    background: #f5f5f5;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    font-size: 14px;
  }
  .el-dialog__body{
    padding: 0px 20px;
    background-color: #eee;
  }
  .el-dialog{
    border-radius: 6px;
    background-color: #eee;
  }
  .el-dialog__footer{
    background-color: #eee;
  }
  .el-date-editor{
    width: 240px !important;
  }
  .el-input__inner{
    height: 30px;
    line-height: 30px;
  }
  .el-input__icon{
    line-height: 30px;
  }
  .el-date-editor .el-range__icon {
    line-height: 10px;
  }
  .el-date-editor .el-range-separator {
    padding: 0 10px;
    line-height: 24px;
    width: auto;
  }
  .el-date-editor .el-range__close-icon {
    line-height: 20px;
  }
</style>
