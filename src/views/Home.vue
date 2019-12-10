<template>
  <div class="home">
    <template v-for="exercise of exercises">
      <div :key="exercise.uid">{{ exercise.name }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    exercises: [
      {
        uid: "1",
        name: "push ups"
      },
      {
        uid: "2",
        name: "pull ups"
      },
      {
        uid: "3",
        name: "squats"
      }
    ]
  })
};
</script>
