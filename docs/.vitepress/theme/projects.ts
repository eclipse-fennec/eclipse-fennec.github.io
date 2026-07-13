// Curated list of the essential Eclipse Fennec projects.
// This is the single place to maintain the landing-page project overview.
//
// To add a project: append an entry to the matching group below.
// Every card gets a Docs link that defaults to the repo's GitHub Pages folder
// (`https://eclipse-fennec.github.io/<repo>/`, see `docsUrl` below). Set `docs`
// explicitly only to override that default for a project that publishes
// somewhere else — e.g. emf.m2x, whose root path needs `index.html` to trigger
// the redirect to its versioned `/snapshot/` docs.

export type Lang = 'Java' | 'TypeScript' | 'Python' | 'Mixed'

export interface Project {
  /** Repository name within the eclipse-fennec org (also the GitHub Pages sub-path). */
  repo: string
  /** Human-friendly title shown on the card. */
  title: string
  /** One-line summary. */
  description: string
  lang?: Lang
  /**
   * Documentation URL. Optional — defaults to the repo's Pages folder via
   * `docsUrl(repo)`. Set only to override (e.g. emf.m2x → `/index.html`).
   */
  docs?: string
}

export interface ProjectGroup {
  title: string
  description: string
  projects: Project[]
}

const ORG = 'https://github.com/eclipse-fennec'

/** Build the canonical GitHub URL for a repo. */
export const repoUrl = (repo: string) => `${ORG}/${repo}`

/** Default per-project docs link: the repo's GitHub Pages folder. */
export const docsUrl = (repo: string) => `https://eclipse-fennec.github.io/${repo}/`

export const groups: ProjectGroup[] = [
  {
    title: 'Applications',
    description: 'Ready-to-run services built on the Fennec stack.',
    projects: [
      { repo: 'model.atlas', title: 'Model Atlas', lang: 'Java', description: 'Fennec Model Atlas — a distributed EMF model registry and repository service.' },
      { repo: 'data.atlas', title: 'Data Atlas', lang: 'Java', description: 'Fennec Data Atlas — data management service built on the Fennec stack.' },
      { repo: 'dcat.atlas', title: 'DCAT Atlas', lang: 'Java', description: 'Fennec DCAT-AP open data portal.' },
    ],
  },
  {
    title: 'Java / OSGi Core',
    description:
      'The Fennec EMF runtime on the JVM — bringing the Eclipse Modeling Framework into a dynamic, modular OSGi world.',
    projects: [
      { repo: 'emf.osgi', title: 'EMF OSGi', lang: 'Java', description: 'OSGi extension for EMF — dynamic model and package registries.' },
      { repo: 'emf.util', title: 'EMF Util', lang: 'Java', description: 'Utilities and commons for Fennec EMF OSGi.' },
      { repo: 'emf.codec', title: 'EMF Codec', lang: 'Java', description: 'Jackson 3 based EMF serializer / de-serializer.' },
      { repo: 'emf.odata', title: 'EMF OData', lang: 'Java', description: 'OData protocol support for EMF models.' },
      { repo: 'emf.m2x', title: 'EMF M2X', lang: 'Java', description: 'EMF validation, transformation and generation.', docs: 'https://eclipse-fennec.github.io/emf.m2x/index.html' },
      { repo: 'emf.persistence-jpa', title: 'EMF Persistence (JPA)', lang: 'Java', description: 'EMF JPA-like persistence using EclipseLink.' },
      { repo: 'emf.editors', title: 'EMF Editors', lang: 'Java', description: 'Custom EMF Eclipse editors.' },
      { repo: 'emf.codegen-maven', title: 'EMF Codegen (Maven)', lang: 'Java', description: 'Maven code generation for EMF OSGi.' },
      { repo: 'emf.osgi-mcp', title: 'EMF OSGi MCP', lang: 'Java', description: 'MCP OSGi whiteboard using EMF models as structured output.' },
      { repo: 'common.models', title: 'Common Models', lang: 'Java', description: 'Common EMF models (Ecore models).' },
      { repo: 'model.metadata', title: 'Model Metadata', lang: 'Java', description: 'Common model metadata framework.' },
      { repo: 'camel', title: 'Camel Whiteboard', lang: 'Java', description: 'EMF Apache Camel whiteboard integration.' },
      { repo: 'fennec.bnd.libraries', title: 'BND Libraries', lang: 'Java', description: 'Fennec workspace and project libraries.' },
    ],
  },
  {
    title: 'TypeScript Stack',
    description:
      'EMF and OCL reimagined for the web — modeling, code generation and constraint evaluation in TypeScript.',
    projects: [
      { repo: 'emf.ts', title: 'EMF.ts', lang: 'TypeScript', description: 'TypeScript based EMF.' },
      { repo: 'emf.ts.codegen', title: 'EMF.ts Codegen', lang: 'TypeScript', description: 'TypeScript based EMF code generation.' },
      { repo: 'emf.ts.codec.jsonschema', title: 'EMF.ts JSON Schema Codec', lang: 'TypeScript', description: 'TypeScript based EMF codec for JSON Schema.' },
      { repo: 'emf.ts.vue.registry', title: 'EMF.ts Vue Registry', lang: 'TypeScript', description: 'Vue-based registry for TypeScript EMF.' },
      { repo: 'ocl.engine', title: 'OCL Engine', lang: 'TypeScript', description: 'Object Constraint Language evaluation engine.' },
      { repo: 'ocl.langium', title: 'OCL Langium Grammar', lang: 'TypeScript', description: 'OCL grammar built with Langium.' },
      { repo: 'ocl.lsp.worker', title: 'OCL LSP Worker', lang: 'TypeScript', description: 'OCL Langium language-server worker.' },
      { repo: 'ocl.model', title: 'OCL Model', lang: 'TypeScript', description: 'OCL model definitions.' },
    ],
  },
  {
    title: 'Python Stack',
    description:
      'The Eclipse Modeling Framework brought to Python — modeling and code generation for the Python ecosystem.',
    projects: [
      { repo: 'emf.py', title: 'EMF.py', lang: 'Python', description: 'EMF implementation for Python.' },
      { repo: 'emf.py.codegen', title: 'EMF.py Codegen', lang: 'Python', description: 'EMF code generation for Python.' },
    ],
  },
]
