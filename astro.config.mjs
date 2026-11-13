import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import astroMermaid from 'astro-mermaid';
import { blogZhI18nPlugin } from './src/plugins/blog-zh-i18n.ts';

// 外链新窗口打开：构建期给 <a href="http(s)://..."> 注入 target/rel，零运行时。
const externalLinks = () => (t) => {
  const w = (n) => {
    if (n.tagName === 'a' && /^https?:\/\//i.test(n.properties?.href || '')) {
      n.properties.target = '_blank';
      n.properties.rel = 'noopener noreferrer';
    }
    n.children?.forEach(w);
  };
  w(t);
};

export default defineConfig({
  site: 'https://idaas.xlabs.club',
  trailingSlash: 'ignore',
  markdown: { rehypePlugins: [externalLinks] },
  build: { format: 'directory' },
  vite: {
    build: {
      // Mermaid (and its ELK layout chunk) exceed Vite's 500 kB hint.
      chunkSizeWarningLimit: 1600,
    },
  },
  integrations: [
    starlight({
      title: 'IDaaS Book',
      description:
        '面向架构师与平台工程师的中文 IDaaS / IAM 系统手册，覆盖 OAuth 2.0、OIDC、SAML、Keycloak 部署与零信任治理',
      logo: { src: './src/assets/logo.svg', alt: 'IDaaS Book', replacesTitle: false },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: { root: { label: '简体中文', lang: 'zh-CN' } },
      // Hugo's menu tree became `weight`-ordered sections; keep the reading order.
      sidebar: [
        { label: '概览', collapsed: true, items: [{ slug: 'docs' }] },
        { label: '阅读指南', collapsed: true, items: [{ autogenerate: { directory: 'docs/guides', collapsed: true } }] },
        { label: '基础', collapsed: true, items: [{ autogenerate: { directory: 'docs/fundamentals', collapsed: true } }] },
        { label: '协议与标准', collapsed: true, items: [{ autogenerate: { directory: 'docs/protocols', collapsed: true } }] },
        { label: '核心能力', collapsed: true, items: [{ autogenerate: { directory: 'docs/core-capabilities', collapsed: true } }] },
        { label: '实现与实践', collapsed: true, items: [{ autogenerate: { directory: 'docs/implementation', collapsed: true } }] },
        { label: 'Keycloak 实战', collapsed: true, items: [{ autogenerate: { directory: 'docs/keycloak', collapsed: true } }] },
        { label: '高级主题', collapsed: true, items: [{ autogenerate: { directory: 'docs/advanced-topics', collapsed: true } }] },
        { label: '解决方案', collapsed: true, items: [{ autogenerate: { directory: 'docs/solution-blogs', collapsed: true } }] },
      ],
      credits: false,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/void-sleep/idaas-book' },
      ],
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        shiki: {
          langAlias: {
            conf: 'ini',
            promql: 'kusto',
            rego: 'polar',
          },
        },
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/overrides/ThemeSelect.astro',
      },
      plugins: [
        starlightBlog({ title: '博客', postCount: Infinity, navigation: 'header-start' }),
        blogZhI18nPlugin(),
      ],
    }),
    astroMermaid({ enableLogging: false }),
  ],
});
