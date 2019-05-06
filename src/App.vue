<template>
  <div id="app">
    <navdrawer></navdrawer>
    <navbar></navbar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>


<script>
import navbar from "./components/Navbar";
import navdrawer from "./components/Navdrawer";

export default {
  components: {
    navbar,
    navdrawer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
