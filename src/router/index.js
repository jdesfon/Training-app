import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Exercise from "../views/Exercise";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/exercise/:name",
    name: "Exercise",
    component: Exercise
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
