import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectGrid from './ProjectGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectGrid', ProjectGrid)
  },
} satisfies Theme
