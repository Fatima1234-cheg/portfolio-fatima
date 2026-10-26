<template>
  <section id="projects" class="projects" ref="sectionRef">
    <div class="projects__container">
      <!-- Header de section -->
      <div class="section-header">
        <span class="section-header__subtitle">03</span>
        <h2 class="section-header__title">
          {{ currentLanguage === 'fr' ? 'Projets' : 'Projects' }}
        </h2>
        <p class="section-header__description">
          {{ currentLanguage === 'fr' 
            ? 'Découvrez mes projets académiques et professionnels.' 
            : 'Discover my academic and professional projects.' }}
        </p>
      </div>

     

      <!-- Grille de cartes -->
      <div class="projects__grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
          :class="`theme-${project.id}`"
        >
          <!-- 1. Galerie d'images -->
          <div class="project-card__gallery" v-if="imageCount(project) > 0">
            <div class="gallery__stage">
              <Transition name="fade" mode="out-in">
                <img
                  :key="`${project.id}-${getIndex(project.id)}`"
                  :src="currentImage(project)"
                  :alt="project.title"
                  class="gallery__image"
                />
              </Transition>
              <!-- Flèches -->
              <button v-if="imageCount(project) > 1" @click="prev(project.id, imageCount(project))" class="gallery__arrow gallery__arrow--left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button v-if="imageCount(project) > 1" @click="next(project.id, imageCount(project))" class="gallery__arrow gallery__arrow--right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
            <!-- Pastilles -->
            <div v-if="imageCount(project) > 1" class="gallery__pills">
              <button
                v-for="(_, nIndex) in imagesByProject[project.id]"
                :key="nIndex"
                class="gallery__pill"
                :class="{ active: nIndex === getIndex(project.id) }"
                @click="goTo(project.id, nIndex)"
              ></button>
            </div>
          </div>

          <!-- 2. Contenu principal -->
          <div class="project-card__content">
            <!-- En-tête regroupé (Titre + Sous-titre) -->
            <div class="project-card__header">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__subtitle">{{ project.subtitle }}</p>
            </div>

            <p class="project-card__desc">{{ project.description }}</p>

            <!-- Tags Tech -->
            <div class="project-card__tags">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <!-- Bouton Détails Unique -->
            <button 
              class="project-card__toggle"
              @click="toggleDetails(project.id)"
              :class="{ 'is-open': expandedProject === project.id }"
            >
              <span>{{ expandedProject === project.id ? 'Masquer les détails' : 'Découvrir le projet' }}</span>
              <div class="toggle-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </button>

            <!-- 3. Zone de détails (Expandable) -->
            <Transition name="expand">
              <div v-if="expandedProject === project.id" class="project-card__details">
                <div class="detail-group">
                  <h4 class="detail-title">Contexte</h4>
                  <p class="detail-text">{{ project.context }}</p>
                </div>
                
                <div class="detail-group" v-if="project.objectives?.length">
                  <h4 class="detail-title">Objectifs</h4>
                  <ul class="detail-list">
                    <li v-for="obj in project.objectives" :key="obj">{{ obj }}</li>
                  </ul>
                </div>

                <div class="detail-group" v-if="project.features?.length">
                  <h4 class="detail-title">Fonctionnalités</h4>
                  <ul class="detail-list">
                    <li v-for="feat in project.features" :key="feat">{{ feat }}</li>
                  </ul>
                </div>
              </div>
            </Transition>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/project'
import type { Project } from '@/data/project'

// --- LOGIQUE GALERIE ---
function allImages(project: Project): string[] {
  const images: string[] = []
  if (project.image) images.push(project.image)
  if (Array.isArray(project.gallery)) {
    for (const image of project.gallery) {
      if (image && !images.includes(image)) images.push(image)
    }
  }
  return images
}

const imagesByProject = computed<Record<string, string[]>>(() => {
  const map: Record<string, string[]> = {}
  for (const project of projects) {
    map[project.id] = allImages(project)
  }
  return map
})

function imageCount(project: Project): number {
  return imagesByProject.value[project.id]?.length ?? 0
}

const currentIndex = ref<Record<string, number>>({})

function getIndex(id: string): number {
  return currentIndex.value[id] ?? 0
}

function currentImage(project: Project): string {
  const images = imagesByProject.value[project.id] ?? []
  return images[getIndex(project.id)] ?? ''
}

function goTo(id: string, index: number) {
  currentIndex.value[id] = index
}

function next(id: string, total: number) {
  if (total <= 1) return
  const current = getIndex(id)
  currentIndex.value[id] = (current + 1) % total
}

function prev(id: string, total: number) {
  if (total <= 1) return
  const current = getIndex(id)
  currentIndex.value[id] = (current - 1 + total) % total
}

// --- LOGIQUE EXPANDABLE ---
const expandedProject = ref<string | null>(null)

function toggleDetails(id: string) {
  if (expandedProject.value === id) {
    expandedProject.value = null
  } else {
    expandedProject.value = id
  }
}

// --- FILTRES ---
const activeFilter = ref('all')
const filters = [
  { key: 'all', label: 'Tous' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'data', label: 'Data' },
  { key: 'ai', label: 'IA' }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => {
    const techString = p.tech.join(' ').toLowerCase()
    if (activeFilter.value === 'ai' && (techString.includes('ai') || techString.includes('flask') || techString.includes('ml'))) return true
    if (activeFilter.value === 'data' && (techString.includes('mysql') || techString.includes('mongodb') || techString.includes('data'))) return true
    if (activeFilter.value === 'mobile' && techString.includes('mobile')) return true
    if (activeFilter.value === 'web' && (techString.includes('vue') || techString.includes('react') || techString.includes('laravel'))) return true
    return false
  })
})

const currentLanguage = ref('fr')
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

/* =========================================
   DARK THEME GLOBAL VARIABLES
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$border-color: rgba(255, 255, 255, 0.08);

.projects {
  position: relative;
  padding: 100px 0;
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;

  &__container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  /* En-tête */
  .section-header {
    margin-bottom: 40px;
    max-width: 600px;

    &__subtitle {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: #6366f1; /* Fallback */
      margin-bottom: 12px;
    }

    &__title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(36px, 5vw, 48px);
      font-weight: 700;
      letter-spacing: -0.03em;
      margin: 0 0 16px;
      color: $text-primary;
    }

    &__description {
      font-size: 16px;
      line-height: 1.6;
      color: $text-secondary;
      margin: 0;
    }
  }

  /* Filtres */
  &__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
  }

  &__filter {
    padding: 10px 20px;
    background: transparent;
    border: 1px solid $border-color;
    border-radius: 100px;
    color: $text-secondary;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: $text-primary;
      border-color: rgba(255, 255, 255, 0.2);
    }

    &--active {
      background: #6366f1;
      color: white;
      border-color: #6366f1;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    }
  }

  /* Grille de cartes */
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

/* =========================================
   CARTE PROJET UNIQUE (Chaque projet a son univers)
========================================= */
.project-card {
  display: flex;
  flex-direction: column;
  /* Variables par défaut, écrasées par les classes .theme-... plus bas */
  --card-bg: rgba(15, 23, 42, 0.4);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-color: #6366f1;
  --accent-glow: rgba(99, 102, 241, 0.3);
  
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: fit-content;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
    box-shadow: 0 20px 40px var(--accent-glow);
  }

  /* --- Galerie d'images (Reste pareil) --- */
  &__gallery {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0a0f1c;
    border-bottom: 1px solid var(--card-border);
    overflow: hidden;
  }

  .gallery__stage {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gallery__image {
    width: 100%;
    height: 100%;
    object-fit: contain; 
    display: block;
    border-radius: 8px;
  }

  .gallery__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(5, 8, 20, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 2;

    svg { width: 18px; height: 18px; }

    &:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
    }

    &--left { left: 16px; }
    &--right { right: 16px; }
  }

  .gallery__pills {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 2;
  }

  .gallery__pill {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      background: var(--accent-color);
      box-shadow: 0 0 10px var(--accent-color);
      transform: scale(1.3);
    }
  }

  /* --- Contenu --- */
  &__content {
    display: flex;
    flex-direction: column;
    padding: 28px;
  }

  &__header {
    margin-bottom: 16px;
  }

  /* Titre et sous-titre regroupés */
  &__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: $text-primary;
    margin: 0 0 4px;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent-color); /* Prend la couleur du thème */
    margin: 0;
    display: inline-block;
  }

  &__desc {
    font-size: 14px;
    line-height: 1.6;
    color: $text-secondary;
    margin: 16px 0 20px;
  }

  /* Tags */
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .tech-tag {
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--card-border);
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 600;
    color: #cbd5e1;
    transition: all 0.2s ease;

    &:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
    }
  }

  /* --- BOUTON DÉTAILS UNIQUE --- */
  &__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 20px;
    background: transparent;
    border: 1px solid var(--card-border);
    border-radius: 12px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: $text-primary;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    /* Halo au survol */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent-color);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    span, .toggle-icon {
      position: relative;
      z-index: 1;
    }

    .toggle-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      
      svg {
        width: 14px;
        height: 14px;
        transition: transform 0.3s ease;
      }
    }

    &:hover {
      border-color: var(--accent-color);
      
      &::before { opacity: 0.15; }
      .toggle-icon {
        background: var(--accent-color);
        color: #000;
        transform: translateX(4px);
      }
    }

    &.is-open {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: #000; /* Texte noir pour contraster avec la couleur vive */
      
      .toggle-icon {
        background: rgba(0, 0, 0, 0.2);
        color: #000;
        transform: rotate(90deg); /* La flèche tourne */
      }
    }
  }

  /* --- Zone Détails (Expandable) --- */
  &__details {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dashed var(--card-border);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .detail-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-color);
    margin: 0;
  }

  .detail-text {
    font-size: 13.5px;
    line-height: 1.6;
    color: $text-secondary;
    margin: 0;
  }

  .detail-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;

    li {
      font-size: 13.5px;
      line-height: 1.5;
      color: $text-secondary;
      position: relative;
      padding-left: 18px;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        top: 0;
        color: var(--accent-color);
        font-size: 13px;
      }
    }
  }
}

/* =========================================
   LES UNIVERS UNIQUES PAR PROJET (Themes)
========================================= */

/* 1. Fellah (Agriculture / Nature) */
.theme-fellah {
  --card-bg: rgba(20, 32, 21, 0.6);
  --card-border: rgba(74, 222, 128, 0.15);
  --accent-color: #4ade80; /* Vert */
  --accent-glow: rgba(74, 222, 128, 0.15);
}

/* 2. Smart Safi (Smart City / Data) */
.theme-smart-safi {
  --card-bg: rgba(15, 23, 42, 0.6);
  --card-border: rgba(56, 189, 248, 0.15);
  --accent-color: #38bdf8; /* Cyan / Bleu clair */
  --accent-glow: rgba(56, 189, 248, 0.15);
}

/* 3. BreastCare (Médical / IA) */
.theme-breastcare {
  --card-bg: rgba(32, 17, 25, 0.6);
  --card-border: rgba(244, 114, 182, 0.15);
  --accent-color: #f472b6; /* Rose / Médical */
  --accent-glow: rgba(244, 114, 182, 0.15);
}

/* 4. MedEquip (Industriel / GMAO) */
.theme-medequip {
  --card-bg: rgba(13, 32, 31, 0.6);
  --card-border: rgba(45, 212, 191, 0.15);
  --accent-color: #2dd4bf; /* Turquoise */
  --accent-glow: rgba(45, 212, 191, 0.15);
}

/* 5. Presence ENSA (Éducation / Web) */
.theme-presence-ensa {
  --card-bg: rgba(20, 20, 40, 0.6);
  --card-border: rgba(129, 140, 248, 0.15);
  --accent-color: #818cf8; /* Indigo */
  --accent-glow: rgba(129, 140, 248, 0.15);
}

/* 6. Gestion PFE (Académique) */
.theme-pfe {
  --card-bg: rgba(30, 20, 35, 0.6);
  --card-border: rgba(252, 214, 132, 0.15);
  --accent-color: #fcd884; /* Violet */
  --accent-glow: rgba(252, 228, 132, 0.15);
}

/* =========================================
   ANIMATIONS
========================================= */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 1000px; /* Augmenté pour les longs textes */
  opacity: 1;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>