<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@import "./style/app.scss";

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    Cantarell, Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
