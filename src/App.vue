<template>
  <div id="app">
    <div class="container">
      <app-nav-bar />
      <app-random-planet />
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavBar from "@/components/UI/NavBar";
import AppRandomPlanet from "@/components/RandomPlanet";
export default {
  components: {
    AppNavBar,
    AppRandomPlanet
  }
};
</script>

<style lang="scss">
#app {
  color: #fff;
}

section.flex {
  display: flex;
  align-items: flex-start;
}
</style>
