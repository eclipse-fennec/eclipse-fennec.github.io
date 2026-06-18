---
layout: home

hero:
  name: Eclipse Fennec
  text: EMF for OSGi and the Web
  tagline: Turning the Eclipse Modeling Framework into first-class OSGi services — and bringing a full EMF/OCL stack to the web.
  image:
    src: /fennec-logo.png
    alt: Eclipse Fennec logo
  actions:
    - theme: brand
      text: Explore Projects
      link: '#projects'
    - theme: alt
      text: View on GitHub
      link: https://github.com/eclipse-fennec
    - theme: alt
      text: Eclipse Project Page
      link: https://projects.eclipse.org/projects/modeling.fennec

features:
  - icon: 🦊
    title: EMF, modularized
    details: Brings the Eclipse Modeling Framework into a dynamic OSGi world with whiteboard-style model and package registries.
  - icon: 🌐
    title: Models on the Web
    details: A complete TypeScript reimplementation of EMF — modeling, code generation and serialization that runs in the browser and Node.
  - icon: ✓
    title: OCL everywhere
    details: A Langium-based OCL grammar and evaluation engine for validating and querying models across both stacks.
  - icon: 🧩
    title: Built to integrate
    details: Codecs, persistence, Camel and MCP integrations let Fennec models flow through real-world systems.
---

## Project Overview {#projects}

Eclipse Fennec extends EMF to work optimally with OSGi and adds the components
needed for end-to-end, model-based applications — serialization and codecs,
distributed model registries, persistence and validation. The work spans a
ready-to-run application, a Java/OSGi core, and a TypeScript stack. Pick a
project to jump to its repository.

<ProjectGrid />
