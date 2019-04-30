<template>
  <v-app>
    <Toolbar />
    <div id="app">
      <div id="nav">

      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar';

  export default {
      components: {
          Toolbar
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
