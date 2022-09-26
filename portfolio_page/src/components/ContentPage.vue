<template>
  <div id="wrapper">
    <div id="main">
      <div class="inner">
        <ContainerHead/>
        <ContainerAbout/>
        <ContainerSkills/>
        <ContainerContact/>
      </div>
    </div>
  </div>
</template>

<script>
import ContainerHead from "@/components/contents/ContainerHead";
import ContainerAbout from "@/components/contents/ContainerAbout";
import ContainerSkills from "@/components/contents/ContainerSkills";
import ContainerContact from "@/components/contents/ContainerContact";

export default {
  name: "ContentPage",
  components: {
    ContainerContact,
    ContainerSkills,
    ContainerAbout,
    ContainerHead
  },
  methods: {

  }
}
</script>

<style scoped>
@import "./styles.css";
</style>