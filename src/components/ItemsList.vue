<template>
  <div class="item-list background">
    <ul>
      <li
        v-for="item of list.results"
        :key="item.name"
        @click="onSelect(item.url)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemsList",
  props: {
    itemType: {
      type: String,
      required: true
    }
  },
  computed: {
    list() {
      return this.$store.state.data || {};
    }
  },
  methods: {
    onSelect(e) {
      const idRegex = /\/([0-9]*)\/$/;
      const id = e.match(idRegex)[1];
      const data = {
        id,
        param: this.itemType
      };
      this.$store.dispatch("changeSelected", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-list {
  width: calc(50% - 1rem);
  margin-right: 1rem;
  border: 2px solid #777;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      border-bottom: 2px solid #777;
      font-size: 1.1rem;
      padding: 0.8rem 1.2rem;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
