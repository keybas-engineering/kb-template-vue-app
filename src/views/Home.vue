<template>
  <div class="home">
    <header class="mb-4 d-flex align-items-center justify-content-center">
      <b-avatar
        variant="light"
        src="~/assets/kb-logo-variant.png"
        alt="Application logo"
        size="lg"
        class="mr-2 border border-primary"
      ></b-avatar>
      <h1 class="m-0">Frontend template</h1>
    </header>
    <KbTodoList />
  </div>
</template>

<script lang="ts">
import KbTodoList from "@/components/KbTodoList.vue"; // @ is an alias to /src
import { BAvatar } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    BAvatar,
    KbTodoList,
  },
};
</script>

<style scoped lang="scss">
.home {
  max-width: 50rem;
  margin: 2rem auto;
}
</style>
