export default {
    API_NAME: process.env.VUE_APP_API_NAME,
    apiGateway: {
        REGION: process.env.VUE_APP_API_GATEWAY_REGION,
        URL: process.env.VUE_APP_API_GATEWAY_URL,
    },
    cognito: {
        REGION: process.env.VUE_APP_COGNITO_REGION,
        USER_POOL_ID: process.env.VUE_APP_COGNITO_USER_POOL_ID,
        APP_CLIENT_ID: process.env.VUE_APP_COGNITO_APP_CLIENT,
        IDENTITY_POOL_ID: process.env.VUE_APP_CONGNITO_IDENTITY_POOL_ID,
    },
}
