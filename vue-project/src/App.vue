<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>

<style>
body {
  margin: 0;
}
h1 {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
