<template>
  <div class="aside">
    <ul>
      <li v-for="(item,index) in leftList" :key="index">
        <div class="title" v-on:click="leftTitle(index,item.childrenList.length)" v-if="item.childrenList.length != 0">
          {{item.title}}
          <i class="el-icon-setting" v-if="index==0"></i>
          <i class="el-icon-arrow-right" v-if="item.childrenList.length > 0"></i>
        </div>
        <div class="title" :class="titleIndex==index ? 'titleActive' : '' " @click="addTitleClass(index)" v-if="item.childrenList.length == 0">
          <!--<a style="padding: 0">{{item.title}}</a>-->
          <router-link :to="item.routing" style="padding: 0">{{item.title}}</router-link>
        </div>
        <ul :class=" leftIndex == index && leftFlag ? 'active' : '' ">
          <li v-for="(children, index) in item.childrenList" :key="index" v-on:click="addListClass(index)">
            <!--<a :class="listIndex==index?'listActive':''">{{children.name}}</a>-->
            <router-link :to="children.routing" :class="listIndex==index?'listActive':''" @click.native="addListClass(index)">{{children.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftIndex: 0,
      leftFlag: true,
      titleIndex: null,
      listIndex: 0,
      leftList: [
        {
          title: '项目',
          routing: 'mine',
          childrenList: [
            {
              name: '我的项目',
              routing: 'mine'
            },
            {
              name: '关注的项目',
              routing: 'watched'
            },
            {
              name: '共享给我的项目',
              routing: 'shareToMe'
            },
            {
              name: '已关闭的项目',
              routing: 'finished'
            },
            {
              name: '全部项目',
              routing: 'all'
            }
          ]
        },
        {
          title: '团队项目模板',
          childrenList: [],
          routing: 'mtcategory'
        },
        {
          title: '项目统计',
          routing: 'mine',
          childrenList: [
            {
              name: '项目统计报表',
              routing: ''
            },
            {
              name: '项目列表统计',
              routing: ''
            },
            {
              name: '项目成员统计',
              routing: ''
            }
          ]
        },
        {
          title: '项目设置',
          routing: 'mine',
          childrenList: []
        },
        {
          title: '回收站',
          childrenList: [],
          routing: 'recylce'
        }
      ]
    }
  },
  created: function () {
    var id = this.$route.query.id
    console.group('------created创建完毕状态------')
    console.log(id)
    this.router.push({path: '/home/content/' + this.leftList[0].routing})
  },
  methods: {
    getPath: function () {
      console.log(this.$route.path)
    },
    fun: function () {
    },
    leftTitle: function (index) {
      this.titleIndex = null
      if (index === this.leftIndex) {
        this.leftIndex = index
        this.leftFlag = !this.leftFlag
      } else {
        this.leftIndex = index
        this.leftFlag = true
        this.listIndex = 0
      }
    },
    addTitleClass: function (index) {
      this.titleIndex = index
      this.listIndex = null
    },
    addListClass: function (index) {
      console.log(1111)
      this.listIndex = index
      this.titleIndex = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
    padding: 0;
    margin-top: 17px;
  }
  ul li{
    padding: 0;
    margin: 0;
  }
  ul li .title{
    font-size: 14px;
    display: block;
    padding: 8px 22px 8px 30px;
    line-height: 20px;
    color: #3c3c3c;
    text-decoration: none;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
    cursor: pointer;
  }
  ul li .title:before{
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
    background: #53b6eb;
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
  }
  ul li .titleActive:before{
    width: 3px;
  }
  ul li a{
    font-size: 14px;
    display: block;
    padding: 8px 22px 8px 30px;
    line-height: 20px;
    color: #3c3c3c;
    text-decoration: none;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
  }
  ul li ul{
    margin-top: 0px;
    overflow: hidden;
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
    height: 0;
  }
  ul li .active{
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
    height: auto;
  }
  ul li ul li a{
    padding-left: 40px;
    font-size: 13px;
  }
  ul li ul li a:before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
    background: #53b6eb;
    -webkit-transition: all .15s linear;
    -ms-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear;
  }
  ul li ul li .listActive:before{
    width: 3px;
  }
  ul li .title .el-icon-arrow-right {
    transition: all .15s ease;
    position: absolute;
    right: 15px;
    top: 11px;
  }
  ul li .title .el-icon-setting {
    transition: all .15s ease;
    position: absolute;
    right: 35px;
    top: 11px;
  }
</style>
