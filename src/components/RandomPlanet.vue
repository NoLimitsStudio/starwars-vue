<template>
  <div class="random-planet background">
    <div v-if="!loading && !error" class="random-planet__image">
      <!-- Maybe hard to read, but easy to fix when owner change API -->
      <img :src="`${url}${subUrl}/${planet.id}.jpg`" alt="" />
    </div>
    <div v-if="!loading && !error" class="random-planet__content">
      <div class="block-header">{{ planet.name }}</div>
      <ul>
        <li>
          Population<span>{{ planet.population }}</span>
        </li>
        <li>
          Rotation period<span>{{ planet.rotationPeriod }}</span>
        </li>
        <li>
          Diameter<span>{{ planet.diameter }}</span>
        </li>
      </ul>
    </div>
    <div
      v-if="!planet && !error"
      class="loadingio-spinner-double-ring-ip1jbvmjmq"
    >
      <div class="ldio-n95txjt4lq">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
    <div v-if="!loading && error" class="error">
      ERROR! System shell reboot soon
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomPlanet",
  data: () => ({
    subUrl: "planets",
    maxId: 17,
    id: null,
    loading: true,
    planet: null
  }),
  computed: {
    url() {
      return this.$store.state.imageUrl;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    async changePlanet() {
      this.loading = true;
      this.id = Math.floor(Math.random() * this.maxId) + 2;
      this.planet = await this.$store.dispatch("loadPlanet", this.id);
      this.loading = false;
      setTimeout(() => {
        this.changePlanet();
      }, 10000);
    }
  },
  mounted() {
    this.changePlanet();
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/loading";
.random-planet {
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  height: 212px;
  &__image {
    border-radius: 10px;
    overflow: hidden;
    height: 150px;
    width: 150px;
    img {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  &__content {
    margin-left: 2rem;
    ul {
      margin: 1rem 0 0;
      padding-left: 0.8rem;
      li {
        list-style: none;
        padding: 0.4rem 0;
        border-top: 1px solid #777;
        font-size: 1.1rem;
        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
.error {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #ffc003;
}
</style>
