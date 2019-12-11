import { ADD_SET } from "@/store-types/mutations-types";
import { GET_EXERCISES, GET_SETS } from "@/store-types/getters-types";

export const mutations = {
  [ADD_SET]: (state, set) => {
    console.log(set);
    state.sets.push(set);
  }
};

export const getters = {
  [GET_EXERCISES]: state => state.exercises,
  [GET_SETS]: state => state.sets
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
    }
  ],
  sets: []
};

export const namespaced = true;
