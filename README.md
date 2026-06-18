# eclipse-fennec.github.io

The [Eclipse Fennec](https://projects.eclipse.org/projects/modeling.fennec)
organization landing page and documentation hub, published at
**https://eclipse-fennec.github.io/**.

Built with [VitePress](https://vitepress.dev/).

## Develop locally

```bash
npm ci
npm run docs:dev      # local dev server with hot reload
npm run docs:build    # production build into docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Structure

```
docs/
  index.md                       # landing page (hero, summary, project grid)
  .vitepress/
    config.ts                    # site config (nav, footer, search…)
    theme/
      index.ts                   # theme extension, registers <ProjectGrid>
      custom.css                 # Fennec brand colors
      projects.ts                # ← curated project list (edit here)
      ProjectGrid.vue            # renders the grouped project cards
```

To add or change a project on the landing page, edit
[`docs/.vitepress/theme/projects.ts`](docs/.vitepress/theme/projects.ts) — it is
the single curated source for the overview.

## Deployment

Pushed builds deploy automatically via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

> **One-time setup:** in the repository settings under *Pages*, set the build
> and deployment **Source** to **GitHub Actions**.

## Roadmap: per-project documentation

Phase 1 (this site) is the curated overview that links to each repository.

Phase 2 (planned) lets each project **publish its own versioned docs** under
`https://eclipse-fennec.github.io/<repo>/<version>/`, with a per-project
branch/version selector. When a project goes live, set its `docs` link in
`projects.ts` to `https://eclipse-fennec.github.io/<repo>/latest/`.
