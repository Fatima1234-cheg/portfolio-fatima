<template>
  <section id="skills" class="skills" ref="sectionRef">
    <div class="skills__container">
      <!-- Header de section -->
      <div class="section-header">
        <span class="section-header__subtitle">04</span>
        <h2 class="section-header__title">
          {{ currentLanguage === 'fr' ? 'Compétences' : 'Skills' }}
        </h2>
        <p class="section-header__description">
          {{ currentLanguage === 'fr'
            ? 'Les technologies Full Stack, Mobile et les outils de gestion de projet.'
            : 'Full Stack and mobile technologies, plus project management tools.' }}
        </p>
      </div>

      <!-- Grille de compétences -->
      <div class="skills__grid">
        <div 
          v-for="category in skillCategories" 
          :key="category.key"
          class="skills__category"
          :class="`skills__category--${category.key}`"
          ref="categoryRefs"
        >
          <!-- Entête de la carte -->
          <div class="skills__category-header">
            <div class="skills__icon-wrapper">
              <!-- Icônes SVG épurées -->
              <svg v-if="category.key === 'frontend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              <svg v-else-if="category.key === 'backend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              <svg v-else-if="category.key === 'database'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              <svg v-else-if="category.key === 'mobile'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3 class="skills__category-title">{{ category.label }}</h3>
          </div>

          <!-- Liste des technologies (Chips) -->
          <div class="skills__chips">
            <span 
              v-for="skill in getSkillsByCategory(category.key)" 
              :key="skill.name"
              class="skill-chip"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioStore } from '@/stores/portfolio'

gsap.registerPlugin(ScrollTrigger)

const store = usePortfolioStore()
const currentLanguage = computed(() => store.currentLanguage)

type SkillCategory = 'frontend' | 'backend' | 'database' | 'mobile' | 'tools'

const allSkills: Array<{ category: SkillCategory; name: string }> = [
  // Front-end
  { category: 'frontend', name: 'Vue.js' },
  { category: 'frontend', name: 'React' },
  { category: 'frontend', name: 'TypeScript' },
  { category: 'frontend', name: 'JavaScript' },
  { category: 'frontend', name: 'Tailwind CSS' },
  { category: 'frontend', name: 'Bootstrap' },
  { category: 'frontend', name: 'HTML5/CSS3' },
  
  // Back-end
  { category: 'backend', name: 'Node.js' },
   { category: 'backend', name: 'Spring Boot' },
  { category: 'backend', name: 'Laravel' },
  { category: 'backend', name: 'FastAPI' },
  { category: 'backend', name: 'Flask' },
  { category: 'backend', name: 'Python' },
  { category: 'backend', name: 'PHP' },
  { category: 'backend', name: 'Express' },
  
  // Base de données
  { category: 'database', name: 'MongoDB' },
  { category: 'database', name: 'MySQL' },
  { category: 'database', name: 'PostgreSQL' },

  
  // Mobile
  { category: 'mobile', name: 'Flutter' },
  { category: 'mobile', name: 'Dart' },
 
  
  // Outils & Gestion
  { category: 'tools', name: 'Git' },
  { category: 'tools', name: 'GitHub' },
  { category: 'tools', name: 'Docker' },
  { category: 'tools', name: 'VS Code' },
  { category: 'tools', name: 'Figma' },
  { category: 'tools', name: 'Postman' },
  { category: 'tools', name: 'Scrum' },
  { category: 'tools', name: 'UML' },
  { category: 'tools', name: 'MS Project' },
  { category: 'tools', name: 'Gantt' }
]

const skillCategories = computed<Array<{ key: SkillCategory; label: string }>>(() => [
  { key: 'frontend', label: 'Front-end Web' },
  { key: 'backend', label: 'Back-end / API' },
  { key: 'database', label: currentLanguage.value === 'fr' ? 'Bases de données' : 'Databases' },
  { key: 'mobile', label: currentLanguage.value === 'fr' ? 'Développement Mobile' : 'Mobile Development' },
  { key: 'tools', label: currentLanguage.value === 'fr' ? 'Outils & Gestion' : 'Tools & Management' }
])

const getSkillsByCategory = (category: SkillCategory) => {
  return allSkills.filter((skill) => skill.category === category)
}

// --- Animations GSAP ---
const sectionRef = ref<HTMLElement>()
const categoryRefs = ref<HTMLElement[]>([])

onMounted(() => {
  if (categoryRefs.value.length) {
    gsap.fromTo(categoryRefs.value, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
        }
      }
    )
  }
})
</script>

<style lang="scss" scoped>
/* =========================================
   DARK THEME VARIABLES
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$primary: #6366f1;

.skills {
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

  /* En-tête de section */
  .section-header {
    margin-bottom: 60px;
    max-width: 600px;

    &__subtitle {
      display: inline-block;
      font-family: 'DM Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: $primary;
      margin-bottom: 12px;
    }

    &__title {
      font-size: clamp(36px, 5vw, 48px);
      font-weight: 800;
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

  /* Grille de cartes */
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Carte Catégorie (Glassmorphism) */
  &__category {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    /* Halo de couleur subtil au survol */
    &::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: transparent;
      transition: background 0.3s ease;
    }

    &:hover {
      transform: translateY(-4px);
      background: rgba(15, 23, 42, 0.6);
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  }

  /* Couleurs spécifiques par catégorie au survol */
  &__category--frontend:hover {
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1);
    &::before { background: #10b981; }
    .skills__icon-wrapper { color: #10b981; background: rgba(16, 185, 129, 0.1); }
    .skill-chip:hover { border-color: #10b981; color: #34d399; background: rgba(16, 185, 129, 0.1); }
  }
  &__category--backend:hover {
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
    &::before { background: #3b82f6; }
    .skills__icon-wrapper { color: #3b82f6; background: rgba(59, 130, 246, 0.1); }
    .skill-chip:hover { border-color: #3b82f6; color: #60a5fa; background: rgba(59, 130, 246, 0.1); }
  }
  &__category--database:hover {
    box-shadow: 0 20px 40px rgba(245, 158, 11, 0.1);
    &::before { background: #f59e0b; }
    .skills__icon-wrapper { color: #f59e0b; background: rgba(245, 158, 11, 0.1); }
    .skill-chip:hover { border-color: #f59e0b; color: #fbbf24; background: rgba(245, 158, 11, 0.1); }
  }
  &__category--mobile:hover {
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
    &::before { background: #a855f7; }
    .skills__icon-wrapper { color: #a855f7; background: rgba(168, 85, 247, 0.1); }
    .skill-chip:hover { border-color: #a855f7; color: #c084fc; background: rgba(168, 85, 247, 0.1); }
  }
  &__category--tools:hover {
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.1);
    &::before { background: #ec4899; }
    .skills__icon-wrapper { color: #ec4899; background: rgba(236, 72, 153, 0.1); }
    .skill-chip:hover { border-color: #ec4899; color: #f472b6; background: rgba(236, 72, 153, 0.1); }
  }

  /* Entête de la carte */
  &__category-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    color: $text-primary;
    transition: all 0.3s ease;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  &__category-title {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: $text-primary;
    letter-spacing: -0.01em;
  }

  /* Conteneur des Chips */
  &__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}

/* --- Style des Chips (Pastilles) --- */
.skill-chip {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  color: #cbd5e1;
  transition: all 0.25s ease;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
  }
}
</style>