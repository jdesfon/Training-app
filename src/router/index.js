import Vue from "vue";
import Lodash from "lodash"
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Exercise from "../views/Exercise";
import Login from "../views/auth/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
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

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  if (!subsequentMiddleware) {
    return context.next
  }

  return (...parameters) => {
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.name === router.currentRoute.name) {
    return next()
  }

  // We extract the middleware inside meta middleware from the parent to the current
  const middleware = to.matched.reduce((acc, val) => {
    if (!Lodash.isEmpty(val.meta)) {
      if (Array.isArray(val.meta.middleware)) {
        acc.push(...val.meta.middleware)
      } else {
        acc.push(val.meta.middleware)
      }
    }
    return acc
  }, [])

  if (!Lodash.isEmpty(middleware)) {
    const context = {
      from,
      next,
      router,
      to,
      store,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
});

export default router;
