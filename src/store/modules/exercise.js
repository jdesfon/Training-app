import { ADD_SET } from "@/store-types/mutations-types";
import { GET_EXERCISES, GET_SETS } from "@/store-types/getters-types";

export const mutations = {
  [ADD_SET]: (state, set) => {
    set.createdAt = new Date();
    state.sets.push(set);
  }
};

export const getters = {
  [GET_EXERCISES]: state => state.exercises,
  [GET_SETS]: state => exerciseSlug =>
    state.sets.filter(set => set.exercise.slug === exerciseSlug)
};

export const state = {
  exercises: [
    {
      uid: "1",
      name: "push ups",
      slug: "push-ups"
    },
    {
      uid: "2",
      name: "pull ups",
      slug: "pull-ups"
    },
    {
      uid: "3",
      name: "squats",
      slug: "squats"
    },
    {
      uid: "4",
      name: "dips",
      slug: "dips"
    },
    {
      uid: "5",
      name: "lunges",
      slug: "lunges"
    },
    {
      uid: "6",
      name: "burpees",
      slug: "burpees"
    },
    {
      uid: "7",
      name: "muscle ups",
      slug: "muscle-ups"
    }
  ],
  sets: []
};

export const namespaced = true;
