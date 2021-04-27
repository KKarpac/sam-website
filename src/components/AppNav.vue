<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="links">
        <router-link
          to="Portfolio"
          class="flex-item nav-link"
          active-class="active"
          exact >
          Portfolio
        </router-link>
        <router-link
          to="Home"
          class="flex-item nav-link"
          active-class="active"
          exact >
          Home
        </router-link>
        <router-link
          to="WhatIDo"
          class="flex-item nav-link"
          active-class="active"
          exact >
          What I Do
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.nav-link {
  font-family: 'Poppins', sans-serif;
  color: #FFFFFF;
  font-size: 20px;
  line-height: 30px;
}

.nav-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: flex-start;
}

.flex-item {
    flex: 0 1 auto;
    align-self: auto;
    margin: 45px;
}


</style>
