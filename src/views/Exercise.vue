<template>
  <div>
    <h1>exercise view</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { EXERCISE } from "@/store-types/module-names";
import { ADD_SET } from "@/store-types/mutations-types";
export default {
  name: "Exercise",
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.title = this.$route.params.name;
  },
  methods: {
    ...mapMutations(EXERCISE, {
      addSet: ADD_SET
    })
  }
};
</script>

<style lang="scss" scoped>
.Exercise {
}
</style>
