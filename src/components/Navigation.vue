<template>
  <nav
    class="navigation"
    :class="{ 'navigation--scrolled': isScrolled }"
  >
    <div class="navigation__container">
      <!-- Logo -->
      <a href="#" class="navigation__logo" @click.prevent="scrollToSection('hero')">
        <span class="navigation__logo-text">  Fatima Chegdani</span>
        <span class="navigation__logo-dot"></span>
      </a>

      <!-- Desktop Navigation -->
      <div class="navigation__menu">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="navigation__link"
          :class="{ 'navigation__link--active': activeSection === item.id }"
          @click.prevent="scrollToSection(item.id)"
        >
          <span class="navigation__link-number">{{ item.number }}</span>
          <span class="navigation__link-text">{{ item.label }}</span>
        </a>
      </div>

      <!-- Right Side -->
      <div class="navigation__actions">
        <!-- Language Switcher -->
        <button
          class="navigation__lang"
          @click="toggleLanguage"
          :title="currentLanguage === 'fr' ? 'Switch to English' : 'Passer en Français'"
        >
          <span :class="{ 'navigation__lang--active': currentLanguage === 'fr' }">FR</span>
          <span class="navigation__lang-separator">/</span>
          <span :class="{ 'navigation__lang--active': currentLanguage === 'en' }">EN</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          class="navigation__toggle"
          @click="toggleMenu"
          :class="{ 'navigation__toggle--active': isMenuOpen }"
          :aria-label="currentLanguage === 'fr' ? 'Ouvrir le menu' : 'Open menu'"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="isMenuOpen" class="navigation__mobile">
        <div class="navigation__mobile-content">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="navigation__mobile-link"
            @click.prevent="scrollToSection(item.id)"
          >
            <span class="navigation__mobile-number">{{ item.number }}</span>
            <span class="navigation__mobile-text">{{ item.label }}</span>
          </a>

          <!-- Footer Mobile -->
          <div class="navigation__mobile-footer">
            <button class="navigation__mobile-lang" @click="toggleLanguage">
              <span :class="{ 'navigation__mobile-lang--active': currentLanguage === 'fr' }">Français</span>
              <span class="navigation__mobile-lang-separator">/</span>
              <span :class="{ 'navigation__mobile-lang--active': currentLanguage === 'en' }">English</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const currentLanguage = computed(() => store.currentLanguage)

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('hero')
let ticking = false

const navItems = computed(() => [
  { id: 'hero', label: currentLanguage.value === 'fr' ? 'À Propos' : 'About', number: '01' },
  { id: 'experience', label: currentLanguage.value === 'fr' ? 'Expérience' : 'Experience', number: '02' },
  { id: 'projects', label: currentLanguage.value === 'fr' ? 'Projets' : 'Projects', number: '03' },
  { id: 'skills', label: currentLanguage.value === 'fr' ? 'Compétences' : 'Skills', number: '04' },
  { id: 'contact', label: currentLanguage.value === 'fr' ? 'Contact' : 'Contact', number: '05' }
])

const toggleLanguage = () => {
  store.setLanguage(currentLanguage.value === 'fr' ? 'en' : 'fr')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const scrollToSection = (sectionId: string) => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
  
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80 // Compense la hauteur de la barre de navigation
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    activeSection.value = sectionId
  }
}

const updateActiveSection = () => {
  const sections = navItems.value.map(item => document.getElementById(item.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 200
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      // Effet de flou quand on scrolle
      isScrolled.value = currentScrollY > 50
      updateActiveSection()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
/* =========================================
   VARIABLES (Thème sombre)
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$primary: #6366f1;
$primary-light: #818cf8;

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s ease;
  
  /* Effet de fond au scroll */
  &--scrolled {
    padding: 12px 0;
    background: rgba(5, 8, 20, 0.85); /* Fond noir transparent */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
  }
  
  /* LOGO */
  &__logo {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    
    &-text {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 24px;
      font-weight: 800;
      background: linear-gradient(110deg, #818cf8, #c084fc);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    &-dot {
      width: 6px;
      height: 6px;
      background: $primary;
      border-radius: 50%;
      animation: pulse-glow 2s ease-in-out infinite;
    }
  }
  
  /* MENU DESKTOP */
  &__menu {
    display: none;
    
    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
  
  &__link {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: $primary-light;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    &-text {
      font-size: 13px;
      font-weight: 500;
      color: $text-secondary;
      transition: all 0.3s ease;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.03);
      
      .navigation__link-text { color: $text-primary; }
      .navigation__link-number { opacity: 1; }
    }
    
    /* Lien actif */
    &--active {
      background: rgba(99, 102, 241, 0.1);
      
      .navigation__link-text { color: $primary-light; font-weight: 600; }
      .navigation__link-number { opacity: 1; color: $primary-light; }
    }
  }
  
  /* ACTIONS (Droite) */
  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  /* SÉLECTEUR DE LANGUE */
  &__lang {
    display: none;
    align-items: center;
    gap: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: $text-tertiary;
    cursor: pointer;
    padding: 6px 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    transition: all 0.3s ease;
    
    @media (min-width: 768px) {
      display: flex;
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
    }
    
    &--active {
      color: $primary-light;
    }
    
    &-separator {
      color: rgba(255, 255, 255, 0.2);
    }
  }
  
  /* BOUTON MOBILE (Hamburger) */
  &__toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
    
    @media (min-width: 1024px) {
      display: none;
    }
    
    span {
      display: block;
      width: 24px;
      height: 2px;
      background: $text-primary;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    
    /* Animation d'ouverture */
    &--active {
      span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      span:nth-child(2) { opacity: 0; transform: translateX(-10px); }
      span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
  }
  
  /* =========================================
     MENU MOBILE
  ========================================= */
  &__mobile {
    position: fixed;
    inset: 0;
    background: $bg-color;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    
    @media (min-width: 1024px) {
      display: none;
    }
    
    &-content {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    
    &-link {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(10px);
        .navigation__mobile-text { color: $primary-light; }
      }
    }
    
    &-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 700;
      color: $primary;
    }
    
    &-text {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: $text-primary;
      transition: all 0.3s ease;
    }
    
    &-footer {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    &-lang {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      font-weight: 600;
      color: $text-tertiary;
      background: transparent;
      border: none;
      padding: 0;
      
      span {
        cursor: pointer;
        transition: all 0.3s ease;
        
        &.navigation__mobile-lang--active {
          color: $primary-light;
        }
        
        &:hover {
          color: $text-primary;
        }
      }
      
      &-separator {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

/* =========================================
   ANIMATIONS
========================================= */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.4); }
  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
}

/* Transition du menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>