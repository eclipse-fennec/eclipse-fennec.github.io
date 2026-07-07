<script setup lang="ts">
import { groups, repoUrl, docsUrl } from './projects'

const langClass = (lang?: string) =>
  lang ? `lang lang-${lang.toLowerCase()}` : 'lang lang-other'
</script>

<template>
  <section class="project-overview">
    <div v-for="group in groups" :key="group.title" class="project-group">
      <h2 :id="group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')">
        {{ group.title }}
      </h2>
      <p class="group-desc">{{ group.description }}</p>

      <div class="cards">
        <article v-for="p in group.projects" :key="p.repo" class="card">
          <header>
            <h3>{{ p.title }}</h3>
            <span v-if="p.lang" :class="langClass(p.lang)">{{ p.lang }}</span>
          </header>
          <p class="desc">{{ p.description }}</p>
          <footer>
            <a :href="p.docs ?? docsUrl(p.repo)" class="link link-docs">Docs</a>
            <a :href="repoUrl(p.repo)" class="link link-repo" target="_blank" rel="noreferrer">
              Repository ↗
            </a>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-overview {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}
.project-group {
  margin-top: 48px;
}
.project-group h2 {
  border-top: none;
  margin: 0 0 4px;
  padding-top: 0;
  font-size: 1.5rem;
}
.group-desc {
  color: var(--vp-c-text-2);
  margin: 0 0 20px;
  max-width: 60ch;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 18px 20px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}
.card header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}
.card h3 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.3;
}
.desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 16px;
  flex: 1;
}
.card footer {
  display: flex;
  gap: 14px;
}
.link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}
.link:hover {
  text-decoration: underline;
}
.lang {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
  color: #fff;
}
.lang-java {
  background: #b07219;
}
.lang-typescript {
  background: #3178c6;
}
.lang-python {
  background: #3572a5;
}
.lang-mixed {
  background: #6e7781;
}
.lang-other {
  background: #6e7781;
}
</style>
