<template>
  <section class="flex people">
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
    type: "people"
  }),
  mounted() {
    this.$store.dispatch("loadItems", this.type);
    this.$store.dispatch("clearSelected");
  }
};
</script>
