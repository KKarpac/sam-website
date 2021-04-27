<template>
  <div>
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'App',
  components: {
    // Home,
    AppNav
  }
}
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  background-color: black;
  color: whitesmoke;
}

#app {
  font-family: 'Poppins', sans-serif;
}

</style>

