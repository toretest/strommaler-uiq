import Auth from '@okta/okta-vue'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {

export default async ({ app, router, Vue, urlPath, redirect }) => {
  // something to do
  Vue.use(Auth, {
    issuer: 'https://dev-207979.okta.com/oauth2/default',
    clientId: '0oaaoxkde6Rv10fXu4x6',
    redirectUri: window.location.origin + '/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  })
  console.log('********* process env:' + Vue.prototype.$auth.getAccessToken())
  await router.beforeEach(Vue.prototype.$auth.authRedirectGuard())
}
