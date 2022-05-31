const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "refs": {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "ITRCOM UI Components",
      // The url provided by Chromatic when it was published
      url: "https://itr.chromatic.com",
    },
  },
  webpackFinal: async (config, { configType }) => {
    // By default, storybook 5.32/6+ throw all files without a respective loader at `file-loader` in a `oneOf` loop.
    // Add the exclusion of inline SVGs (e.g. icon-name.inline.svg) to mimic webpack overridden CRA configuration.
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map(item => {
          if (item.loader && item.loader.includes('file-loader')) {
            item.exclude.push(/\.inline\.svg$/)
          }
          return item
        })
      }
      return rule
    })
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: [
        { loader: require.resolve('svg-inline-loader') }
      ]
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '~components': path.resolve(__dirname, '../src/components'),
      '~images': path.resolve(__dirname, '../src/assets'),
      '~styles': path.resolve(__dirname, '../src/styles'),
    }
    return config
  }
}