import { defineConfig } from 'astro/config'

export default defineConfig({
  site:
    process.env['VERCEL_ENV'] !== 'production' && process.env['VERCEL_URL']
      ? `https://${process.env['VERCEL_URL']}`
      : 'https://starlight-head-generator.vercel.app/',
})
