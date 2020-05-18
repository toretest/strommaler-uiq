import Auth from '@okta/okta-vue';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {

export default async ( { router, Vue, urlPath, redirect}) => {
  // something to do
  Vue.use(Auth, {
    issuer: 'https://dev-207979.okta.com/oauth2/default',
    client_id: '0oaaoxkde6Rv10fXu4x6',
    redirect_uri: window.location.origin + '/implicit/callback',
  });

  // router.beforeEach((to, from, next) => {
  //  next();
  // })

  console.log("oktaStartup.js boot script ********")
  router.beforeEach(Vue.prototype.$auth.authRedirectGuard());
}
