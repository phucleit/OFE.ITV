export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quản lý khách hàng',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/scloud.png' },
      { rel: 'stylesheet', href:"https://cdn.plyr.io/3.7.2/plyr.css" }
    ],
    script: [
      {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js',
          body: true
      },
      {
        type: 'text/javascript',
        src: 'https://cdn.plyr.io/3.7.2/plyr.js',
        body: true
    }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'boxicons/css/boxicons.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-ant', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      directiveOnly: false,
      
      // Default image must be in the static folder
      defaultImage: '/images/loading.gif',
  
      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',
      
      observerConfig: {
        // See IntersectionObserver documentation
      }
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: 'https://api.iuanime.com',
    baseURL: 'http://localhost:5000'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
        },
        user: {
          property: 'username',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          //logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/profile', method: 'get' }
        }
      },
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
