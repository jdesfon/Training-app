export default function({ store, router, next, to }) {
    const { isAuthenticated } = store.state.user
    if (isAuthenticated && to.name === 'login') {
        return router.replace({ name: 'home' })
    }
    if (!isAuthenticated && to.name !== 'login') {
        return router.replace({ name: 'landing' })
    }
    return next()
}
