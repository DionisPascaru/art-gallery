<template>
  <div id="app">
    <el-container v-if="!loading">
      <el-header>
        <navigation-bar></navigation-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <copyright-component></copyright-component>
      </el-footer>
    </el-container>
    <intro-component v-if="loading"></intro-component>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import IntroComponent from './components/IntroComponent.vue';
import CopyrightComponent from './components/CopyrightComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    IntroComponent,
    CopyrightComponent
  },
  data(){
    return {
      loading: true
    }
  },
  mounted(){
    setTimeout(() => {
      this.loading = false;
    }, 3000)
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
    padding: 0;
  }
}
</style>
