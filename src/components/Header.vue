<template>
    <div class="header">
      <div class="user-panel" :class="personalToggle?'user-panel-active':''" @mouseover='personalShow' @mouseout="personalHide">
        <div class="personal">
          <img src="../assets/avatar.png" alt="">
          <div class="personal-information">
            <div class="name">贾魁<span class="el-icon-arrow-down"></span></div>
            <div class="company">陕西同纳</div>
          </div>
        </div>
        <div class="team" :class="personalToggle?'team-active':''">
          <div class="title-team">在此您可以切换团队，还可以创建或加入团队</div>
          <ul>
            <li>
              <div><span></span>陕西同纳</div>
            </li>
          </ul>
          <div class="add">+ 创建或加入团队</div>
        </div>
      </div>
      <div class="fun">
        <ul>
          <li><i></i></li>
          <li v-for="(item, index) in funcActiveList" :key="index" @click="fun(item.id, item.path)"><i v-bind:class="item.class"></i><span>{{item.name}}</span></li>
          <li :class="funLastToggle?'last-active':''" @mouseover='funShow' @mouseout="funHide">
            <span>更多应用</span><b class="el-icon-arrow-down"></b>
            <div class="application" :class="funLastToggle?'application-active':''">
              <div class="group j_first-line" v-for="(funcListItem, index) in funcList" :key="index">
                <dl v-for="(childrenItem, index) in funcListItem.childrenList" :key="index">
                  <dt>{{childrenItem.title}}</dt>
                  <dd>
                    <router-link to="/project" v-for="(item, index) in childrenItem.list" :key="index">
                      <i></i>
                      <span>{{item.name}}</span>
                    </router-link>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="systemFun">
        <ul>
          <li @mouseover='searchShow'><input @blur="searchHide" ref="content" v-model="searchVal" v-focus="focusStatus" :class="searchToggle?'searchActive':''" type="text" placeholder="全文检索"><span class="el-icon-search"></span></li>
          <li>
            <i></i>
            <div class="system">
              <ul>
                <li><a href="#"><i></i>写日报</a></li>
                <li><a href="#"><i></i>安排任务</a></li>
                <li><a href="#"><i></i>安排日程</a></li>
                <li><a href="#"><i></i>上传文件</a></li>
                <li><a href="#"><i></i>提交申请</a></li>
                <li><a href="#"><i></i>添加项目</a></li>
                <li class="line"></li>
                <li><a href="#"><i></i>新建客户</a></li>
                <li><a href="#"><i></i>新建联系人</a></li>
                <li><a href="#"><i></i>客户联系记录</a></li>
              </ul>
            </div>
          </li>
          <li>
            <i></i>
            <div class="system">
              <ul>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
                <li>
                  <i></i>
                  <span>在线客服</span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <i></i><span class=""></span>
            <div class="system">
              <ul>
                <li><a href="">客户端下载</a></li>
                <li><a href="">微信号</a></li>
                <li><a href="">邀请同事</a></li>
                <li><a href="">创建或加入团队</a></li>
                <li class="line"></li>
                <li><a href="">通讯录</a></li>
                <li class="line"></li>
                <li><a href="">系统设置</a></li>
                <li><a href="">个人设置</a></li>
                <li class="line"></li>
                <li><a href="">推荐拿福利</a></li>
                <li class="line"></li>
                <li><a href="">退出系统</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      personalToggle: false,
      funLastToggle: false,
      searchToggle: false,
      searchVal: '',
      focusStatus: true,
      funcList: [
        {
          childrenList: [
            {
              title: '汇报',
              list: [
                {
                  id: 0,
                  name: '工作日报',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '工作日报',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '工作管理',
                  path: '',
                  class: ''
                }
              ]
            },
            {
              title: '协作',
              list: [
                {
                  id: 0,
                  name: '项目管理',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '任务协作',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '日程安排',
                  path: '',
                  class: ''
                },
                {
                  id: 3,
                  name: '知识文档',
                  path: '',
                  class: ''
                }
              ]
            }
          ]
        },
        {
          childrenList: [
            {
              title: '审批',
              list: [
                {
                  id: 0,
                  name: '审批流程',
                  path: '',
                  class: ''
                }
              ]
            },
            {
              title: '数据协作',
              list: [
                {
                  id: 0,
                  name: '业务表单',
                  path: '',
                  class: ''
                }
              ]
            },
            {
              title: 'HRM',
              list: [
                {
                  id: 0,
                  name: '绩效考核',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '人事档案',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '出勤',
                  path: '',
                  class: ''
                },
                {
                  id: 3,
                  name: '工资单',
                  path: '',
                  class: ''
                }
              ]
            }
          ]
        },
        {
          childrenList: [
            {
              title: '自定义',
              list: [
                {
                  id: 0,
                  name: '进销存管理',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '项目立项',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '采购申请',
                  path: '',
                  class: ''
                },
                {
                  id: 3,
                  name: '固定资产管理',
                  path: '',
                  class: ''
                },
                {
                  id: 4,
                  name: '会议申请',
                  path: '',
                  class: ''
                },
                {
                  id: 5,
                  name: '发票申请',
                  path: '',
                  class: ''
                },
                {
                  id: 6,
                  name: '工作日报',
                  path: '',
                  class: ''
                },
                {
                  id: 7,
                  name: '工作日报',
                  path: '',
                  class: ''
                }
              ]
            },
            {
              title: '其它',
              list: [
                {
                  id: 0,
                  name: '统计报表',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '短息',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '邮件',
                  path: '',
                  class: ''
                },
                {
                  id: 3,
                  name: '标签',
                  path: '',
                  class: ''
                },
                {
                  id: 4,
                  name: '企业微信',
                  path: '',
                  class: ''
                },
                {
                  id: 5,
                  name: '发票申请',
                  path: '',
                  class: ''
                },
                {
                  id: 6,
                  name: '微信服务号',
                  path: '',
                  class: ''
                },
                {
                  id: 7,
                  name: '通知公告',
                  path: '',
                  class: ''
                },
                {
                  id: 8,
                  name: '会议室管理',
                  path: '',
                  class: ''
                }
              ]
            }
          ]
        },
        {
          childrenList: [
            {
              title: 'CRM',
              list: [
                {
                  id: 0,
                  name: '市场活动',
                  path: '',
                  class: ''
                },
                {
                  id: 1,
                  name: '线索',
                  path: '',
                  class: ''
                },
                {
                  id: 2,
                  name: '客户',
                  path: '',
                  class: ''
                },
                {
                  id: 3,
                  name: '联系人',
                  path: '',
                  class: ''
                },
                {
                  id: 4,
                  name: '商机',
                  path: '',
                  class: ''
                },
                {
                  id: 5,
                  name: '合同',
                  path: '',
                  class: ''
                },
                {
                  id: 6,
                  name: '订单',
                  path: '',
                  class: ''
                },
                {
                  id: 7,
                  name: '价格',
                  path: '',
                  class: ''
                },
                {
                  id: 8,
                  name: '产品',
                  path: '',
                  class: ''
                },
                {
                  id: 9,
                  name: '竞争对手',
                  path: '',
                  class: ''
                },
                {
                  id: 10,
                  name: 'CRM统计',
                  path: '',
                  class: ''
                }
              ]
            }
          ]
        }
      ],
      funcActiveList: [
        {
          id: '0',
          class: 'task',
          name: '任务',
          path: 'special'
        },
        {
          id: '1',
          class: 'schedules',
          name: '日程',
          path: 'content'
        },
        {
          id: '2',
          class: 'project',
          name: '项目',
          path: 'content'
        },
        {
          id: '3',
          class: 'knowledge',
          name: '知识',
          path: 'special'
        }
      ]
    }
  },
  directives: {
    focus: {
      inserted: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  methods: {
    fun: function (id, route) {
      console.log(id, route)
      if (route === 'special') {
        this.router.push({path: '/home/' + route + '?id=' + id})
      } else {
        this.router.push({path: '/home/' + route + '?id=' + id})
      }
    },
    personalShow: function () {
      this.personalToggle = true
    },
    personalHide: function () {
      this.personalToggle = false
    },
    funShow: function () {
      this.funLastToggle = true
    },
    funHide: function () {
      this.funLastToggle = false
    },
    searchShow: function () {
      this.searchToggle = true
      this.focusStatus = true
      this.$refs.content.focus()
    },
    searchHide: function () {
      console.log(this.searchVal)
      if (this.searchVal !== '') {
        this.searchToggle = true
      } else {
        this.searchToggle = false
        this.focusStatus = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .task{
    background-position: -32px 0 !important;
  }
  .schedules{
    background-position: -112px 0 !important;
  }
  .project{
    background-position: -48px 0 !important;
  }
  .knowledge{
    background-position: -64px 0 !important;
  }
  .user-panel{
    padding: 0 15px 0 10px;
    float: left;
    width: 222px;
    position: relative;
  }
  .user-panel-active{
    box-shadow: 0 -4px 6px rgba(0,0,0,0.15);
  }
  .user-panel .team {
    position: absolute;
    left:0px;
    top:50px;
    width:350px;
    background-color: #fff;
    max-height:0;
    z-index: 101;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: all .3s linear 0s;
  }
  .user-panel .team-active {
    max-height: 500px;
    transition: all .3s linear .3s;
  }
  .user-panel .team .title-team {
    padding: 14px 20px;
    font-size: 12px;
    background: #fafafa;
    color: #999;
    border-bottom: 1px solid #f2f2f2;
  }
  .user-panel .team ul{
    list-style: none;
    margin: 0;
    padding: 10px 0;
  }
  .user-panel .team ul li{
    max-height: 300px;
  }
  .user-panel .team ul li div{
    color: #666;
    display: block;
    padding: 0 20px 0 46px;
    text-decoration: none;
    line-height: 40px;
    position: relative;
    cursor: pointer;
  }
  .user-panel .team ul li div:hover{
    background-color: #f7f7f7;
  }
  .user-panel .team ul li div span{
    position: absolute;
    top: 14px;
    left: 20px;
  }
  .user-panel .team .add{
    line-height: 45px;
    padding: 0 20px 0 46px;
    color: #249cda;
    cursor: pointer;
    border-top: 1px solid #eaeaea;
  }
  .user-panel .team .add:hover{
    background-color: #f7f7f7;
    color: #fb6e52;
  }
  .user-panel .personal{
    overflow: hidden;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    height: 50px;
  }
  .user-panel .personal img{
    border-radius: 50%;
    border: 1px solid #fff;
    height: 38px;
    width: 38px;
    float: left;
    margin: 5px 9px 0 0;
  }
  .personal-information .name {
    margin-top: 9px;
    margin-bottom: 5px;
  }
  .fun{
    float: left;
  }
  .fun ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .fun ul li{
    float: left;
    height: 50px;
    line-height: 50px;
    padding: 0 12px;
    cursor: pointer;
    color: #fff;
    transition: all .3s;
  }
  .fun ul li i{
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-top: -3px;
    background: url("../assets/icon.png") no-repeat;
    background-size: 400px 1350px;
    vertical-align: middle;
  }
  .fun ul li span{
    margin-left: 6px;
  }
  .fun ul li b{
    margin-left: 7px;
  }
  .fun ul li:hover{
    background-color: rgba(0,0,0,0.1);
  }
  .fun ul li:last-child {
    position: relative;
  }
  .fun ul li:last-child .application {
    position: absolute;
    top: 50px;
    left:0px;
    background-color: #fff;
    border: 0;
    padding: 0px 0 0px 20px;
    transition: all 0s linear 0s;
    white-space: nowrap;
    min-width: 350px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    max-height: 0px;
    box-sizing: border-box;
    z-index: 101;
    overflow: hidden;
  }
  .fun ul li:last-child .application::-webkit-scrollbar{
    width:10px;
  }
  .fun ul li:last-child .application::-webkit-scrollbar-button {
  }
  .fun ul li:last-child .application::-webkit-scrollbar-track-piece{
    background-color:#fff;
  }
  .fun ul li:last-child .application::-webkit-scrollbar-thumb{
    background-color:#d9d9d9;
    border-radius:10px;
  }
  .fun ul li:last-child .application::-webkit-scrollbar-corner {
    /*background-color: #d9d9d9;*/
  }
  .fun ul li:last-child .application::-webkit-resizer {
    background-repeat: no-repeat;
    background-position: bottom right;
  }
  .fun ul li:last-child .application::-webkit-scrollbar-thumb:hover{
    background-color:#ccc;
  }
  .fun ul li:last-child .application .group {
    display: inline-block;
    vertical-align: top;
  }
  .fun ul li:last-child .application .j_second-line {
    margin-left: 35px;
  }
  .fun ul li:last-child .application .j_third-line {
    margin-left: 35px;
  }
  .fun ul li:last-child .application .j_fouth-line {
    margin-left: 35px;
    margin-right: 20px;
  }
  .fun ul li:last-child .application .group dl {
    width: 120px;
    margin: 0;
  }
  .fun ul li:last-child .application .group dl+dl {
  }
  .fun ul li:last-child .application .group dl dt {
    padding-right: 10px;
    color: #000;
    height: auto;
    line-height: 20px;
    font-weight: 600;
  }
  .fun ul li:last-child .application .group dl dd {
    padding: 12px 0;
    margin: 0;
  }
  .fun ul li:last-child .application .group dl dd a{
    display: block;
    height: 27px;
    line-height: 27px;
    color: #666;
    padding: 0 9px;
    margin-bottom: 6px;
    text-decoration: none;
    border-radius: 2px;
    -webkit-transition: background .15s linear;
    -o-transition: background .15s linear;
    transition: background .15s linear;
  }
  .fun ul li:last-child .application .group dl dd a:hover{
    color: #323232;
    background: #f3f3f3;
  }
  .fun ul li:last-child .application .group dl dd a i{
    height: 16px;
    width: 16px;
    margin-top: -3px;
    background: url("../assets/icon.png") no-repeat;
    background-size: 400px 1350px;
    background-position: -16px -16px;
  }
  .fun ul li:last-child .application .group dl dd a span{
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    max-width: 75px;
  }
  .fun ul li:last-child .application-active{
    max-height: 500px;
    transition: all .1s ease-in .3s;
    padding: 16px 0 8px 20px;
  }
  .fun ul li:last-child .application-active:hover{
    overflow-y: auto;
  }
  .fun ul .last-active{
    background-color: #fff;
    color: #48484e;
  }
  .systemFun{
    float:right;
  }
  .systemFun ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .systemFun ul li{
    float: left;
    height: 50px;
    line-height: 50px;
    padding: 0 12px;
    color: #fff;
    margin-right: 6px;
    transition: all .3s;
    cursor: pointer;
    position: relative;
  }
  .systemFun ul li:first-child{
    position: relative;
  }
  .systemFun ul li:first-child input{
    position: absolute;
    right: 0;
    top: 10px;
    width: 0;
    height: 30px;
    border-radius: 15px;
    line-height: 20px;
    border: 0;
    color: #fff;
    -webkit-transition: all .15s ease;
    -moz-transition: all .15s ease;
    -o-transition: all .15s ease;
    padding: 0;
    background-color: rgba(0,0,0,0.1);
    opacity: 0;
    outline:none;
    padding-left: 10px;
  }
  .systemFun ul li:first-child input::-webkit-input-placeholder{
    color:#fff;
  }
  .systemFun ul li:last-child {
    position: relative;
  }
  .systemFun ul li:nth-child(2):hover .system{
    display: block;
  }
  .systemFun ul li:nth-child(2) .system {
    position: absolute;
    top: 50px;
    right: 0px;
    background-color: #fff;
    overflow: hidden;
    padding: 5px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: all 0s linear .3s;
    display: none;
    z-index: 101;
  }
  .systemFun ul li:nth-child(2) .system ul{
    overflow: hidden;
  }
  .systemFun ul li:nth-child(2) .system ul li{
    padding: 0;
    margin: 0;
    height: auto;
    display: block;
    width: 100%;
  }
  .systemFun ul li:nth-child(2) .system ul li a:hover{
    color: #fff;
    text-decoration: none;
    background-color: #53b6eb;
  }
  .systemFun ul li:nth-child(2) .system ul .line {
    height: 1px;
    margin: 9.4px 0;
    overflow: hidden;
    background-color: #e5e5e5;
  }
  .systemFun ul li:nth-child(2) .system ul li a{
    display: block;
    padding: 8px 20px;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    font-size: 14px;
    text-decoration: none;
  }
  .systemFun ul li:nth-child(2) .system ul li a i {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    vertical-align: -5px;
    -webkit-transition: background .15s linear;
    -o-transition: background .15s linear;
    transition: background .15s linear;
    background: url(../assets/icon.png) no-repeat;
    background-size: 400px 1350px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(1) a i {
    background-position: 0 -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(2) a i {
    background-position: -20px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(3) a i {
    background-position: -140px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(4) a i {
    background-position: -60px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(5) a i {
    background-position: -100px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(6) a i {
    background-position: -40px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(7) a i {
    background-position: 0 -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(8) a i {
    background-position: -80px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(9) a i {
    background-position: -120px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(10) a i {
    background-position: -220px -501px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(1) a:hover i {
    background-position: 0 -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(2) a:hover i {
    background-position: -20px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(3) a:hover i {
    background-position: -140px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(4) a:hover i {
    background-position: -60px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(5) a:hover i {
    background-position: -100px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(6) a:hover i {
    background-position: -40px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(8) a:hover i {
    background-position: -80px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(9) a:hover i {
    background-position: -120px -521px;
  }
  .systemFun ul li:nth-child(2) .system ul li:nth-child(10) a:hover i {
    background-position: -220px -521px;
  }
  .systemFun ul li:nth-child(3) .system {
    position: absolute;
    top: 50px;
    left: -80px;
    width: 200px;
    background-color: #fff;
    overflow: hidden;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    box-sizing: border-box;
    display: none;
    transition: all 0s linear .3s;
    z-index: 101;
  }
  .systemFun ul li:nth-child(3):hover .system{
    display: block;
  }
  .systemFun ul li:nth-child(3) .system ul{
    overflow: hidden;
  }
  .systemFun ul li:nth-child(3) .system ul li{
    float: left;
    width: 47%;
    border-radius: 3px;
    padding: 5px 5px 10px;
    font-size: 12px;
    text-decoration: none;
    color: #333;
    text-align: center;
    margin-right: 0;
    height: auto;
    line-height: normal;
    margin: 0px 2px;
    box-sizing: border-box;
  }
  .systemFun ul li:nth-child(3) .system ul li:hover {
    background-color: #f4f4f4;
  }
  .systemFun ul li:nth-child(3) .system ul li i {
    height: 28px;
    width: 28px;
    display: inline-block;
    margin: 8px 0;
  }
  .systemFun ul li:nth-child(3) .system ul li span{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    height: auto;

  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(1) i {
    background-position: -140px -1099px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(2) i {
    background-position: 0 -1099px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(3) i {
    background-position: -28px -1099px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(4) i {
    background: url(../assets/icon.png) no-repeat;
    background-size: 400px 1350px;
    background-position: -84px -1099px;
    height: 28px;
    width: 28px;
    display: inline-block;
    margin-bottom: 8px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(5) i {
    background-position: -112px -1099px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(6) i {
    background-position: -56px -1099px;
  }
  .systemFun ul li:nth-child(3) .system ul li:nth-child(7) i {
    background-position: -168px -1099px;
  }
  .systemFun ul li:last-child .system {
    position: absolute;
    top: 50px;
    right: 0px;
    width: 170px;
    background-color: #fff;
    overflow: hidden;
    height: 0px;
    transition: all 0s linear .3s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    z-index: 101;
  }
  .systemFun ul li:last-child .system ul {
    padding: 5px 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
  }
  .systemFun ul li:last-child .system ul li {
    width: 100%;
    height: auto;
    padding: 0;
  }
  .systemFun ul li:last-child .system ul .line {
    height: 1px;
    margin: 9.4px 0;
    overflow: hidden;
    background-color: #e5e5e5;
  }
  .systemFun ul li:last-child .system ul li a {
    display: block;
    padding: 5px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    font-size: 14px;
    text-decoration: none;
  }
  .systemFun ul li:last-child .system ul li a:hover {
    background-color: #53b6eb;
    color: #fff;
  }
  .systemFun ul li i{
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-top: -3px;
    background: url('../assets/icon.png') no-repeat;
    background-size: 400px 1350px;
    vertical-align: middle;
  }
  .systemFun ul li:nth-child(2) i{
    background-position: 0 -32px;
  }
  .systemFun ul li:nth-child(3) i{
    background-position: -128px -32px;
  }
  .systemFun ul li:nth-child(4) i{
    display: inline-block;
    width: 70px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 70px 30px;
    background-image: url('../assets/titleSelected.png');
  }
  .systemFun ul li:nth-child(4):hover i{
    display: inline-block;
    width: 70px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 70px 30px;
    background-image: url('../assets/titleUncheck.png');
  }
  .systemFun ul li:nth-child(4):hover .system{
    overflow: hidden;
    height: auto;
  }
  .systemFun ul li:hover{
    background-color: #fff;
  }
  .systemFun ul li:nth-child(1):hover{
    background-color: rgba(0,0,0,0);
  }
  .systemFun ul li:nth-child(1) .searchActive{
    display: block;
    width: 170px;
    opacity: 1;
  }
  .systemFun ul li:nth-child(2):hover i{
    background-position: 0 -48px;
  }
  .systemFun ul li:nth-child(3):hover i{
    background-position: -128px -48px;
  }
  .user-panel .personal .personal-information {
    float: left;
  }
  .user-panel .personal .personal-information .name {
  }
  .user-panel .personal .personal-information .name span {
    margin: 0 5px;
  }
</style>
