<template>
  <div id="wrapper">
    <div>
      <dark-mode-toggle/>
    </div>
<!--    <div id="container-floating">-->
<!--      <div id="floating-button" v-on:click="toggle">-->
<!--        <p class="plus">+</p>-->
<!--      </div>-->
<!--    </div>-->
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

<script lang="js">
import ContainerHead from "@/components/ContainerHead";
import ContainerAbout from "@/components/ContainerAbout";
import ContainerSkills from "@/components/ContainerSkills";
import ContainerContact from "@/components/ContainerContact";
import DarkModeToggle from "@/components/DarkmodeToggle";

export default {
  name: 'App',
  components: {
    DarkModeToggle,
    ContainerHead,
    ContainerAbout,
    ContainerSkills,
    ContainerContact
  },
}
</script>

<style>
@import "components/styles.css";

</style>
