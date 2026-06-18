import { defineConfig } from 'vitepress'

// Organization (user) GitHub Pages site → served from the domain root.
export default defineConfig({
  title: 'Eclipse Fennec',
  description:
    'Eclipse Fennec — the Eclipse Modeling Framework for OSGi and the web. Project overview and documentation hub.',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/fennec-logo.png' }],
    ['meta', { name: 'theme-color', content: '#c0631c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Eclipse Fennec' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'The Eclipse Modeling Framework for OSGi and the web.',
      },
    ],
  ],

  themeConfig: {
    logo: '/fennec-logo.png',
    siteTitle: 'Eclipse Fennec',

    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Projects', link: '/#projects' },
      {
        text: 'Eclipse Project',
        link: 'https://projects.eclipse.org/projects/modeling.fennec',
      },
      { text: 'GitHub', link: 'https://github.com/eclipse-fennec' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eclipse-fennec' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message:
        'Released under the EPL-2.0 License. Eclipse Fennec is part of the Eclipse Foundation.',
      copyright: 'Copyright © Eclipse Foundation and contributors',
    },

    editLink: {
      pattern:
        'https://github.com/eclipse-fennec/eclipse-fennec.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
