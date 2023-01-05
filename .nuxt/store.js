import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\content.js'), 'content.js')
  resolveStoreModules(require('..\\store\\contentPlan.js'), 'contentPlan.js')
  resolveStoreModules(require('..\\store\\contract.js'), 'contract.js')
  resolveStoreModules(require('..\\store\\customer.js'), 'customer.js')
  resolveStoreModules(require('..\\store\\domain.js'), 'domain.js')
  resolveStoreModules(require('..\\store\\domainPlan.js'), 'domainPlan.js')
  resolveStoreModules(require('..\\store\\email.js'), 'email.js')
  resolveStoreModules(require('..\\store\\emailPlan.js'), 'emailPlan.js')
  resolveStoreModules(require('..\\store\\facebook.js'), 'facebook.js')
  resolveStoreModules(require('..\\store\\facebookPlan.js'), 'facebookPlan.js')
  resolveStoreModules(require('..\\store\\google.js'), 'google.js')
  resolveStoreModules(require('..\\store\\googlePlan.js'), 'googlePlan.js')
  resolveStoreModules(require('..\\store\\hosting.js'), 'hosting.js')
  resolveStoreModules(require('..\\store\\hostingPlan.js'), 'hostingPlan.js')
  resolveStoreModules(require('..\\store\\maintenance.js'), 'maintenance.js')
  resolveStoreModules(require('..\\store\\maintenancePlan.js'), 'maintenancePlan.js')
  resolveStoreModules(require('..\\store\\ssl.js'), 'ssl.js')
  resolveStoreModules(require('..\\store\\sslPlan.js'), 'sslPlan.js')
  resolveStoreModules(require('..\\store\\static.js'), 'static.js')
  resolveStoreModules(require('..\\store\\user.js'), 'user.js')
  resolveStoreModules(require('..\\store\\userRole.js'), 'userRole.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\content.js',
      '..\\store\\contentPlan.js',
      '..\\store\\contract.js',
      '..\\store\\customer.js',
      '..\\store\\domain.js',
      '..\\store\\domainPlan.js',
      '..\\store\\email.js',
      '..\\store\\emailPlan.js',
      '..\\store\\facebook.js',
      '..\\store\\facebookPlan.js',
      '..\\store\\google.js',
      '..\\store\\googlePlan.js',
      '..\\store\\hosting.js',
      '..\\store\\hostingPlan.js',
      '..\\store\\maintenance.js',
      '..\\store\\maintenancePlan.js',
      '..\\store\\ssl.js',
      '..\\store\\sslPlan.js',
      '..\\store\\static.js',
      '..\\store\\user.js',
      '..\\store\\userRole.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
