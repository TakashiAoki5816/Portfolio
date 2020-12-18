<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body, h1, h2, h4, p {
  margin: 0;
}

h2 {
  color: #45a342;
}

.title-header {
  height: auto;
  display: flex;
  justify-content: start;
}

.title {
  font-size: 4em;
}

.bluelink {
  color: #039be5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url("../src/assets/background.jpg");
}
</style>
