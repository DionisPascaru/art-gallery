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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
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
