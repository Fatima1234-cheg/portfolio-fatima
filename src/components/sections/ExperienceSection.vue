<template>
  <section id="experience" class="experience" ref="sectionRef">
    <div class="experience__container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-header__subtitle">02</span>
        <h2 class="section-header__title">
          {{ currentLanguage === 'fr' ? 'Expériences' : 'Experiences' }}
        </h2>
        <p class="section-header__description">
          {{ currentLanguage === 'fr' 
            ? 'Mon parcours professionnel et mes stages en développement Full Stack, UI/UX.'
            : 'My professional journey and internships in Full Stack, UI/UX and Data development.'
          }}
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="experience__timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="experience__item"
          :class="{ 'experience__item--left': index % 2 === 0, 'experience__item--right': index % 2 === 1 }"
          ref="experienceItems"
        >
          <!-- Timeline Dot -->
          <div class="experience__dot">
            <div class="experience__dot-inner"></div>
          </div>

          <!-- Content Card -->
          <div class="experience__card">
            <!-- Header : Entreprise & Lieu -->
            <div class="experience__header">
              <div class="experience__company">
                <div class="experience__company-logo">
                  {{ exp.company.charAt(0) }}
                </div>
                <div class="experience__company-info">
                  <h3 class="experience__company-name">{{ exp.company }}</h3>
                  <span class="experience__location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {{ exp.location }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Titre du poste et Date -->
            <div class="experience__position">
              <h4 class="experience__position-title">{{ exp.position }}</h4>
              <span class="experience__date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {{ exp.date }}
              </span>
            </div>

            <!-- Missions (Liste à puces) -->
            <ul class="experience__missions">
              <li v-for="(mission, mIndex) in exp.missions" :key="mIndex">
                {{ mission }}
              </li>
            </ul>

            <!-- Technologies -->
            <div class="experience__technologies">
              <span 
                v-for="tech in exp.technologies" 
                :key="tech"
                class="experience__tech"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Timeline Line -->
        <div class="experience__line">
          <div class="experience__line-progress"></div>
        </div>
      </div>

      <!-- Education Section (Formation) -->
      <div class="experience__education">
        <h3 class="experience__education-title">
          {{ currentLanguage === 'fr' ? 'Formation' : 'Education' }}
        </h3>
        
        <div class="experience__education-list">
          <div 
            v-for="edu in education" 
            :key="edu.id"
            class="experience__education-item"
          >
            <div class="experience__education-year">{{ edu.year }}</div>
            <div class="experience__education-content">
              <h4 class="experience__education-degree">{{ edu.degree }}</h4>
              <span class="experience__education-school">{{ edu.school }}</span>
              <p class="experience__education-desc">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePortfolioStore } from '@/stores/portfolio'

gsap.registerPlugin(ScrollTrigger)

const store = usePortfolioStore()
const currentLanguage = computed(() => store.currentLanguage)

const experiences = computed(() => [
  {
    id: 1,
    company: 'ARIMAY',
    location: 'France',
    position: currentLanguage.value === 'fr' ? 'Stage Développeuse Front-End & UI/UX' : 'Front-End & UI/UX Developer Intern',
    date: currentLanguage.value === 'fr' ? 'Juillet – Octobre 2025' : 'July – October 2025',
    missions: currentLanguage.value === 'fr' ? [
      'Conception des maquettes (UI/UX) et développement d’interfaces multiplateformes (Web, Desktop, Mobile) pour la plateforme IdeaToMarket (accompagnement des entrepreneurs).',
      'Intégration de l’interface statique puis développement de la partie dynamique avec des commits quotidiens via Git.',
      'Réalisation de tests d’intégration en collaboration avec l’équipe backend et travail en méthode Agile (Scrum).'
    ] : [
      'Designed UI/UX mockups and developed cross-platform web, desktop, and mobile interfaces for IdeaToMarket, a platform supporting entrepreneurs.',
      'Integrated the static interface, then built its dynamic features with daily Git commits.',
      'Performed integration testing with the backend team and worked using the Agile Scrum methodology.'
    ],
    technologies: ['Flutter', 'Git', 'GitHub', 'Scrum', 'Figma']
  },
  {
    id: 2,
    company: 'SRM-CS',
    location: 'El Jadida',
    position: currentLanguage.value === 'fr' ? 'Stage Développeuse Full Stack & UI/UX' : 'Full Stack & UI/UX Developer Intern',
    date: currentLanguage.value === 'fr' ? 'Juillet – Septembre 2025' : 'July – September 2025',
    missions: currentLanguage.value === 'fr' ? [
      'Conception de l’architecture logicielle et des maquettes UI/UX pour l’application de gestion des réclamations clients.',
      'Développement de la partie Backend et modélisation des flux de données pour le suivi client.',
      'Développement de la partie Frontend intégrant un chatbot conversationnel pour l’automatisation des réponses.',
      'Intégration des API REST liant le Frontend et le Backend, avec réalisation des tests d’intégration.'
    ] : [
      'Designed the software architecture and UI/UX mockups for a customer complaint management application.',
      'Developed the backend and modeled data flows for customer follow-up.',
      'Built the frontend, including a conversational chatbot to automate responses.',
      'Integrated REST APIs between the frontend and backend and performed integration testing.'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Git', 'GitHub', 'Scrum', 'Figma', 'UML']
  },
  {
    id: 3,
    company: 'OCP',
    location: 'El Jadida',
    position: currentLanguage.value === 'fr' ? 'Stage Développeuse Full Stack & Data' : 'Full Stack & Data Developer Intern',
    date: currentLanguage.value === 'fr' ? 'Avril – Juin 2024' : 'April – June 2024',
    missions: currentLanguage.value === 'fr' ? [
      'Développé la plateforme DIGIMINE de gestion des tâches administratives pour la transformation digitale.',
      'Conçu des requêtes SQL complexes et des dashboards interactifs (KPI) pour le pilotage décisionnel.'
    ] : [
      'Developed DIGIMINE, an administrative task management platform supporting digital transformation.',
      'Built complex SQL queries and interactive KPI dashboards for decision-making.'
    ],
    technologies: ['Laravel', 'Bootstrap', 'Chart.js', 'phpMyAdmin']
  }
])

const education = computed(() => [
  {
    id: 1,
    year: currentLanguage.value === 'fr' ? '2025 — Présent' : '2025 — Present',
    degree: currentLanguage.value === 'fr' ? 'Cycle d\'ingénieur — Génie Informatique & IA' : 'Engineering Degree — Computer Science & AI',
    school: 'ENSA Safi',
    description: currentLanguage.value === 'fr'
      ? '3ᵉ année du cycle d\'ingénieur en Génie Informatique et Intelligence Artificielle.'
      : 'Third year of the engineering program in Computer Science and Artificial Intelligence.'
  },
  {
    id: 2,
    year: '2024 — 2025',
    degree: currentLanguage.value === 'fr' ? 'Master 1 — Ingénierie Digitale pour les Métiers de la Santé' : 'Master’s in Digital Engineering for Healthcare',
    school: 'ENSAM Casablanca',
    description: currentLanguage.value === 'fr'
      ? 'Formation spécialisée dans l\'ingénierie digitale appliquée au secteur de la santé.'
      : 'Specialized training in digital engineering applied to healthcare.'
  },
  {
    id: 3,
    year: '2023 — 2024',
    degree: currentLanguage.value === 'fr' ? 'Licence Système d\'Information & Transformation Digitale' : 'Bachelor’s in Information Systems & Digital Transformation',
    school: 'FST Settat',
    description: currentLanguage.value === 'fr'
      ? 'Formation en systèmes d\'information et transformation digitale des entreprises.'
      : 'Training in information systems and the digital transformation of businesses.'
  },
  {
    id: 4,
    year: '2021 — 2023',
    degree: currentLanguage.value === 'fr' ? 'DEUST Mathématiques, Informatique & Physique' : 'DEUST in Mathematics, Computer Science & Physics',
    school: 'FST Settat',
    description: currentLanguage.value === 'fr'
      ? 'Diplôme d\'études universitaires scientifiques et techniques.'
      : 'University Diploma in Science and Technology.'
  }
])

const sectionRef = ref<HTMLElement>()
const experienceItems = ref<HTMLElement[]>([])

onMounted(() => {
  // Animate experience items on scroll
  if (experienceItems.value.length > 0) {
    experienceItems.value.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }
  
  // Timeline progress animation
  const lineProgress = document.querySelector('.experience__line-progress')
  if (lineProgress) {
    gsap.fromTo(lineProgress,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.experience__timeline',
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      }
    )
  }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

/* =========================================
   VARIABLES (Thème sombre)
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$primary: #6366f1;
$border-color: rgba(255, 255, 255, 0.08);

.experience {
  position: relative;
  padding: 100px 0;
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;

  &__container {
    width: 100%;
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
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: $primary;
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

  /* --- TIMELINE --- */
  &__timeline {
    position: relative;
    margin-top: 40px;
    padding: 20px 0;
  }

  &__line {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.05);

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__line-progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to bottom, $primary, #c084fc);
    transform-origin: top;
  }

  &__item {
    position: relative;
    display: flex;
    margin-bottom: 40px;
    padding-left: 60px;

    @media (min-width: 768px) {
      padding-left: 0;
      width: calc(50% - 40px);
    }

    &--left {
      @media (min-width: 768px) {
        margin-right: auto;
        padding-right: 40px;
      }
    }

    &--right {
      @media (min-width: 768px) {
        margin-left: auto;
        padding-left: 40px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__dot {
    position: absolute;
    left: 10px;
    top: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $bg-color;
    border: 2px solid $primary;
    border-radius: 50%;
    z-index: 2;

    @media (min-width: 768px) {
      left: auto;
      right: -50px;
    }

    .experience__item--right & {
      @media (min-width: 768px) {
        right: auto;
        left: -50px;
      }
    }
  }

  &__dot-inner {
    width: 8px;
    height: 8px;
    background: $primary;
    border-radius: 50%;
    box-shadow: 0 0 10px $primary;
  }

  /* --- CARTE D'EXPÉRIENCE --- */
  &__card {
    width: 100%;
    padding: 32px;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid $border-color;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__company {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__company-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, $primary, #8b5cf6);
    border-radius: 12px;
  }

  &__company-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__company-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: $text-primary;
    margin: 0;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: $text-tertiary;
  }

  /* Titre du poste */
  &__position {
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  &__position-title {
    font-size: 16px;
    font-weight: 600;
    color: $primary;
    margin: 0 0 6px;
  }

  &__date {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: $text-secondary;
  }

  /* Liste des missions */
  &__missions {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      position: relative;
      padding-left: 20px;
      font-size: 14px;
      line-height: 1.6;
      color: $text-secondary;

      &::before {
        content: '—';
        position: absolute;
        left: 0;
        top: 0;
        color: $primary;
        font-weight: 700;
      }
    }
  }

  /* Technologies */
  &__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__tech {
    padding: 6px 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 600;
    color: #cbd5e1;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid $border-color;
    border-radius: 6px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(99, 102, 241, 0.1);
      border-color: rgba(99, 102, 241, 0.3);
      color: $primary;
    }
  }

  /* --- FORMATION (Education) --- */
  &__education {
    margin-top: 100px;
    padding-top: 60px;
    border-top: 1px solid $border-color;
  }

  &__education-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    color: $text-primary;

    span {
      color: $primary;
    }
  }

  &__education-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__education-item {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: rgba(15, 23, 42, 0.3);
    border: 1px solid $border-color;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(255, 255, 255, 0.15);
      background: rgba(15, 23, 42, 0.5);
    }
  }

  &__education-year {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: $primary;
    margin-bottom: 8px;
  }

  &__education-degree {
    font-size: 16px;
    font-weight: 600;
    color: $text-primary;
    margin: 0 0 4px;
  }

  &__education-school {
    font-size: 14px;
    font-weight: 500;
    color: #c084fc; /* Violet pour contraster */
    margin-bottom: 12px;
  }

  &__education-desc {
    font-size: 13px;
    line-height: 1.5;
    color: $text-secondary;
    margin: 0;
  }
}
</style>