<template>
  <div id="app">
    <el-container>
      <el-header>
        <navigation-bar></navigation-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-container {
  .el-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }

  .el-main {
    height: 100vh;
    overflow: hidden;
    padding: 0;
  }
}
</style>
