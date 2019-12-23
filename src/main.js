import Vue from 'vue'
import Amplify from 'aws-amplify'
import Moment from 'moment'
import VueApexCharts from 'vue-apexcharts'
import App from './App'
import router from './router'
import store from './store'
import config from './config'
import vuetify from './plugins/vuetify'
import './assets/style/index.scss'

Vue.filter('unixToDate', function unixToDate(unixTimestamp) {
    return Moment(unixTimestamp).format('MMM Do HH:mm')
})

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
    API: {
        endpoints: [
            {
                name: config.API_NAME,
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION,
            },
        ],
    },
})

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
