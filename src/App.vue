<template>
  <div id="app">
    <home-view></home-view>
    <about-view></about-view>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    AboutView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
