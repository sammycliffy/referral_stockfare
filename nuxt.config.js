export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stockfare-referral',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' },
      { rel: 'icon', type: 'text/css', href: '/assets/css/flag-icon.min.css' },
      { rel: 'icon', type: 'text/css', href: '/assets/css/materialdesignicons.min.css' },
      { rel: 'icon', type: 'text/css', href: '/assets/css/vendor.bundle.base.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDKiM_RjVgo0Ona3sIFExQVub-J9SOaFVQ",
          authDomain: "stockfare-mobile.firebaseapp.com",
          databaseURL: "https://stockfare-mobile.firebaseio.com/",
          projectId: "stockfare-mobile",
          storageBucket: "stockfare-mobile.appspot.com",
          messagingSenderId: '196605610944',
          appId: "1:196605610944:android:3f4b5d32195c9094b55625"
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              // onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              // onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribemManually: false
            },
            ssr: {
              serverLogin: {
                sessionLifetime: 60 * 60 * 1000,
                loginDelay: 50
              }
            }
          }
        }
      }
    ]

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    options: {
      fix: true
    }
  }
}
