<template>
  <section class="flex planets">
    <app-items-list :itemType="type" />
    <app-item-info :itemType="type" />
  </section>
</template>

<script>
import AppItemsList from "../components/ItemsList";
import AppItemInfo from "../components/ItemInfo";
export default {
  components: { AppItemsList, AppItemInfo },
  data: () => ({
    type: "planets"
  }),
  mounted() {
    this.$store.dispatch("loadItems", this.type);
    this.$store.dispatch("clearSelected");
  }
};
</script>
