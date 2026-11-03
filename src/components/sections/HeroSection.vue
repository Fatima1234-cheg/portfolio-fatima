<template>
  <main class="portfolio-page">
    <!-- =============================================
         01 — HERO SECTION
    ============================================== -->
    <section id="hero" class="hero" ref="heroRef">
      <!-- Animated Background (Dark Theme) -->
      <div class="hero__bg">
        <div class="hero__grid"></div>
        <div class="hero__glow hero__glow--1"></div>
        <div class="hero__glow hero__glow--2"></div>
      </div>

      <div class="hero__container">
        <!-- Left Content -->
        <div class="hero__content">
          <!-- Badge -->
          <div class="hero__badge" ref="badgeRef">
            <span class="hero__badge-dot"></span>
            <span class="hero__badge-text">
              {{ currentLanguage === 'fr' ? 'Disponible pour un stage PFE · 2026' : 'Available for a final-year internship · 2026' }}
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="hero__title" ref="titleRef">
            {{ currentLanguage === 'fr' ? "J'apprends, je code," : 'I learn, I code,' }}<br />
            <span class="hero__title-gradient">{{ currentLanguage === 'fr' ? 'je livre.' : 'I deliver.' }}</span><br />
            {{ currentLanguage === 'fr' ? 'En boucle.' : 'Repeat.' }}
          </h1>

          <!-- Description -->
          <div class="hero__description" ref="descRef">
            <p>
              {{ currentLanguage === 'fr' ? 'Je suis' : 'I am' }}
              <strong>Fatima Chegdani</strong>{{ currentLanguage === 'fr'
                ? ", étudiante en 3ᵉ année du cycle ingénieur en Génie Informatique à l'ENSA Safi."
                : ', a third-year Computer Engineering student at ENSA Safi.' }}
            </p>
            <p>
              {{ currentLanguage === 'fr' ? 'Développeuse' : 'As a' }}
              <strong>Full Stack Web</strong>{{ currentLanguage === 'fr'
                ? ', je conçois des applications modernes en travaillant sur toute la chaîne : interface utilisateur, API, logique métier et bases de données.'
                : ' developer, I build modern applications across the full stack: user interfaces, APIs, business logic, and databases.' }}
            </p>
          </div>

          <!-- Typewriter / Spécialités -->
          <div class="hero__specialties" ref="ctaRef">
            <span class="hero__specialties-label">{{ currentLanguage === 'fr' ? 'SPÉCIALITÉS :' : 'SPECIALTIES:' }}</span>
            <span class="hero__specialties-text" ref="roleTextRef"></span>
            <span class="hero__specialties-cursor"></span>
          </div>

          <!-- Info Grid -->
          <div class="hero__info-grid" ref="statsRef">
            <div class="hero__info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <span class="info-label">{{ currentLanguage === 'fr' ? 'Localisation' : 'Location' }}</span>
                <span class="info-value">{{ currentLanguage === 'fr' ? 'Casablanca, Maroc' : 'Casablanca, Morocco' }}</span>
              </div>
            </div>
            <div class="hero__info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <div>
                <span class="info-label">{{ currentLanguage === 'fr' ? 'Formation' : 'Education' }}</span>
                <span class="info-value">ENSA Safi · GIIA</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Visual (Unique Digital ID Card) -->
        <div class="hero__visual" ref="visualRef" @mousemove="handleTilt" @mouseleave="resetTilt">
          
          <!-- Badges Flottants -->
          <div class="floating-badge floating-badge--frontend">FRONTEND</div>
          <div class="floating-badge floating-badge--backend">BACKEND</div>
          <div class="floating-badge floating-badge--dev">DEV</div>
          <div class="floating-badge floating-badge--data">MVC</div>
          <div class="floating-badge floating-badge--api">REST APIs</div>
          <div class="floating-badge floating-badge--etl">API Integration</div>
          <div class="floating-badge floating-badge--workflow">Responsive UI</div>
          <div class="floating-badge floating-badge--dax">Databases</div>

          <!-- Main ID Card -->
          <div class="id-card" :style="tiltStyle">
            <div class="id-card__glow" :style="glowStyle"></div>
            
            <div class="id-card__header">
              <div class="id-card__dots">
                <span></span><span></span><span></span>
              </div>
              <div class="id-card__terminal-text">user@fatima:~$</div>
            </div>

            <div class="id-card__image-wrap">
              <div class="id-card__image-bg"></div>
              <img :src="heroImage" alt="Fatima Chegdani" class="id-card__image" />
              <div class="id-card__placeholder">FC</div>
            </div>

            <div class="id-card__info">
              <div class="id-card__name-row">
                <h3 class="id-card__name">Fatima <span>Chegdani</span></h3>
                <span class="id-card__verified">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </span>
              </div>
              <p class="id-card__role">{{ currentLanguage === 'fr' ? 'Développeuse Full Stack Web' : 'Full Stack Web Developer' }}</p>
              
              <div class="id-card__tags">
                 <span>React</span>
                 <span>Node Js</span>
                <span>Vue.js</span>
                <span>Laravel</span>
                <span>Typescript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =============================================
         01.5 — PROCESSUS SECTION
    ============================================== -->
    <section id="process" class="process" ref="sectionRef">
      <!-- Background Effects (Style Contact/Black) -->
      <div class="process__bg">
        <div class="process__grid"></div>
        <div class="process__glow process__glow--1"></div>
        <div class="process__glow process__glow--2"></div>
      </div>

      <div class="process__container">
        <!-- Header de section -->
        <div class="section-header">
          <span class="section-header__subtitle">01.5</span>
          <h2 class="section-header__title">
          {{ currentLanguage === 'fr' ? 'Du développement' : 'From development' }} <br />
          <span>{{ currentLanguage === 'fr' ? 'à la mise en production.' : 'to production.' }}</span>
          </h2>
          <p class="section-header__description">
          {{ currentLanguage === 'fr'
            ? 'Une méthodologie structurée pour transformer une idée en un produit fiable, testé et déployé.'
            : 'A structured methodology for turning an idea into a reliable, tested, and deployed product.' }}
          </p>
        </div>

        <!-- Grille des étapes -->
        <div class="process__steps">
          <!-- Étape 1 -->
          <div class="process-card">
            <div class="process-card__number">01</div>
            <div class="process-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <h3 class="process-card__title">{{ currentLanguage === 'fr' ? 'Conception & Design' : 'Planning & Design' }}</h3>
            <p class="process-card__text">
              {{ currentLanguage === 'fr'
                ? 'Analyse des besoins métier, maquettage UI/UX (Figma) et modélisation de l’architecture des données.'
                : 'Analyzing business needs, creating UI/UX mockups in Figma, and modeling the data architecture.' }}
            </p>
          </div>

          <!-- Étape 2 -->
          <div class="process-card">
            <div class="process-card__number">02</div>
            <div class="process-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="process-card__title">{{ currentLanguage === 'fr' ? 'Développement & API' : 'Development & APIs' }}</h3>
            <p class="process-card__text">
              {{ currentLanguage === 'fr'
                ? 'Développement du front-end, du back-end et des API REST. Application des principes du Clean Code et de l’architecture MVC.'
                : 'Building the frontend, backend, and REST APIs while applying Clean Code principles and MVC architecture.' }}
            </p>
          </div>

          <!-- Étape 3 -->
          <div class="process-card">
            <div class="process-card__number">03</div>
            <div class="process-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 class="process-card__title">{{ currentLanguage === 'fr' ? 'Tests & Qualité' : 'Testing & Quality' }}</h3>
            <p class="process-card__text">
              {{ currentLanguage === 'fr'
                ? 'Rédaction de tests d’intégration, validation des fonctionnalités et correction des bugs pour garantir la fiabilité.'
                : 'Writing integration tests, validating features, and fixing bugs to ensure reliability.' }}
            </p>
          </div>

          <!-- Étape 4 -->
          <div class="process-card">
            <div class="process-card__number">04</div>
            <div class="process-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <h3 class="process-card__title">{{ currentLanguage === 'fr' ? 'Déploiement & Suivi' : 'Deployment & Monitoring' }}</h3>
            <p class="process-card__text">
              {{ currentLanguage === 'fr'
                ? 'Mise en production, configuration des serveurs (CI/CD, Docker) et mise en place du monitoring pour le suivi.'
                : 'Deploying to production, configuring servers (CI/CD, Docker), and setting up monitoring.' }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import gsap from 'gsap'
import { usePortfolioStore } from '@/stores/portfolio'
import heroImage from '@/assets/image.png'

const store = usePortfolioStore()
const currentLanguage = computed(() => store.currentLanguage)

// --- 3D TILT EFFECT LOGIC ---
const visualRef = ref<HTMLElement>()
const tiltStyle = ref({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' })
const glowStyle = ref({ background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)' })

const handleTilt = (e: MouseEvent) => {
  if (!visualRef.value) return
  const card = visualRef.value.querySelector('.id-card') as HTMLElement
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * 10

  tiltStyle.value = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }
  
  glowStyle.value = {
    background: `radial-gradient(circle at ${x}px ${y}px, rgba(99,102,241,0.3) 0%, transparent 60%)`
  }
}

const resetTilt = () => {
  tiltStyle.value = { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }
  glowStyle.value = { background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)' }
}

// --- TYPEWRITER EFFECT ---
const roleTextRef = ref<HTMLElement>()
const roles = computed(() => currentLanguage.value === 'fr'
  ? ['Développement Full Stack', 'Développement Mobile', 'API & Backend']
  : ['Full Stack Development', 'Mobile Development', 'APIs & Backend'])
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typeTimeout: number | null = null

const typeEffect = () => {
  const currentRole = roles.value[roleIndex]
  
  if (roleTextRef.value) {
    if (isDeleting) {
      roleTextRef.value.textContent = currentRole.substring(0, charIndex - 1)
      charIndex--
    } else {
      roleTextRef.value.textContent = currentRole.substring(0, charIndex + 1)
      charIndex++
    }
  }

  let typeSpeed = isDeleting ? 40 : 80

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.value.length
    typeSpeed = 500
  }

  typeTimeout = window.setTimeout(typeEffect, typeSpeed)
}

watch(currentLanguage, () => {
  if (typeTimeout) clearTimeout(typeTimeout)
  roleIndex = 0
  charIndex = 0
  isDeleting = false
  if (roleTextRef.value) roleTextRef.value.textContent = ''
  typeEffect()
})

// --- ANIMATIONS ---
const heroRef = ref<HTMLElement>()
const sectionRef = ref<HTMLElement>()
const badgeRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const descRef = ref<HTMLElement>()
const ctaRef = ref<HTMLElement>()
const statsRef = ref<HTMLElement>()

const initAnimations = () => {
  if (!badgeRef.value || !titleRef.value || !descRef.value || !ctaRef.value || !statsRef.value || !visualRef.value) return

  const elements = [badgeRef.value, titleRef.value, descRef.value, ctaRef.value, statsRef.value]
  
  gsap.set(elements, { opacity: 0, y: 30 })
  gsap.set(visualRef.value, { opacity: 0, x: 50, scale: 0.95 })

  const tl = gsap.timeline({ delay: 0.2 })
  
  tl.to(badgeRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to(titleRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(descRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(ctaRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(statsRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(visualRef.value, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
}

onMounted(() => {
  initAnimations()
  typeEffect()
})

onUnmounted(() => {
  if (typeTimeout) clearTimeout(typeTimeout)
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

/* =========================================
   GLOBAL VARIABLES & BASE
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$primary: #6366f1;
$primary-light: #818cf8;
$border-color: rgba(255, 255, 255, 0.08);

.portfolio-page {
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;
  position: relative;
}

/* =========================================
   HERO SECTION
========================================= */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;

  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  &__grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
  }

  &__glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.3;
    animation: pulse-glow 8s ease-in-out infinite;

    &--1 {
      width: 600px; height: 600px;
      background: rgba(99, 102, 241, 0.4);
      top: -200px; right: -100px;
    }
    &--2 {
      width: 500px; height: 500px;
      background: rgba(14, 165, 233, 0.2);
      bottom: -150px; left: -150px;
    }
  }

  &__container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 32px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 1.2fr 0.8fr;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #34d399;
    width: fit-content;
    
    &-dot {
      width: 8px; height: 8px;
      background: #34d399;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }

  &__title {
    font-size: clamp(42px, 5.5vw, 76px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.04em;
    color: $text-primary;
    margin: 0;

    &-gradient {
      background: linear-gradient(110deg, #818cf8, #c084fc 55%, #38bdf8);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 580px;

    p {
      font-size: 16px;
      line-height: 1.7;
      color: $text-secondary;
      margin: 0;

      strong {
        color: $text-primary;
        font-weight: 600;
      }
    }
  }

  &__specialties {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    &-label {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: $text-tertiary;
      text-transform: uppercase;
    }

    &-text {
      font-size: 16px;
      font-weight: 700;
      color: $primary-light;
      min-height: 24px;
    }

    &-cursor {
      display: inline-block;
      width: 2px;
      height: 18px;
      background: $primary-light;
      animation: blink 1s step-end infinite;
    }
  }

  &__info-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 16px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    max-width: 500px;
  }

  &__info-item {
    display: flex;
    align-items: center;
    gap: 12px;

    svg { width: 20px; height: 20px; color: $primary-light; }
    div { display: flex; flex-direction: column; gap: 2px; }

    .info-label {
      font-size: 10px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: $text-tertiary;
    }
    .info-value { font-size: 13px; font-weight: 600; color: $text-primary; }
  }

  &__visual {
    display: none;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 550px;
    perspective: 1000px;

    @media (min-width: 1024px) { display: flex; }
  }

  .floating-badge {
    position: absolute;
    padding: 8px 16px;
    border-radius: 100px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: white;
    z-index: 10;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    animation: float 6s ease-in-out infinite;
    backdrop-filter: blur(10px);
    white-space: nowrap;

    &--frontend { background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; top: 5%; left: -5%; animation-delay: 0.5s; }
    &--backend { background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #60a5fa; top: 25%; right: -10%; animation-delay: 1.5s; }
    &--dev { background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255,255,255,0.2); top: -5%; right: 15%; animation-delay: 0s; }
    &--data { background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24; top: 45%; left: -15%; animation-delay: 2s; }
    &--api { background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); color: #818cf8; bottom: 10%; right: -15%; animation-delay: 4s; }
    &--etl { background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; bottom: 25%; left: -20%; animation-delay: 3s; }
    &--workflow { background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); color: #f472b6; bottom: -5%; left: 15%; animation-delay: 1s; }
    &--dax { background: rgba(234, 179, 8, 0.15); border: 1px solid rgba(234, 179, 8, 0.3); color: #fde047; bottom: -10%; right: 20%; animation-delay: 2.5s; }
  }

  .id-card {
    position: relative;
    width: 100%; max-width: 380px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
    z-index: 2;

    &__glow { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1; }

    &__header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 20px; padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    &__dots {
      display: flex; gap: 6px;
      span {
        width: 10px; height: 10px; border-radius: 50%; background: #334155;
        &:nth-child(1) { background: #ef4444; }
        &:nth-child(2) { background: #f59e0b; }
        &:nth-child(3) { background: #10b981; }
      }
    }

    &__terminal-text { font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 600; color: $text-tertiary; }

    &__image-wrap {
      position: relative; width: 100%; aspect-ratio: 1; border-radius: 16px;
      background: #0f172a; overflow: hidden; display: flex; align-items: center; justify-content: center;
    }

    &__image-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(99,102,241,0.2), transparent 70%); }

    &__image {
      position: relative; z-index: 2; width: 85%; height: 85%;
      object-fit: cover; object-position: center top;
      border-radius: 120px 120px 24px 24px; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }

    &__placeholder { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 60px; font-weight: 800; color: $primary; z-index: 1; }

    &__info { margin-top: 20px; transform: translateZ(30px); }

    &__name-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }

    &__name {
      font-size: 24px; font-weight: 800; letter-spacing: -0.03em; margin: 0; color: $text-primary;
      span { color: $text-tertiary; font-weight: 600; }
    }

    &__verified { color: $primary-light; svg { width: 20px; height: 20px; } }

    &__role { font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 700; color: $primary-light; margin: 0 0 16px; }

    &__tags {
      display: flex; flex-wrap: wrap; gap: 8px;
      span {
        font-size: 10px; font-weight: 600; padding: 6px 10px;
        background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 6px; color: $text-secondary;
      }
    }
  }
}

/* =========================================
   PROCESSUS SECTION (Fond noir unifié)
========================================= */
.process {
  position: relative;
  padding: 100px 0;
  background-color: $bg-color;
  overflow: hidden;

  /* Background unifié avec le Hero */
  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  &__grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
  }

  &__glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.15;

    &--1 {
      width: 500px; height: 500px;
      background: $primary;
      top: 50%; left: -200px;
    }
    &--2 {
      width: 400px; height: 400px;
      background: #c084fc;
      bottom: -100px; right: -100px;
    }
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  .section-header {
    margin-bottom: 60px;
    max-width: 650px;

    &__subtitle {
      display: inline-block; font-family: 'JetBrains Mono', monospace;
      font-size: 12px; font-weight: 700; color: $primary; margin-bottom: 12px;
    }

    &__title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(36px, 5vw, 48px); font-weight: 700;
      letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 16px;
      color: $text-primary;
      span { color: $primary-light; }
    }

    &__description { font-size: 16px; line-height: 1.6; color: $text-secondary; margin: 0; }
  }

  &__steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    position: relative;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      
      &::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 10%; right: 10%; height: 2px;
        background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3) 20%, rgba(99, 102, 241, 0.3) 80%, transparent);
        z-index: 0;
      }
    }
  }

  .process-card {
    position: relative;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid $border-color;
    border-radius: 20px;
    padding: 32px 24px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;

    &:hover {
      transform: translateY(-5px);
      background: rgba(15, 23, 42, 0.6);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

      .process-card__icon {
        background: $primary; color: white; box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
      }
      .process-card__number { color: $primary-light; opacity: 1; }
    }

    &__number {
      font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700;
      color: $text-tertiary; opacity: 0.5; position: absolute; top: 24px; right: 24px;
      transition: all 0.3s ease;
    }

    &__icon {
      display: flex; align-items: center; justify-content: center;
      width: 56px; height: 56px; border-radius: 16px;
      background: rgba(99, 102, 241, 0.1); color: $primary-light;
      margin-bottom: 24px; transition: all 0.4s ease; position: relative; z-index: 2;
      svg { width: 26px; height: 26px; }
    }

    &__title {
      font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700;
      color: $text-primary; margin: 0 0 12px;
    }

    &__text { font-size: 14px; line-height: 1.6; color: $text-secondary; margin: 0; }
  }

  @media (max-width: 1024px) { &__steps { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) {
    padding: 80px 0;
    &__steps { grid-template-columns: 1fr; }
    .process-card { padding: 24px; }
  }
}

/* --- ANIMATIONS --- */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}
</style>