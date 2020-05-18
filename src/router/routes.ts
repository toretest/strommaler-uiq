import { RouteConfig } from 'vue-router';

import Auth from '@okta/okta-vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/auth',
        component: () => import('pages/PageAuth.vue')
      },
      {
        path: '/help',
        component: () => import('pages/PageHelp.vue')
      },
      {
        path: '/todo',
        component: () => import('pages/PageTodo.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'implicit/callback',
        component: Auth.handleCallback()
      }
   ]

  }
  // ,
  // {
  //   path: '/implicit/callback',
  //   component: Auth.handleCallback()
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
