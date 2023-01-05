import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e792275 = () => interopDefault(import('..\\pages\\contracts\\index.vue' /* webpackChunkName: "pages/contracts/index" */))
const _00fa1b00 = () => interopDefault(import('..\\pages\\customer\\index.vue' /* webpackChunkName: "pages/customer/index" */))
const _df79c4a6 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _a9ad14a4 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _e6a90cf8 = () => interopDefault(import('..\\pages\\contracts\\add.vue' /* webpackChunkName: "pages/contracts/add" */))
const _08db605e = () => interopDefault(import('..\\pages\\contracts\\add2.vue' /* webpackChunkName: "pages/contracts/add2" */))
const _7b9718cf = () => interopDefault(import('..\\pages\\customer\\add.vue' /* webpackChunkName: "pages/customer/add" */))
const _115a4522 = () => interopDefault(import('..\\pages\\plans\\content\\index.vue' /* webpackChunkName: "pages/plans/content/index" */))
const _782d6348 = () => interopDefault(import('..\\pages\\plans\\domain\\index.vue' /* webpackChunkName: "pages/plans/domain/index" */))
const _dbeedc28 = () => interopDefault(import('..\\pages\\plans\\email\\index.vue' /* webpackChunkName: "pages/plans/email/index" */))
const _069670f4 = () => interopDefault(import('..\\pages\\plans\\facebook\\index.vue' /* webpackChunkName: "pages/plans/facebook/index" */))
const _2142629a = () => interopDefault(import('..\\pages\\plans\\google\\index.vue' /* webpackChunkName: "pages/plans/google/index" */))
const _59775e0e = () => interopDefault(import('..\\pages\\plans\\hosting\\index.vue' /* webpackChunkName: "pages/plans/hosting/index" */))
const _694f48d6 = () => interopDefault(import('..\\pages\\plans\\maintenance\\index.vue' /* webpackChunkName: "pages/plans/maintenance/index" */))
const _0ddfa8fc = () => interopDefault(import('..\\pages\\plans\\ssl\\index.vue' /* webpackChunkName: "pages/plans/ssl/index" */))
const _39f21d7b = () => interopDefault(import('..\\pages\\services\\content\\index.vue' /* webpackChunkName: "pages/services/content/index" */))
const _a8401c88 = () => interopDefault(import('..\\pages\\services\\domain\\index.vue' /* webpackChunkName: "pages/services/domain/index" */))
const _075064f8 = () => interopDefault(import('..\\pages\\services\\email\\index.vue' /* webpackChunkName: "pages/services/email/index" */))
const _0dfd88fa = () => interopDefault(import('..\\pages\\services\\facebook\\index.vue' /* webpackChunkName: "pages/services/facebook/index" */))
const _23115d27 = () => interopDefault(import('..\\pages\\services\\google\\index.vue' /* webpackChunkName: "pages/services/google/index" */))
const _c7d2c3cc = () => interopDefault(import('..\\pages\\services\\hosting\\index.vue' /* webpackChunkName: "pages/services/hosting/index" */))
const _2d00b5a1 = () => interopDefault(import('..\\pages\\services\\maintenance\\index.vue' /* webpackChunkName: "pages/services/maintenance/index" */))
const _5cd8cf08 = () => interopDefault(import('..\\pages\\services\\ssl\\index.vue' /* webpackChunkName: "pages/services/ssl/index" */))
const _fe054eb4 = () => interopDefault(import('..\\pages\\template\\dashboard.vue' /* webpackChunkName: "pages/template/dashboard" */))
const _5add097e = () => interopDefault(import('..\\pages\\template\\newpage.vue' /* webpackChunkName: "pages/template/newpage" */))
const _75d42c7c = () => interopDefault(import('..\\pages\\template\\todolist.vue' /* webpackChunkName: "pages/template/todolist" */))
const _47ebef6e = () => interopDefault(import('..\\pages\\users\\roles\\index.vue' /* webpackChunkName: "pages/users/roles/index" */))
const _0723c458 = () => interopDefault(import('..\\pages\\users\\roles\\add.vue' /* webpackChunkName: "pages/users/roles/add" */))
const _b440ee1e = () => interopDefault(import('..\\pages\\users\\roles\\_id.vue' /* webpackChunkName: "pages/users/roles/_id" */))
const _2b673e1d = () => interopDefault(import('..\\pages\\contracts\\_id.vue' /* webpackChunkName: "pages/contracts/_id" */))
const _1a52dd68 = () => interopDefault(import('..\\pages\\customer\\_id.vue' /* webpackChunkName: "pages/customer/_id" */))
const _3c550b96 = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _d77283c4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contracts",
    component: _1e792275,
    name: "contracts"
  }, {
    path: "/customer",
    component: _00fa1b00,
    name: "customer"
  }, {
    path: "/login",
    component: _df79c4a6,
    name: "login"
  }, {
    path: "/users",
    component: _a9ad14a4,
    name: "users"
  }, {
    path: "/contracts/add",
    component: _e6a90cf8,
    name: "contracts-add"
  }, {
    path: "/contracts/add2",
    component: _08db605e,
    name: "contracts-add2"
  }, {
    path: "/customer/add",
    component: _7b9718cf,
    name: "customer-add"
  }, {
    path: "/plans/content",
    component: _115a4522,
    name: "plans-content"
  }, {
    path: "/plans/domain",
    component: _782d6348,
    name: "plans-domain"
  }, {
    path: "/plans/email",
    component: _dbeedc28,
    name: "plans-email"
  }, {
    path: "/plans/facebook",
    component: _069670f4,
    name: "plans-facebook"
  }, {
    path: "/plans/google",
    component: _2142629a,
    name: "plans-google"
  }, {
    path: "/plans/hosting",
    component: _59775e0e,
    name: "plans-hosting"
  }, {
    path: "/plans/maintenance",
    component: _694f48d6,
    name: "plans-maintenance"
  }, {
    path: "/plans/ssl",
    component: _0ddfa8fc,
    name: "plans-ssl"
  }, {
    path: "/services/content",
    component: _39f21d7b,
    name: "services-content"
  }, {
    path: "/services/domain",
    component: _a8401c88,
    name: "services-domain"
  }, {
    path: "/services/email",
    component: _075064f8,
    name: "services-email"
  }, {
    path: "/services/facebook",
    component: _0dfd88fa,
    name: "services-facebook"
  }, {
    path: "/services/google",
    component: _23115d27,
    name: "services-google"
  }, {
    path: "/services/hosting",
    component: _c7d2c3cc,
    name: "services-hosting"
  }, {
    path: "/services/maintenance",
    component: _2d00b5a1,
    name: "services-maintenance"
  }, {
    path: "/services/ssl",
    component: _5cd8cf08,
    name: "services-ssl"
  }, {
    path: "/template/dashboard",
    component: _fe054eb4,
    name: "template-dashboard"
  }, {
    path: "/template/newpage",
    component: _5add097e,
    name: "template-newpage"
  }, {
    path: "/template/todolist",
    component: _75d42c7c,
    name: "template-todolist"
  }, {
    path: "/users/roles",
    component: _47ebef6e,
    name: "users-roles"
  }, {
    path: "/users/roles/add",
    component: _0723c458,
    name: "users-roles-add"
  }, {
    path: "/users/roles/:id",
    component: _b440ee1e,
    name: "users-roles-id"
  }, {
    path: "/contracts/:id",
    component: _2b673e1d,
    name: "contracts-id"
  }, {
    path: "/customer/:id",
    component: _1a52dd68,
    name: "customer-id"
  }, {
    path: "/users/:id",
    component: _3c550b96,
    name: "users-id"
  }, {
    path: "/",
    component: _d77283c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
