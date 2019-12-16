<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 342px;
  color: #424242;
  text-align: center;
  border-bottom: 1px solid black;
  text-align: left;
  font-weight: 900;
  line-height: 3rem;
  text-transform: capitalize;
}
</style>