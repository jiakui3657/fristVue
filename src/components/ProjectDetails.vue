<template>
    <div class="projectDetails" @click.stop="state = false">
      <div class="projectAll" :class="projectAll?'':'projectAllActive'">
        <div class="project-title">
          <i></i>
          <span>全部项目</span>
        </div>
        <ul>
          <li v-for="(item, index) in projectList" :key="index" :uid="item.creater.id">
            <div class="project-avatar">
              <img :src="item.creater.avatar" alt="">
              <div class="project-percentage">50%</div>
            </div>
            <div class="project-name">{{item.creater.name}}</div>
          </li>
        </ul>
      </div>
      <div class="project-Details">
        <div class="project-Details-header">
          <div class="goal-slider" v-on:click="toggleProjectAll"></div>
          <div class="head-info">
            <div class="project-avatar">
              <img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt="">
              <div class="project-percentage">50%</div>
            </div>
            <div class="project-name">11111111111111111111111111111111111111111111111111111111111111111111111111111</div>
          </div>
          <ul>
            <li>最新动态</li>
            <li>计划任务</li>
            <li>关联文档</li>
            <li>关联日程</li>
            <li>更多关联</li>
            <li>统计</li>
            <li>项目报告</li>
          </ul>
        </div>
        <div class="project-Details-body">
          <div class="title-list">
            <ul class="list-ul">
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
                      <input placeholder="搜索人员" data-entity="employee-manager" class="typehead form-control" name="username">
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
                      <input placeholder="搜索人员" data-entity="employee-manager" class="typehead form-control" name="username">
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
                      <input placeholder="搜索标签" data-entity="employee-manager" class="typehead form-control" name="username">
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
              <li class="list-li list-rotate">
                <div class="list-box">
                  <a>
                    <span>排序</span>
                    <i class="el-icon-caret-bottom"></i>
                  </a>
                  <ul>
                    <li style="margin-top: 5px">默认</li>
                    <li>按反馈时间</li>
                    <li>按任务更新时间</li>
                    <li>按任务创建时间(最新)</li>
                    <li>按任务创建时间(最早)</li>
                    <li>按任务到期时间(最新)</li>
                    <li style="margin-bottom: 5px">按任务到期时间(最早)</li>
                    <li>按负责人</li>
                    <li>按紧急程度</li>
                    <li>按任务类型</li>
                    <li>按拖动顺序</li>
                  </ul>
                </div>
              </li>
              <li class="list-li">
                <div class="input-group">
                  <div class="input-group-left">
                    <input class="form-control" type="text" name="mainlinesearch" placeholder="任务搜索" maxlength="255">
                    <a class="form-control-feedback">
                      <i class="el-icon-search"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="list-li list-li-right">
                <div class="list-box list-addProject">
                  <a @click="dialogVisible = true" style="color:#666;float: left;border-top-right-radius: 0px;border-bottom-right-radius: 0;border-right: 0px;">
                    <i class="el-icon-plus" style="font-size: 10px;display: inline-block;line-height: 0"></i>
                    <el-button type="text"  style="line-height: 0;color: #666;padding: 0;font-size:12px;">新建任务分组</el-button>
                  </a>
                  <span>
                <a style="color:#666;float: left;border-top-left-radius: 0px;border-bottom-left-radius: 0;border-left: 1px solid #ddd;">
                  <i class="el-icon-arrow-down"></i>
                </a>
              </span>
                </div>
              </li>
              <li class="list-li list-rotate list-li-right">
                <div class="list-box">
                  <a>
                    <span>普通视图</span>
                    <i class="el-icon-caret-bottom"></i>
                  </a>
                  <ul>
                    <li style="margin-top: 5px">普通视图</li>
                    <li>日期分类</li>
                    <li>看板视图</li>
                    <li style="margin-bottom: 5px">甘特图</li>
                  </ul>
                </div>
              </li>
              <li class="list-li list-li-right">
                <div class="list-box">
                  <a>
                    <span>全部折叠</span>
                  </a>
                </div>
              </li>
              <li class="list-li list-li-right">
                <div class="list-box">
                  <a style="border:0">
                    <i class="icoinline icon-checkbox-unchecked"></i>
                    包括已完成
                  </a>
                </div>
              </li>
              <li style="clear: both; list-style: none"></li>
            </ul>
          </div>
          <div class="task">
            <ul class="task-ul">
              <li class="task-li" v-for='(item, index) in taskList' :key="index">
                <div class="task-header">
                  <span style="cursor:text;">{{item.name}}</span>
                  <i class="el-icon-arrow-right"></i>
                  <span class="icon-reorder"></span>
                  <a style="cursor:pointer;"><i class="el-icon-menu"></i></a>
                  <b style="cursor:pointer;" v-on:click="addTask"><i class="el-icon-plus"></i></b>
                </div>
                <ul style="border: 1px solid #eaeaea;">
                  <li v-if="taskToggle">
                    <span style="border-bottom: 1px solid #efefef;">1.</span>
                    <div class="task-content">
                      <div class="task-name"><input @blur="searchHide" v-model="projectName" type="text" v-focus="focusStatus"></div>
                    </div>
                    <div class="shortcut">
                      <span><i class="el-icon-star-off"></i>关注</span>
                      <span><i class="el-icon-star-off"></i>标记完成</span>
                      <span><i class="el-icon-star-off"></i>共享</span>
                    </div>
                  </li>
                  <li v-for="(childrenItem, index) in item.childrenList" v-if='item.childrenList.length>0' :key="index" :id="childrenItem.id" v-on:click.stop="modify(childrenItem.id)">
                    <span style="border-bottom: 1px solid #efefef;">1.</span>
                    <div class="task-content">
                      <div class="task-name"><span>{{childrenItem.note}}</span></div>
                      <!--<div class="percent">50%</div>-->
                    </div>
                    <div class="shortcut">
                      <span><i class="el-icon-star-off"></i>关注</span>
                      <span><i class="el-icon-star-off"></i>标记完成</span>
                      <span><i class="el-icon-star-off"></i>共享</span>
                    </div>
                  </li>
                  <li v-if='!taskToggle && item.childrenList.length<=0' @click="addTask(item.id)" style="padding-left: 10px;color: #ccc;"><i style="margin-right: 5px" class="el-icon-plus"></i>添加新任务</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="module-detail-slide" @click.stop="state = true" :class="state?'module-detail-slide-active':''">
        <div class="detail-header">
          <div class="detail-brand">
            <i class=""></i>
            任务
          </div>
          <div class="detail-actions">
            <ul>
              <li @click="taskDelete"><a><i class="el-icon-delete"></i>删除</a></li>
              <li><a><i class="el-icon-setting"></i>锁定</a></li>
              <li>
                <a class="dropdown"><i class="el-icon-setting"></i>更多</a>
              </li>
              <li class="detail-li"><a>x</a></li>
            </ul>
          </div>
        </div>
        <div class="scrollwrapper">
          <div class="detail-summary">
            <div class="summary-avatar">
              <img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt="">
            </div>
            <div class="summary-title">
              <input type="text" placeholder="一句话描述任务..." v-model="taskName" @blur="addTaskName" v-on:input ="inputTaskName">
            </div>
          </div>
          <div class="detail-block">
            <div class="sernum-div">
              <div class="detail-infos">
                <div class="info-item">
                  <span class="title">负责人:</span>
                  <div class="controls">
                    <div class="entity-container">
                      <div class="entity-item" v-if="taskAvatar!==''">
                        <a>
                          <img :src="taskAvatar" alt="">
                          <span>{{taskHead}}</span>
                        </a>
                      </div>
                    </div>
                    <i style="margin-left: 3px;cursor: pointer;" class="icon-pencil el-icon-edit-outline"></i>
                  </div>
                </div>
                <!--<div class="info-item">-->
                  <!--<span class="title">负责人:</span>-->
                  <!--<el-date-picker-->
                    <!--v-model="value1"-->
                    <!--type="date"-->
                    <!--placeholder="选择日期">-->
                  <!--</el-date-picker>-->
                <!--</div>-->
                <div class="info-item">
                  <span class="title">是否完成:</span>
                  <div class="info-item-state" @mouseover='taskStateShow' @mouseout="taskStateHide">
                    <a style="margin-left: 10px" v-if="taskStateIndex==0">
                      <i></i>
                      未完成
                    </a>
                    <a style="margin-left: 10px" v-if="taskStateIndex==1">
                      <i style="background-color: #ffba38;"></i>
                      已完成
                    </a>
                    <ul style="z-index: 1" :class="taskState?'activeUl':''">
                      <li @click="chooseState(0)"><a><i style="background-color: #eee"></i>未完成</a></li>
                      <li @click="chooseState(1)"><a><i style="background-color: #ffba38"></i>已完成</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-block">
            <!--<div class="control-group">-->
              <!--<div class="control-label">参与人员：</div>-->
              <!--<div class="controls">-->
                <!--<div class="entity-container">-->
                  <!--<span class="entity-item"><a><img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt=""><span>土魁</span></a></span>-->
                <!--</div>-->
                <!--<span class="entity-item-add el-icon-circle-plus-outline"></span>-->
              <!--</div>-->
              <!--<span class="typeahead-wrapper">-->
                <!--<input type="text" class="typeahead" placeholder="输入姓名">-->
                <!--<div class="tt-suggestion">-->
                  <!--<div id="searchListWrap">-->
                    <!--<p class="employee" title="土魁"><img class="avatar" src="https://www.eteams.cn/static/images/avatar.png"><span style="padding-right: 0px;">土魁</span></p>-->
                    <!--<a class="invite-toggle fetion__hide decoration-none" type="modal"><p class="employee invite" title="邀请同事加入eteams"><i class="icon-plus-thin"></i> 邀请同事</p></a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</span>-->
            <!--</div>-->
            <!--<div class="control-group">-->
              <!--<div class="control-label">进度：</div>-->
              <!--<el-progress :percentage="70"></el-progress>-->
            <!--</div>-->
            <!--<div class="control-group">-->
              <!--<div class="control-label">共享: </div>-->
              <!--<div class="controls">-->
                <!--<div class="entity-container">-->
                  <!--<span class="entity-item"><a><img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt=""><span>土魁</span></a></span>-->
                <!--</div>-->
                <!--<span class="entity-item-add el-icon-circle-plus-outline"></span>-->
              <!--</div>-->
              <!--<span class="typeahead-wrapper">-->
                <!--<input type="text" class="typeahead" placeholder="输入姓名">-->
                <!--<div class="tt-suggestion">-->
                  <!--<div id="searchListWrap">-->
                    <!--<p class="employee" title="土魁"><img class="avatar" src="https://www.eteams.cn/static/images/avatar.png"><span style="padding-right: 0px;">土魁</span></p>-->
                    <!--<a class="invite-toggle fetion__hide decoration-none" type="modal"><p class="employee invite" title="邀请同事加入eteams"><i class="icon-plus-thin"></i> 邀请同事</p></a>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</span>-->
            <!--</div>-->
            <div class="control-group">
              <div class="control-label">起   始   日:</div>
              <el-date-picker
                v-model="taskDate"
                type="daterange"
                range-separator="至"
                format="yyyy.MM.dd"
                value-format="yyyy.MM.dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="obtainDate">
              </el-date-picker>
            </div>
          </div>
          <div class="detail-block table">
            <div class="tab-header" style="border-bottom: 1px solid #eaeaea;">
              <ul>
                <li><a>评论</a></li>
              </ul>
            </div>
            <div class="tab-conter" style="padding-bottom: 100px;">
              <div class="tab-release" style="overflow: hidden">
                <img src="https://test.wangtang.com.cn/dist/img/avatar5.png" alt="">
                <textarea v-model="published" name="" id="" cols="30" rows="10"></textarea>
                <button style="float: right;margin: 10px;" @click="taskPublished">发表</button>
              </div>
              <div class="tab-list" v-if="taskComments.length > 0" v-for="(item, index) in taskComments" :key="index">
                <img :src="item.member.avatar" alt="">
                <div class="tab-list-information">
                  <div style="margin-bottom: 2px;color: #fb6e52;line-height: 24px;">{{item.member.name}}</div>
                  <div style="line-height: 24px;">{{item.note}}</div>
                  <!--<div style="margin-top: 2px;font-size: 13px;line-height: 24px;">item.member.time</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import common from '../../static/common/common.js'
export default {
  data () {
    return {
      projectAll: true,
      radio: false,
      projectList: [],
      value1: '',
      state: false,
      taskToggle: false,
      focusStatus: true,
      id: null,
      projectName: '',
      projectId: null,
      message: 'jk',
      taskName: '',
      taskHead: '',
      taskAvatar: '',
      taskDate: [],
      taskComments: [],
      published: '',
      task: {},
      taskId: '',
      taskState: false,
      taskStateIndex: 0,
      staging: {
        taskName: ''
      },
      taskList: [
        {
          id: '0',
          name: '计划中',
          childrenList: []
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
  mounted: function () {
    var that = this
    const params = new URLSearchParams()
    params.append('userToken', common.userToken)
    params.append('no', 1)
    params.append('size', 10)
    that.axios.post(common.url + '/project/my.htm', params)
      .then(res => {
        console.log(res)
        that.projectList = res.data.list
        that.projectAll = !this.projectAll
      }, res => {})
    that.projectId = that.$route.query.id
    const params2 = new URLSearchParams()
    params2.append('userToken', common.userToken)
    params2.append('id', that.projectId)
    that.axios.post(common.url + '/project/findbyid.htm', params2)
      .then(res => {
        console.log(res)
        if (res.data.code === 0) {
          that.taskList[0].childrenList = res.data.tasks
        } else {
          that.$message({
            message: '任务加载失败',
            type: 'error'
          })
        }
      }, res => {
        this.$message({
          message: '任务加载失败',
          type: 'error'
        })
      })
  },
  methods: {
    taskDelete: function () {
      var that = this
      const params = new URLSearchParams()
      params.append('userToken', common.userToken)
      params.append('id', that.taskId)
      that.axios.post(common.url + '/task/delete.htm', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            that.$message({
              message: '删除成功',
              type: 'success'
            })
          } else {
            that.$message({
              message: '删除失败',
              type: 'error'
            })
          }
        }, res => {
          that.$message({
            message: '删除失败',
            type: 'error'
          })
        })
    },
    taskPublished: function () {
      if (this.published !== '') {
        var that = this
        const params = new URLSearchParams()
        params.append('userToken', common.userToken)
        params.append('id', that.taskId)
        params.append('note', that.published)
        that.axios.post(common.url + '/task/comment.htm', params)
          .then(res => {
            console.log(res)
            if (res.data.code === 0) {
              const params1 = new URLSearchParams()
              params1.append('userToken', common.userToken)
              params1.append('id', that.taskId)
              params1.append('no', 1)
              params1.append('size', 10)
              that.axios.post(common.url + '/task/page.htm', params1)
                .then(res => {
                  console.log(res)
                  if (res.data.code === 0) {
                    that.taskComments = res.data.list
                    that.published = ''
                    that.$message({
                      message: '发表成功',
                      type: 'success'
                    })
                  }
                }, res => {})
            } else {
              that.$message({
                message: '发表失败',
                type: 'error'
              })
            }
          }, res => {
            that.$message({
              message: '发表失败',
              type: 'error'
            })
          })
      } else {
        this.$message({
          message: '发表失败',
          type: 'error'
        })
      }
    },
    chooseState: function (id) {
      var that = this
      const params = new URLSearchParams()
      params.append('userToken', common.userToken)
      params.append('id', that.taskId)
      that.axios.post(common.url + '/task/toggle.htm', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 0 || res.data.code === 1) {
            that.taskState = false
            that.taskStateIndex = res.data.code
            that.$message({
              message: '任务状态修改成功',
              type: 'success'
            })
          } else {
            that.$message({
              message: '任务状态修改失败',
              type: 'error'
            })
          }
        }, res => {
          that.$message({
            message: '任务状态修改失败',
            type: 'error'
          })
        })
    },
    taskStateShow: function () {
      this.taskState = true
    },
    taskStateHide: function () {
      this.taskState = false
    },
    obtainDate: function (val) {
      var that = this
      if (val !== null) {
        console.log(val)
        const params = new URLSearchParams()
        params.append('userToken', common.userToken)
        params.append('id', that.taskId)
        params.append('deadline', Date.parse(val[1]))
        params.append('beginDate', Date.parse(val[0]))
        that.axios.post(common.url + '/task/update.htm', params)
          .then(res => {
            console.log(res)
            if (res.data.code === 0) {
              that.taskDate = val
              that.$message({
                message: '任务时间修改成功',
                type: 'success'
              })
            } else {
              that.$message({
                message: '任务时间修改失败',
                type: 'error'
              })
            }
          }, res => {
            that.$message({
              message: '任务时间修改失败',
              type: 'error'
            })
          })
      } else {
        that.taskDate = []
        that.$message({
          message: '任务时间修改失败',
          type: 'error'
        })
      }
    },
    inputTaskName: function () {
      this.staging.taskName = this.taskName
    },
    addTaskName: function (e) {
      var that = this
      if (that.taskName === that.staging.taskName) {
        const params = new URLSearchParams()
        params.append('userToken', common.userToken)
        params.append('id', that.taskId)
        params.append('note', that.taskName)
        that.axios.post(common.url + '/task/update.htm', params)
          .then(res => {
            console.log(res)
            if (res.data.code === 0) {
              const params2 = new URLSearchParams()
              params2.append('userToken', common.userToken)
              params2.append('id', that.projectId)
              that.axios.post(common.url + '/project/findbyid.htm', params2)
                .then(res => {
                  console.log(res)
                  if (res.data.code === 0) {
                    that.$message({
                      message: '任务名称修改成功',
                      type: 'success'
                    })
                    that.taskList[0].childrenList = res.data.tasks
                  } else {
                    that.$message({
                      message: '任务名称修改失败',
                      type: 'error'
                    })
                  }
                }, res => {
                  that.$message({
                    message: '任务名称修改失败',
                    type: 'error'
                  })
                })
            } else {
              that.$message({
                message: '任务名称修改失败',
                type: 'error'
              })
            }
          }, res => {
            that.$message({
              message: '任务名称修改失败',
              type: 'error'
            })
          })
      }
    },
    toggleProjectAll: function () {
      console.log('11111')
      this.projectAll = !this.projectAll
    },
    completed: function () {
      console.log(111)
    },
    modify: function (id) {
      var that = this
      that.state = true
      that.taskId = id
      const params = new URLSearchParams()
      params.append('userToken', common.userToken)
      params.append('id', id)
      that.axios.post(common.url + '/task/findbyid.htm', params)
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            that.task = res.data
            that.taskName = res.data.note
            that.taskStateIndex = res.data.state
            that.taskDate.splice(0, 2, res.data.beginDate.split(' ')[0], res.data.deadline.split(' ')[0])
          }
        }, res => {})
      const params1 = new URLSearchParams()
      params1.append('userToken', common.userToken)
      params1.append('id', id)
      params1.append('no', 1)
      params1.append('size', 10)
      that.axios.post(common.url + '/task/page.htm', params1)
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            that.taskComments = res.data.list
          }
        }, res => {})
    },
    addTask: function (id) {
      this.focusStatus = true
      this.taskToggle = true
      this.id = id
      this.projectName = ''
    },
    searchHide: function () {
      var that = this
      that.taskToggle = false
      that.id = null
      console.log(that.projectId)
      if (that.projectName !== '') {
        const params = new URLSearchParams()
        params.append('userToken', common.userToken)
        params.append('name', that.projectName)
        params.append('note', that.projectName)
        params.append('project', that.projectId)
        that.axios.post(common.url + '/task/create.htm', params)
          .then(res => {
            console.log(res)
            if (res.data.code === 0) {
              const params2 = new URLSearchParams()
              params2.append('userToken', common.userToken)
              params2.append('id', that.projectId)
              that.axios.post(common.url + '/project/findbyid.htm', params2)
                .then(res => {
                  console.log(res)
                  if (res.data.code === 0) {
                    that.$message({
                      message: '任务创建成功',
                      type: 'success'
                    })
                    that.taskList[0].childrenList = res.data.tasks
                  }
                }, res => {})
            } else {
              that.$message({
                message: '任务创建失败',
                type: 'error'
              })
            }
          }, res => {
            this.$message({
              message: '任务创建失败',
              type: 'error'
            })
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .projectDetails{
    display: flex;
    table-layout: fixed;
    width: 100%;
    position: relative;
    height:100%;
  }
  .projectAll{
    width: 270px;
    border-right: 1px solid #eaeaea;
    background-color: #fff;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition: all .3s;
  }
  .projectAllActive{
    transform: translateX(-270px) translateY(0px);
    width: 0px;
  }
  .project-title{
    padding: 15px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
  }
  .project-title i{
    background-position: -47px -16px;
    height: 17px;
    vertical-align: -4px;
    margin: 0 8px 0 0;
    width: 17px;
    background-image: url('../assets/icon.png');
    background-size: 400px 1350px;
    display: inline-block;;
  }
  .project-title span{
    vertical-align: middle;
  }
  .projectAll ul{
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    height: 100%;
  }
  .projectAll ul li{
    padding: 10px 15px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
    border-bottom: 1px solid #ddd;
    transition: all 0.05s;
  }
  .projectAll ul li:hover{
    background: #f2f2f2;
  }
  .projectAll ul li .project-avatar{
    height: 40px;
    width: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 8px;
    float: left;
    overflow: hidden;
  }
  .projectAll ul li img{
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
  .projectAll ul li .project-avatar .project-percentage{
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
    background: rgba(0,0,0,0.3);
    height: 100%;
    width: 100%;
  }
  .projectAll ul li .project-name{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
    margin-left: 50px;
    color: #7f8284;
    font-size: 12px;
  }
  .project-Details{
    display: table-cell;
    vertical-align: top;
    float: none !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .project-Details-header{
    height: 70px;
    position: relative;
    z-index: 201;
    border-bottom: 1px solid #eaeaea;
  }
  .project-Details-header .goal-slider {
    float: left;
    height: 48px;
    margin: 11px 0 0 0;
    width: 16px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 0 3px 3px 0;
    position: relative;
    border-left: 0;
    cursor: pointer;
  }
  .project-Details-header .goal-slider:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 3px;
    border-style: solid;
    border-color: #b2b2b2;
    border-width: 1px 1px 0 0;
    height: 6px;
    width: 6px;
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .project-Details-header .head-info {
    margin: 9px 0 0 32px;
    overflow: hidden;
  }
  .project-Details-header .head-info .project-avatar{
    height: 51px;
    width: 51px;
    line-height: 51px;
    position: relative;
    border-radius: 8px;
    float: left;
    overflow: hidden;
  }
  .project-Details-header .head-info img{
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
  .project-Details-header .head-info .project-avatar .project-percentage{
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
    background: rgba(0,0,0,0.3);
    height: 100%;
    width: 100%;
  }
  .project-Details-header .head-info .project-name{
    float: left;
    font-size: 18px;
    color: #666;
    margin-left: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
    font-weight: 100;
  }
  .project-Details-header ul{
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 100px;
  }
  .project-Details-header ul li{
    float: left;
    margin-right: 30px;
    color: #999;
    display: block;
    font-size: 13px;
    line-height: 32px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    -webkit-transition: background-color .2s linear,color .2s linear;
    -o-transition: background-color .2s linear,color .2s linear;
    transition: background-color .2s linear,color .2s linear;
    cursor: pointer;
  }
  .project-Details-header ul li:hover{
    color: #2dc3e8;
    border-bottom-color: #2dc3e8;
  }
  .project-Details-body{
    height:100%;
  }
  .title-list .list-ul{
    padding: 0;
    margin: 10px 0 0 20px;
  }
  .title-list .list-li{
    float: left;
    margin-right: 10px;
    list-style: none;
  }
  .title-list .list-li .list-box{
    position: relative;
  }
  .title-list .list-li a {
    border: 1px solid #ddd;
    padding: 7px 10px;
    font-size: 12px;
    border-radius: 3px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition: all .1s;
  }
  .title-list .list-li .list-box a:hover {
    background-color: #fff;
  }
  .title-list .list-rotate .list-box:hover i{
    transform:rotate(-90deg);
  }
  .title-list .list-li ul{
    position: absolute;
    top: 28px;
    left: 0px;
    background-color: #fff;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    max-height: 0px;
    overflow: hidden;
    webkit-transition: max-height .0s ease-in .0s;
    transition: max-height .0s ease-in .0s;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;
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
    top: 28px;
    left:0px;
    background-color: #fff;
    text-align: left;
    max-height: 0;
    overflow: hidden;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    z-index: 1;
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
    padding: 6.5px 10px;
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
    width: 110px;
    margin-bottom: 0;
    background-color: #f9f9f9;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-left: 25px;
  }
  .form-control {
    padding-right: 25px;
  }
  .title-list .list-li .form-control-feedback {
    position: absolute;
    top: 0;
    left: 0px;
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
    padding: 5px 10px;
    border: 1px solid #ddd;
    line-height: 18px;
    height: 21px;
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
  }
  .el-icon-close{
    transform:rotate(-45deg);
  }
  .title-list .list-li-right .list-addProject span a:hover i{
    transform:rotate(-90deg);
    background-color: #fff;
  }
  .task{
    padding: 0 20px;
  }
  .task ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .task .task-li{

  }
  .task .task-li .task-header {
    font-size: 14px;
    color: #666;
    line-height: 25px;
    padding: 10px 5px;
    position: relative;
    cursor: move;
    background: #f9f9f9;
    overflow: hidden;
  }
  .task .task-li .task-header a{
    float: right;
    padding: 0 10px;
    color: #9f9f9f;
    display: block;
    border-width: 1px 1px 0;
    border-color: transparent;
    border-style: solid;
  }
  .task .task-li .task-header b{
    float: right;
  }
  .task .task-li li{
    margin: 0;
    padding: 0;
    list-style: none;
    min-height: 44px;
    line-height: 44px;
    cursor: pointer;
    position: relative;
    color: #333;
    background: #fff;
  }
  .task .task-li li:after{
    background: #f3f3f3;
    display: block!important;
  }
  .task .task-li li:hover{
    background-color: #efefef;
  }
  .task .task-li li input{
    border: 0px;width: 100%;
    height: 44px;
    margin-left: 15px;
    background-color: #fff;
  }
  .task .task-li li:hover input{
    background-color: #efefef;
  }
  .task .task-li li span{
    height: 44px;
    margin: 0 0px 0 15px;
    text-align: center;
    display: inline-block;
    float: left;
    padding-left: 7px;
  }
  .task .task-li .task-content{
    overflow: hidden;
    text-align: left;
    border-bottom: 1px solid #efefef
  }
  .task .task-li .task-content .task-name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 70px;
    display: block;
    max-width: 100%;
    float: left;
  }
  .task .task-li .task-content .task-name span{
    margin: 0;
  }
  .task .task-li .task-content .percent{
    font-size: 12px;
    margin-left: -60px;
    margin-top: 12px;
    border-radius: 2px;
    color: #2dc3e8;
    border: 1px solid #2dc3e8;
    padding: 0 8px;
    vertical-align: top;
    max-width: 60px;
    line-height: 16px;
    float: left;
  }
  .task .task-li .shortcut{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 12px;
    color: #777;
  }
  .task .task-li .shortcut span{
    color: #141414;
    padding: 0 10px;
    float: left;
    width: auto;
    margin: 0;
  }
  .task .task-li .shortcut span:hover{
    background-color: #ececec;
  }
  .module-detail-slide {
    transition: transform ease-in-out .5s;
    transform: translateX(800px) translateY(0px);
    position: fixed;
    top: 50px;
    right: 0px;
    z-index: 1000;
    background: #f9f9f9;
    border-left: 1px solid #ddd;
    width: 800px;
    box-shadow: -3px 0 4px rgba(0,0,0,0.1);
    height: 100%;
  }
  .module-detail-slide-active{
    transform: translateX(0px) translateY(0px);
  }
  .detail-header {
    background: #f5f5f5;
    min-height: 50px;
    border-bottom: 1px solid #ddd;
  }
  .detail-brand {
    margin: 7px 0 0 20px;
    font-weight: bold;
    color: #454545;
    float: left;
    line-height: 36px;
    font-size: 16px;
  }
  .detail-brand i {
    background-position: -36px -120px;
    margin-right: 12px;
    margin-left: -10px;
    height: 36px;
    width: 36px;
    background-image: url('../assets/icon.png');
    background-size: 400px 1350px;
    display: inline-block;
    vertical-align: middle;
  }
  .detail-actions{
    float: right;
  }
  .detail-actions ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .detail-actions li{
    float: left;
    line-height: 50px;
    cursor: pointer;
  }
  .detail-actions li a{
    height: 50px;
    line-height: 50px;
    padding: 0 12px;
    color: #454545;
    display: block;
    text-decoration: none;
  }
  .detail-actions li a i{
    margin-right: 5px;
    color: #a4a4a4;
  }
  .detail-actions li a:hover{
    background-color: #eee;
  }
  .detail-actions .dropdown:hover{
    background-color: #fff;
  }
  .detail-actions .detail-li a{
    font-size: 28px;
    border-left: 1px solid #ddd;
    font-weight: 100;
    line-height: 46px;
    font-family: 'PingFangSC-Light','Hiragino Sans GB',Microsoft YaHei Light,Microsoft YaHei,Arial,sans-serif;
  }
  .scrollwrapper {
    overflow-y: auto;
    position: relative;
    height: 100%;
    max-width: 100%;
    outline: 0;
    direction: ltr;
  }
  .detail-summary {
    padding: 15px 0;
    margin: 0 18px;
  }
  .detail-summary .summary-avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .detail-summary .summary-avatar img {
    height: 100%;
    width: 100%;
  }
  .detail-summary .summary-title {
    margin-left: 36px;
    font-weight: bold;
  }
  .detail-summary .summary-title input{
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
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 30px;
    outline: 0;
  }
  .detail-summary .summary-title input:hover{
    background-color: #ddd;
  }
  .detail-block {
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    margin: 0 18px 13px;
  }
  .sernum-div {
    /*border-bottom: 1px solid #eaeaea;*/
    /*padding: 10px 17px;*/
  }
  .detail-infos {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .info-item {
    display: table-cell;
    vertical-align: top;
    width: 33.3333%;
    padding: 6px 17px;
    line-height: 30px;
    border-right: 1px solid #ececec;
  }
  .info-item .title{
    color: #666;
    float: left;
    font-size: 12px;
    font-weight: bold;
  }
  .controls{
    margin-top: -3px;
    display: inline;
  }
  .entity-container{
    margin-left: 10px;
    position: relative;
    float: left;
    margin-top: -3px;
  }
  .entity-container a{
    display: inline-block;
    vertical-align: middle;
    padding: 0 15px 0 0;
    vertical-align: top;
  }
  .entity-container img{
    border-radius: 50%;
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
  .entity-container span{
    margin-left: 5px;
    max-width: 69px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
  }
  .el-input{
    width: 160px;
    float: left;
    margin-left: 10px;
  }
  .el-input__inner{
    height: 30px;
    line-height: 30px;
  }
  .info-item .info-item-state{
    line-height: 30px;
    position: relative;
    cursor: pointer;
    font-family: 'PingFangSC-Light','Hiragino Sans GB',Microsoft YaHei Light,Microsoft YaHei,Arial,sans-serif;
    font-size: 14px;
    color: #333;
    float: left;
  }
  .info-item .info-item-state ul{
    list-style: none;
    margin: 0;
    position: absolute;
    top: 30px;
    left: 0px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-color: #fff;
    max-height: 0px;
    overflow: hidden;
  }
  .info-item .info-item-state .activeUl{
    transition: all .3s ease-in 0s;
    max-height: 500px;
    padding: 5px 0;
  }
  .info-item .info-item-state i{
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #eee;
    vertical-align: middle;
  }
  .info-item .info-item-state ul a{
    display: block;
    padding: 5px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    font-size: 14px;
  }
  .info-item .info-item-state ul a:hover{
    background-color: #53b6eb;
    color: #fff;
  }
  .info-item .info-item-state:hover ul{
    display: block;
  }
  .control-group {
    padding: 6px 20px;
    margin-bottom: 0;
    border-bottom: 1px solid #eaeaea;
    overflow: hidden;
  }
  .control-group .control-label {
    float: left;
    line-height: 30px;
    color: #999;
    white-space: nowrap;
    margin: 0;
    padding-top: 0;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
  }
  .control-group .controls {
    position: relative;
  }
  .entity-container {
    display: inline;
    margin: 0 3px 0 0;
    margin-top: -2px;
  }
  .entity-item {
    display: inline-block;
    vertical-align: middle;
    padding: 0 15px 0 0;
  }
  .entity-item a {
    line-height: 30px;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    max-width: 410px;
  }
  .entity-item img {
    border-radius: 50%;
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
  .entity-item img+span {
    margin-left: 5px;
    max-width: 69px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
  }
  .entity-item-add{
    font-size: 28px;
    color: #999;
    float: left;
  }
  .typeahead-wrapper {
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #ccc;
    display: none;
  }
  input.typeahead {
    width: 120px;
    height: 28px;
    margin: 0;
    line-height: 20px;
    padding: 4px 10px;
    float: left;
    border: 0;
    box-sizing: border-box;
  }
  .tt-suggestion {
    position: absolute;
    z-index: 100;
    height: auto;
    padding: 0;
    margin: 28px 0 0 -1px;
    display: block;
    background-color: #fff;
  }
  .tt-suggestion #searchListWrap {
    max-height: 310px;
    overflow-y: auto;
  }
  .tt-suggestion p {
    height: 28px;
    line-height: 22px!important;
    width: 140px;
    margin: 0;
    padding: 3px 5px;
    word-break: keep-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tt-suggestion p:hover{
    background-color: #2dc3e8;
    color: #fff;
  }
  .tt-suggestion p img{
    height: 20px;
    width: 20px;
    margin-right: 5px;
    vertical-align: -5px;
  }
  .tt-suggestion p>span {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }
  .typeahead-search {
    position: relative;
    height: 28px;
    width: 20px;
    padding: 3px;
    margin: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    float: right;
  }
  .typeahead-search i {
    color: #08c;
    font-size: 14px;
    line-height: 18px;
  }
  .tab-header ul{
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .tab-header ul li{
    width: 25%;
    padding: 0 18px;
    margin: 0;
    float: left;
    text-align: center;
  }
  .tab-header ul>li>a {
    display: inline-block;
    padding: 0 10px;
    line-height: 45px;
    color: #777;
    border-bottom: 2px solid #2dc3e8;
    border-top: 2px solid #fff;
    cursor: pointer;
  }
  .tab-release{
    padding: 15px 15px 0 64px;
    position: relative;
  }
  .tab-release img{
    height: 38px;
    width: 38px;
    position: absolute;
    margin: -2px 0 0 -51px;
    cursor: pointer;
    border-radius: 50%;
  }
  .tab-release textarea{
    width: 100%;
    min-height: 40px;
  }
  .tab-list{
    border-top: 1px dashed #f7fdff;
    background-color: #fff;
    padding: 18px 10px 10px 64px;
    overflow: hidden;
  }
  .tab-list img{
    height: 38px;
    width: 38px;
    position: absolute;
    margin: -2px 0 0 -51px;
    cursor: pointer;
    border-radius: 50%;
  }
  .tab-list .tab-list-information{
    float: left;
  }
</style>
