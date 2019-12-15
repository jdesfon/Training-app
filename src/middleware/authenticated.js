export default function ({ store, router, next, to }) {
    const { isAuthenticated } = store.state.user
    console.log('middleware', {
        name: to.name,
        isAuthenticated
    })
    if (isAuthenticated && to.name === 'login') {
        return router.replace({ name: 'home' })
    } else if (!isAuthenticated && to.name !== 'login') {
        return router.replace({ name: 'login' })
    }
    return next()
}
