const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
// eslint-disable-next-line no-global-assign
require = require('esm')(module);
const { routes } = require('./src/router');

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://vsisvoi.com',
      routes,
    }
  }
}
