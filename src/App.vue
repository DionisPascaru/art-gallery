<template>
  <div id="app">
    <nav>
      <router-link to="/">Gallery</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/comming-soon">Comming soon</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

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
