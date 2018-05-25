module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Shipu\'s Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shipu\'s Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/css/normalize.css',
    '~/css/Font-Awesome/css/font-awesome.css',
    '~/css/cv.css',
  ],
  router: { base: '/shipu.github.io/' },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
