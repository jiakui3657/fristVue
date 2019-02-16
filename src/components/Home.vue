<template>
  <div class="container">
    <el-container>
      <el-header style="height: 50px">
        <Header></Header>
      </el-header>
      <router-view>
        <Content></Content>
        <Start></Start>
      </router-view>
    </el-container>
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Start from './Start.vue'
export default {
  components: {
    Header,
    Content,
    Start
  },
  data () {
    return {
      id: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
