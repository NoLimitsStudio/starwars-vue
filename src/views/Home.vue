<template>
  <section class="home">
    <div class="home__main">
      <p>Welcome to</p>
      <h1>Starwars World</h1>
      <span>Select theme you are interested in</span>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  &__main {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 2rem;
    }
    span {
      margin-top: 1.8rem;
    }
  }
}
</style>
