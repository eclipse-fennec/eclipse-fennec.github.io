import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import EclipseFooter from './EclipseFooter.vue'
import ProjectGrid from './ProjectGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // The built-in themeConfig.footer is suppressed on pages that render a
  // sidebar, so the Eclipse Foundation footer goes into the layout-bottom
  // slot instead — that one is rendered on every page, 404 included.
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(EclipseFooter),
    }),
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
  },
} satisfies Theme
