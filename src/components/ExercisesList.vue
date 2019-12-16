<template>
  <div class="exercisesList">
    <ExerciseListItem />
    <AddSetForm />
  </div>
</template>

<script>
import ExerciseListItem from "@/components/ExerciseListItem/index.vue";
import AddSetForm from "@/components/AddSetForm.vue";
export default {
  components: { ExerciseListItem, AddSetForm }
};
</script>