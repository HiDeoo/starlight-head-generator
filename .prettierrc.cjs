const baseConfig = require('@hideoo/prettier-config')

/**
 * @type {import('prettier').Config}
 */
const customPrettierConfig = {
  ...baseConfig,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro'],
}

module.exports = customPrettierConfig
