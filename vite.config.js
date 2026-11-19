import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

function searchMetadata(siteUrl) {
  const url = siteUrl ? new URL(siteUrl) : null
  if (url && (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== '/')) {
    throw new Error('SITE_URL deve ser a origem pública do site, sem caminho, parâmetros ou fragmento.')
  }
  const home = url?.href

  return {
    name: 'atlas-search-metadata',
    apply: 'build',
    transformIndexHtml() {
      if (!home) return
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: home } },
        { tag: 'meta', attrs: { property: 'og:url', content: home } },
      ]
    },
    generateBundle() {
      const sitemapUrl = home ? new URL('sitemap.xml', home).href : null
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${sitemapUrl ? `Sitemap: ${sitemapUrl}\n` : ''}`,
      })
      if (home) {
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${home}</loc></url>\n</urlset>\n`,
        })
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const { SITE_URL } = loadEnv(mode, process.cwd(), 'SITE_URL')
  return {
    plugins: [react(), tailwindcss(), searchMetadata(SITE_URL)],
  }
})
