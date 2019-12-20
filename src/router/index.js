import Vue from 'vue'
import Lodash from 'lodash'
import VueRouter from 'vue-router'
import Default from '../layouts/Default'
import Home from '../views/Home'
import Exercise from '../views/Exercise'
import Auth from '../views/auth/index'
import SignIn from '../views/auth/SignIn'
import SignUp from '../views/auth/SignUp'
import Landing from '../views/Landing'
import store from '../store'
import authenticated from '../middleware/authenticated'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing,
    },
    {
        path: '/home',
        name: 'home',
        component: Default,
        redirect: { name: 'exercises' },
        meta: {
            middleware: authenticated,
        },
        children: [
            {
                name: 'exercises',
                path: '/exercises',
                component: Home,
            },
            {
                name: 'exercise',
                path: '/exercise/:name',
                component: Exercise,
            },
        ],
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        children: [
            {
                name: 'signIn',
                component: SignIn,
                path: '/sign-in',
            },
            {
                name: 'signUp',
                component: SignUp,
                path: '/sign-up',
            },
        ],
    },
    {
        path: '**',
        redirect: { name: 'landing' },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

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
})

export default router
