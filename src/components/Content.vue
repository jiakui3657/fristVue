<template>
    <div class="content">
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <router-view>
            <Mine></Mine>
            <Watched></Watched>
          </router-view>
        </el-main>
      </el-container>
    </div>
</template>

<script>
import Aside from './Aside.vue'
import Mine from './Mine.vue'
import Watched from './Watched.vue'

export default {
  components: {
    Aside,
    Mine,
    Watched
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  height: 100%;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  margin-top: 50px;
}
</style>
