<template>
  <v-app>
    <Toolbar />
    <div id="app">
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
@import url('https://fonts.googleapis.com/css?family=Akronim');
@import url('https://fonts.googleapis.com/css?family=Pattaya&subset=cyrillic');

#app {
  padding-top: 50px;
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

.akronim {
  font-family: 'Akronim', cursive;
  font-size: 3.5rem;
  color: #6d6d6d;
}

.cursor {
  cursor: pointer;
}
</style>
