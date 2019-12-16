export default function({ store, router, next, to }) {
  const { isAuthenticated } = store.state.user;
  if (isAuthenticated && to.name === "login") {
    return router.replace({ name: "home" });
  } else if (!isAuthenticated && to.name !== "login") {
    return router.replace({ name: "login" });
  }
  return next();
}
