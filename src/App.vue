<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from './components/Layouts/Navbar'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
