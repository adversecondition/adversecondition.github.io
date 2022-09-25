<template>
  <ContentPage/>
</template>

<script>
import ContentPage from "@/components/ContentPage";

export default {
  name: 'App',
  components: {
    ContentPage
  }
}
</script>

<style>
@import "./components/styles.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
