<template>
  <nav class="nav-bar">
    <router-link to="/">
      <h2>Starwars</h2>
    </router-link>
    <ul>
      <li v-for="item of menu" :key="item.url">
        <router-link :to="item.url" exact-active-class="active">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    menu: [
      { name: "Planets", url: "/planets" },
      { name: "People", url: "/people" },
      { name: "Starships", url: "/starships" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  align-items: stretch;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 1rem;

  ul {
    display: flex;
    align-items: center;
    margin: 0 0 0 5rem;
    padding: 0;
    li {
      list-style: none;
      margin-right: 2rem;
      font-size: 1.5rem;
      a {
        opacity: 0.8;
      }
      .active {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}
</style>
