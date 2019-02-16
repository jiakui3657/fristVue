<template>
    <div class="mine">
      <div class="title-list">
        <ul class="list-ul">
          <li class="list-li list-rotate">
            <div class="list-box">
              <a>
                <span>创建的项目</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <ul>
                <li style="margin-top: 5px">负责和参与的项目</li>
                <li>负责的项目</li>
                <li>参与的项目</li>
                <li style="margin-bottom: 5px">创建的项目</li>
              </ul>
            </div>
          </li>
          <li class="list-li list-rotate">
            <div class="list-box">
              <a>
                <span>视图</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <ul>
                <li style="margin-top: 5px">普通视图</li>
                <li>分类视图</li>
                <li style="margin-bottom: 5px">表格视图</li>
              </ul>
            </div>
          </li>
          <li class="list-li list-rotate">
            <div class="list-box">
              <a>
                <span>排序</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <ul>
                <li style="margin-top: 5px">默认</li>
                <li>按反馈时间</li>
                <li>按项目更新时间</li>
                <li>按项目创建时间</li>
                <li>按项目结束时间</li>
                <li>按项目名称</li>
                <li style="margin-bottom: 5px">按负责人</li>
              </ul>
            </div>
          </li>
          <li class="list-li list-rotate">
            <div class="list-box">
              <a>
                <span>筛选</span>
                <i class="el-icon-caret-bottom"></i>
              </a>
              <div class="screening">
                <div class="list-screening" style="padding-top: 15px">
                  <div class="filter-title">
                    <span class="filter-label">负责人</span>
                    <span class="filter-input">
                      <input placeholder="搜索人员" class="typehead form-control">
                    </span>
                  </div>
                  <div class="filter-content">
                    <span>
                      <a>土魁</a>
                    </span>
                  </div>
                </div>
                <div class="list-screening">
                  <div class="filter-title">
                    <span class="filter-label">创建人</span>
                    <span class="filter-input">
                      <input placeholder="搜索人员" class="typehead form-control">
                    </span>
                  </div>
                  <div class="filter-content">
                    <span>
                      <a>土魁</a>
                    </span>
                  </div>
                </div>
                <div class="list-screening">
                  <div class="filter-title">
                    <span class="filter-label">标签</span>
                    <span class="filter-input">
                      <input placeholder="搜索标签" class="typehead form-control">
                    </span>
                  </div>
                  <div class="filter-content">

                  </div>
                </div>
                <div class="list-screening">
                  <div class="filter-title">
                    <span class="filter-label">是否已读</span>
                  </div>
                  <div class="filter-content" style="padding-top: 0px;border: 0">
                    <span><a>未读</a></span>
                    <span><a>新反馈</a></span>
                    <span><a>已查阅</a></span>
                  </div>
                </div>
                <div class="filter-btns" style="padding-bottom: 15px">
                  <a>确定</a>
                  <a>重置</a>
                </div>
              </div>
            </div>
          </li>
          <li class="list-li">
            <div class="input-group">
              <div class="input-group-left">
                <input class="form-control" type="text" placeholder="项目搜索" maxlength="255" v-model="projectName">
                <a class="form-control-feedback" @click="projectSearch">
                  <i class="el-icon-search"></i>
                </a>
              </div>
              <div class="input-group-right"><i class="el-icon-arrow-down"></i></div>
            </div>
          </li>
          <li class="list-li list-li-right">
            <div class="list-doubt">
              <a>
                <el-tooltip class="item" effect="dark" content="点击跳转帮助页面" placement="left">
                  <i class="el-icon-question"></i>
                </el-tooltip>
              </a>
            </div>
          </li >
          <li class="list-li list-li-right">
            <div class="list-box list-addProject">
              <a @click="dialogVisible = true" style="color:#fff;float: left;border-top-right-radius: 0px;border-bottom-right-radius: 0;border-right: 0px;background-color: #5cb85c;">
                <i class="el-icon-close"></i>
                <el-button type="text"  style="color: #fff;padding: 0;font-size:12px;">添加项目</el-button>
              </a>
              <span>
                <a style="padding: 10px 10px;color:#fff;float: left;border-top-left-radius: 0px;border-bottom-left-radius: 0;background-color: #5cb85c;border-left: 1px solid #469646;">
                  <i class="el-icon-arrow-down"></i>
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="project-list">
        <ul>
          <li v-for="(item, index) in projectList" :key="index" :id="item.id" v-on:click.stop="projectDetails(item.id)">
            <div class="project-avatar">
              <img :src="item.creater.avatar" alt="">
              <div class="project-percent">50%</div>
            </div>
            <div class="project-introduce">
              <div class="title">{{item.name}}</div>
              <div class="lead">负责人：{{item.creater.name}}</div>
            </div>
            <i class="el-icon-close" @click.stop="cancel(item.id)"></i>
          </li>
        </ul>
      </div>
      <el-dialog
        title="添加新项目"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
        append-to-body
      >
        <div class="detail-summary">
          <div class="summary-avatar">
            <img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt="">
          </div>
          <div class="summary-title"><textarea id="name" v-model="name" class="j_title acl-disabled smart-title" placeholder="添加项目名称" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea></div>
        </div>
        <div class="detail-block">
          <div class="detail-infos">
            <dl class="info-item">
              <dt><span>负责人：</span></dt>
              <dd style="margin-right:80px">
                <img src="" alt="">
                <span class="ellipsis">贾魁</span>
              </dd>
            </dl>
          </div>
        </div>
        <div class="detail-block">
          <div class="detail-infos">
            <dl class="info-item">
              <dt><span>起止日期：</span></dt>
              <dd style="margin-right:80px">
                <el-date-picker
                  v-model="beginDate"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy : MM : dd">
                </el-date-picker>
                   -
                <el-date-picker
                  v-model="deadline"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy : MM : dd">
                </el-date-picker>
              </dd>
            </dl>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addProject">保存</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import common from '../../static/common/common.js'
export default {
  data () {
    return {
      dialogVisible: false,
      beginDate: '',
      deadline: '',
      charger: '',
      addClassification: false,
      projectList: [],
      name: '',
      projectListBackup: [],
      projectName: ''
    }
  },
  created: function () {
    const params = new URLSearchParams()
    params.append('userToken', common.userToken)
    params.append('no', 1)
    params.append('size', 10)
    this.axios.post(common.url + '/project/my.htm', params)
      .then(res => {
        console.log(res)
        this.projectList = res.data.list
        this.projectListBackup = res.data.list
      }, res => {})
  },
  methods: {
    cancel: function (id) {
      const params = new URLSearchParams()
      params.append('userToken', common.userToken)
      params.append('id', id)
      this.axios.post(common.url + '/project/delete.htm', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            })
            const params = new URLSearchParams()
            params.append('userToken', common.userToken)
            params.append('no', 1)
            params.append('size', 10)
            this.axios.post(common.url + '/project/my.htm', params)
              .then(res => {
                console.log(res)
                this.projectList = res.data.list
                this.projectListBackup = res.data.list
              }, res => {})
          } else {
            this.$message({
              message: '删除失败',
              type: 'error',
              duration: 1000
            })
          }
        }, res => {
          this.$message({
            message: '删除失败',
            type: 'error',
            duration: 1000
          })
        })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.$message('创建失败')
        })
        .catch(_ => {})
    },
    addProject: function () {
      var beginDate = new Date(this.beginDate)
      beginDate = beginDate.getTime()
      var deadline = new Date(this.deadline)
      deadline = deadline.getTime()
      console.log(common.userToken, this.name, this.charger, beginDate, deadline)
      const params = new URLSearchParams()
      params.append('userToken', common.userToken)
      params.append('name', this.name)
      params.append('beginDate', beginDate)
      params.append('deadline', deadline)
      this.axios.post(common.url + '/project/create.htm', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.dialogVisible = false
            this.name = ''
            this.charger = ''
            this.deadline = ''
            this.beginDate = ''
            this.$message({
              message: '创建成功',
              type: 'success'
            })
            const params = new URLSearchParams()
            params.append('userToken', common.userToken)
            params.append('no', 1)
            params.append('size', 10)
            this.axios.post(common.url + '/project/my.htm', params)
              .then(res => {
                console.log(res)
                this.projectList = res.data.list
                this.projectListBackup = res.data.list
              }, res => {})
          } else {
            this.$message({
              message: '创建失败',
              type: 'error'
            })
          }
        }, res => {
          this.$message({
            message: '创建失败',
            type: 'error'
          })
        })
    },
    projectDetails: function (id) {
      console.log(id)
      this.$router.push({path: 'projectDetails', query: { id: id }})
    },
    projectSearch: function () {
      if (this.projectName !== '') {
        var projectName = this.projectName
        var list = []
        this.projectListBackup.map(function (item, index) {
          if (item.name === projectName) {
            list.push(item)
          }
        })
        this.projectList = list
      } else {
        this.projectList = this.projectListBackup
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine{
    padding: 20px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    /*overflow: hidden;*/
  }
  .title-list{
    padding-bottom: 15px;
    position: relative;
  }
  .title-list .list-li{
    float: left;
    margin-right: 10px;
  }
  .title-list .list-li .list-box{
    position: relative;
  }
  .title-list .list-li a {
    border: 1px solid #ddd;
    padding: 9px 10px;
    font-size: 12px;
    border-radius: 3px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition: all .1s;
  }
  .title-list .list-li a i{
    webkit-transition: all .3s;
    transition: all .3s;
  }
  .title-list .list-li .list-box:hover a{
    background-color: #fff;
  }
  .title-list .list-rotate .list-box:hover i{
    transform:rotate(-90deg);
  }
  .title-list .list-li ul{
    position: absolute;
    top: 32px;
    left: 0px;
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    max-height: 0px;
    overflow: hidden;
    webkit-transition: max-height .0s ease-in .0s;
    transition: max-height .0s ease-in .0s;
    z-index: 11;
  }
  .title-list .list-li .list-box:hover ul{
    max-height: 500px;
    webkit-transition: max-height .3s ease-in .1s;
    transition: max-height .3s ease-in .1s;
  }
  .title-list .list-li ul li{
    clear: both;
    font-weight: normal;
    padding: 5px 20px;
    color: #333;
    white-space: nowrap;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }
  .title-list .list-li ul li:hover{
    background-color: #53b6eb;
    color: #fff;
  }
  .screening{
    width: 500px;
    position: absolute;
    top: 32px;
    left:0px;
    background-color: #fff;
    text-align: left;
    max-height: 0;
    overflow: hidden;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    z-index: 11;
  }
  .title-list .list-li .list-box:hover .screening{
    max-height: 500px;
    webkit-transition: max-height .3s ease-in .1s;
    transition: max-height .3s ease-in .1s;
  }
  .screening .list-screening{
    margin: 0 16px;
  }
  .screening .list-screening .filter-title {
    margin: 9px 0 0;
    height: 30px;
    line-height: 30px;
  }
  .screening .list-screening .filter-title .filter-label {
    font-weight: bold;
    color: #666;
  }
  .screening .list-screening .filter-title .filter-input {
    float: right;
  }
  .screening .list-screening .filter-title .filter-input input {
    width: 180px;
    border-radius: 3px;
    vertical-align: middle;
    height: 20px;
    padding: 4px 10px;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ddd;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .screening .list-screening .filter-content {
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
  }
  .screening .list-screening .filter-content span {
    display: inline-block;
    margin-right: 6px;
    padding: 2px 0;
  }
  .screening .list-screening .filter-content span a {
    height: 24px;
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    padding: 0 5px;
    text-decoration: none;
    color: #666;
    font-size: 12px;
    border-radius: 2px;
    max-width: 190px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border: 0;
  }
  .screening .filter-btns {
    margin: 15px 20px 12px;
    text-align: right;
  }
  .screening .list-screening .filter-btns a {
    margin-left: 5px;
    min-width: 70px;
  }
  .input-group{
    width: 150px;
  }
  .input-group input{
    border-radius: 3px;
    vertical-align: middle;
    padding: 8.5px 10px;
    font-size: 12px;
    color: #555;
    background-image: none;
    border: 1px solid #ddd;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    float: left;
    position: relative;
    z-index: 2;
    width: 100px;
    margin-bottom: 0;
    background-color: #f9f9f9;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 0;
    padding-right: 25px;
  }
  .form-control {
    padding-right: 25px;
  }
  .title-list .list-li .form-control-feedback {
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 2;
    display: block;
    text-align: center;
    border-radius: 0;
    border: 0;
  }
  .input-group-left{
    float: left;
    position: relative;
  }
  .input-group-right{
    float: left;
    padding: 9px 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .input-group-right:hover{
    background-color: #fff;
  }
  .input-group-right i{
    font-size: 12px;
  }
  .title-list .list-li-right{
    float: right;
  }
  .title-list .list-li-right .list-doubt a{
    border: 0;
    font-size: 16px;
    padding: 3px 10px;
    margin: 5px 0;
  }
  .el-icon-close{
    transform:rotate(-45deg);
  }
  .title-list .list-li-right .list-addProject span a:hover i{
    transform:rotate(-90deg);
  }
  .main .module-advanceSearch {
    display: none;
    margin: 20px 0 0;
    border: 1px solid #eaeaea;
    background: #fff;
    padding: 8px 0 0;
    border-radius: 3px;
    padding: 20px
  }
  .other{
    text-align: left;
    padding-bottom: 5px;
    cursor: pointer;
    margin-top: 60px;
  }
  .other:hover{
    border-bottom: 1px solid #ddd;
  }
  .project-list{

  }
  .project-list ul{
    width: 100%;
    overflow: hidden;
    padding: 20px 20px 20px 0;
  }
  .project-list li{
    width: 380px;
    box-sizing: border-box;
    float: left;
    height: 98px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    margin: 0px 20px 20px 0;
    padding: 24px 24px 0;
    border-color: #eaeaea;
    -webkit-transition: box-shadow .15s linear,background .15s linear,transform .15s linear,border .15s linear;
    -ms-transition: box-shadow .15s linear,background .15s linear,transform .15s linear,border .15s linear;
    transition: box-shadow .15s linear,background .15s linear,transform .15s linear,border .15s linear;
  }
  .project-list li:hover {
    background: #fff;
    border-color: #53b6eb;
    -webkit-transform: translate3d(0,-3px,0);
    -moz-transform: translate3d(0,-3px,0);
    -ms-transform: translate3d(0,-3px,0);
    transform: translate3d(0,-3px,0);
    -webkit-box-shadow: 4px 10px 12px rgba(0,0,0,0.10);
    box-shadow: 4px 10px 12px rgba(0,0,0,0.10);
  }
  .project-list li:hover i {
    display: block;
  }
  .project-list li .project-avatar{
    float: left;
    height: 48px;
    width: 48px;
    line-height: 48px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  .project-list li .project-avatar img{
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
  .project-list li .project-avatar .project-percent{
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
    background: rgba(0,0,0,0.3);
    width: 100%;
  }
  .project-list li .project-introduce{
    margin: 0 0 0 60px;
    text-align:left;
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .project-list li .project-introduce .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .project-list li .project-introduce .lead {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
  .project-list li i {
    position: absolute;
    right: 5px;
    top: 0px;
    transform:rotate(180deg);
    font-size: 20px;
    display: none;
    padding: 10px;
  }
  .detail-summary{
    padding: 15px 0;
  }
  .detail-summary .summary-avatar{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .detail-summary .summary-avatar img{
    width: 100%;
    height: 100%;
  }
  .detail-summary .summary-title{
    margin-left: 36px;
  }
  .detail-summary textarea{
    height: 30px;
    line-height: 24px;
    border: 0;
    background: 0;
    padding: 3px 6px;
    font-size: 15px;
    font-weight: bold;
    color: #454545;
    width: 100%;
    resize: none;
    overflow: auto;
    border-radius: 3px;
    vertical-align: middle;
    -webkit-transition: background .15s linear;
    -o-transition: background .15s linear;
    transition: background .15s linear;
  }
  .detail-summary textarea:hover{
    background-color: #ddd;
  }
  .detail-block{
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    margin: 0 0px 13px;
  }
  .detail-infos {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .detail-infos .info-item {
    display: table-cell;
    vertical-align: top;
    width: 33.3333%;
    padding: 6px 17px;
    line-height: 30px;
    border-right: 1px solid #ececec;
  }
  .detail-infos .info-item dt {
    color: #666;
    float: left;
    font-size: 12px;
    font-weight: bold;
  }
  .detail-infos .info-item dd {
    margin-left: 50px;
    position: relative;
    margin-right: 80px;
  }
</style>
