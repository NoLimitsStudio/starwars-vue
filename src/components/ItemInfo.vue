<template>
  <div class="info-block">
    <div class="item-info" v-if="!toShow">
      <span>Select item you wat to know about</span>
    </div>
    <div class="item-info background" v-else>
      <div class="item-info__image">
        <!-- Maybe hard to read, but easy to fix when owner change API -->
        <img :src="`${url}${imgUrl}/${toShow.id}.jpg`" alt="" />
      </div>
      <div class="item-info__content">
        <div class="block-header">{{ toShow.name }}</div>
        <ul>
          <li v-for="(value, key) of info" :key="key">
            {{ key | letterCase }}: <span>{{ value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    itemType: {
      type: String,
      required: true
    }
  },
  filters: {
    letterCase(el) {
      const newStr = el[0].toUpperCase() + el.slice(1);
      return newStr;
    }
  },
  data: () => ({}),
  computed: {
    url() {
      return this.$store.getters["getUrl"];
    },
    imgUrl() {
      switch (this.itemType) {
        case "planets":
          return "planets";
        case "people":
          return "characters";
        case "starships":
          return "starships";
        default:
          return "";
      }
    },
    toShow() {
      return this.$store.state.selectedItem;
    },
    info() {
      const {
        diameter = null,
        population = null,
        climate = null,
        birth_year = null,
        gender = null,
        height = null,
        model = null,
        starship_class = null,
        cost_in_credits = null,
        crew = null,
        passengers = null,
        cargo_capacity = null
      } = this.toShow;
      switch (this.itemType) {
        case "planets":
          return {
            diameter,
            population,
            climate
          };
        case "people":
          return {
            "birth year": birth_year,
            gender,
            height
          };
        case "starships":
          return {
            model,
            "starship class": starship_class,
            "cost in credits": cost_in_credits,
            crew,
            passengers,
            "cargo capacity": cargo_capacity
          };
        default:
          return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.info-block {
  width: calc(50% - 1rem);
}
.item-info {
  width: 100%;
  margin-left: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  &__image {
    height: auto;
    width: 30%;
    border-radius: 10px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: contain;
      background-color: #fff;
    }
  }
  &__content {
    margin-left: 1rem;
    flex: 1;
    ul {
      margin: 1rem 0 0;
      padding: 0 0 0 1rem;
      li {
        list-style: none;
        padding: 0.5rem 0.9rem;
        border-top: 1px solid #777;
        font-size: 1.1rem;
        span {
          margin-left: 0.8rem;
        }
      }
    }
  }
}
</style>
