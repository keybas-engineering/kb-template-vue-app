<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-calendar></b-calendar>
  </div>
</template>

<script lang="ts">
import { BCalendar } from "bootstrap-vue";

export default {
  name: "AboutPage",
  components: {
    BCalendar,
  },
};
</script>

<style scoped lang="scss">
.home {
  max-width: 50rem;
  margin: 2rem auto;
}
</style>
