<template>
  <div
    class="singleNumber"
    :style="{ backgroundColor: backgroundColor }"
  >
    <p
      class="title"
      :style="{ color: titleColor }"
    >
      {{ title }}
    </p>
    <span
      class="value"
      :style="{ color: numberColor }"
    >{{ value | cardNumber }}</span>
  </div>
</template>

<script>
export default {
  name: "SingleNumber",
  props: {
    value: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: () => "#ffffff"
    },
    numberColor: {
      type: String,
      default: () => "#424242"
    },
    titleColor: {
      type: String,
      default: () => "#ff1744"
    }
  },
  filters: {
    cardNumber(val) {
      if (val > 5000) {
        const temp = `${val / 1000}`;
        return `${temp.substring(0, 4)}k`;
      }
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
.singleNumber {
  margin: 4px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  width: 163px;
  height: 163px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-weight: 600;
  }

  .value {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -1px;
  }
}
</style>