<template>
  <div id="wrapper">
    <div id="container-floating">
      <div id="floating-button" v-on:click="toggle">
        <p class="plus">+</p>
      </div>
    </div>
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
import store from "@/store/store";
import ContainerHead from "@/components/ContainerHead";
import ContainerAbout from "@/components/ContainerAbout";
import ContainerSkills from "@/components/ContainerSkills";
import ContainerContact from "@/components/ContainerContact";

export default {
  name: 'App',
  components: {
    ContainerHead,
    ContainerAbout,
    ContainerSkills,
    ContainerContact
  },
  data() {
    return {}
  },
  mounted() {
    store.dispatch("init")
  },
  methods: {
    toggle() {
      if (this.prefersDarkScheme) {
        document.body.classList.toggle("light-theme");
      } else {
        document.body.classList.toggle("dark-theme");
      }
    },
  },
  computed: {
    prefersDarkScheme: {
      get() {
        return this.$store.getters.prefersDarkScheme;
      }
    },
  }
}
</script>

<style>
@import "components/styles.css";

#floating-button{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: black;
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.plus{
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-weight: 300;
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating{
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 5;
}

#container-floating:hover{
  height: 400px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus{
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
}



@keyframes edit-in{
  from {opacity: 0; transform: rotateZ(-70deg);}
  to {opacity: 1; transform: rotateZ(0deg);}
}

@keyframes edit-out{
  from {opacity: 1; transform: rotateZ(0deg);}
  to {opacity: 0; transform: rotateZ(-70deg);}
}

@keyframes plus-in{
  from {opacity: 1; transform: rotateZ(0deg);}
  to {opacity: 0.5; transform: rotateZ(180deg);}
}

@keyframes plus-out{
  from {opacity: 0.5; transform: rotateZ(180deg);}
  to {opacity: 1; transform: rotateZ(0deg);}
}


</style>
