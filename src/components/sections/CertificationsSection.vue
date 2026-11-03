<template>
  <section id="certifications" class="certifications" ref="sectionRef">
    <!-- Ligne de scan globale en arrière-plan -->
    <div class="scanline" aria-hidden="true"></div>

    <div class="certifications__container">
      <!-- Header de section -->
      <div class="section-header">
        <span class="section-header__subtitle">05</span>
        <h2 class="section-header__title">
          {{ currentLanguage === 'fr' ? 'Certifications & Atouts' : 'Certifications & Assets' }}
        </h2>
        <p class="section-header__description">
          {{ currentLanguage === 'fr' 
            ? 'Mes validations de compétences techniques et mon profil global.' 
            : 'My technical skill validations and global profile.' }}
        </p>
      </div>

      <!-- Faux Terminal / Data Query -->
      <div class="terminal-bar">
        <div class="terminal-bar__dots">
          <span></span><span></span><span></span>
        </div>
        <div class="terminal-bar__text">
          <span class="prompt">user@fatima:~$</span> SELECT * FROM certificates WHERE status = 'verified' ORDER BY year DESC;
          <span class="cursor">_</span>
        </div>
      </div>

      <!-- Liste des Certifications -->
      <div class="certifications__grid">
        <div 
          v-for="(cert, index) in certifications" 
          :key="cert.id"
          class="cert-row"
          :class="{ 'cert-row--featured': cert.featured, 'cert-row--clickable': cert.image }"
          @click="cert.image ? openModal(cert.image, cert.name) : null"
        >
          <!-- Status Icon -->
          <div class="cert-status">
            <div class="status-icon" :class="cert.featured ? 'status-icon--purple' : 'status-icon--green'">
              <div class="radar-ping"></div>
              <svg v-if="cert.featured" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
          </div>

          <!-- Contenu -->
          <div class="cert-content">
            <div class="cert-header">
              <h3 class="cert-title">{{ cert.name }}</h3>
              <span v-if="cert.featured" class="cert-badge">
                {{ currentLanguage === 'fr' ? 'AVANCÉ' : 'ADVANCED' }}
              </span>
            </div>
            <div class="cert-meta">
              <span class="cert-issuer">{{ cert.issuer }}</span>
              <span class="cert-dot">•</span>
              <span class="cert-year">{{ cert.year }}</span>
            </div>
          </div>

          <!-- Action : Bouton "Vérifier" SEULEMENT s'il y a un lien -->
          <div class="cert-action" v-if="cert.link">
            <button 
              class="btn-view" 
              @click.stop="openLink(cert.link)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              {{ currentLanguage === 'fr' ? 'Vérifier' : 'Verify' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Langues & Soft Skills -->
      <div class="extras-grid">
        <div class="extras-card">
          <div class="extras-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            <h4>{{ currentLanguage === 'fr' ? 'Langues' : 'Languages' }}</h4>
          </div>
          <div class="lang-list">
            <div class="lang-item">
              <div class="lang-info">
                <span class="lang-name">{{ currentLanguage === 'fr' ? 'Arabe' : 'Arabic' }}</span>
                <span class="lang-level">{{ currentLanguage === 'fr' ? 'NATIF' : 'NATIVE' }}</span>
              </div>
              <div class="lang-bar"><div class="lang-fill" style="width: 100%"></div></div>
            </div>
            <div class="lang-item">
              <div class="lang-info">
                <span class="lang-name">{{ currentLanguage === 'fr' ? 'Français' : 'French' }}</span>
                <span class="lang-level">B2</span>
              </div>
              <div class="lang-bar"><div class="lang-fill" style="width: 75%"></div></div>
            </div>
            <div class="lang-item">
              <div class="lang-info">
                <span class="lang-name">{{ currentLanguage === 'fr' ? 'Anglais' : 'English' }}</span>
                <span class="lang-level">B2</span>
              </div>
              <div class="lang-bar"><div class="lang-fill" style="width: 75%"></div></div>
            </div>
          </div>
        </div>

        <div class="extras-card">
          <div class="extras-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <h4>{{ currentLanguage === 'fr' ? 'Compétences humaines' : 'Soft Skills' }}</h4>
          </div>
          <div class="soft-tags">
            <span v-for="skill in softSkills" :key="skill" class="soft-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <Transition name="modal">
        <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title">{{ selectedCertName }}</h3>
              <button class="modal-close" @click="closeModal">✕</button>
            </div>
            <div class="modal-body">
              <img :src="selectedCertImage" :alt="selectedCertName" class="cert-image" />
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const currentLanguage = computed(() => store.currentLanguage)

// --- MODAL & LINK LOGIC ---
const modalOpen = ref(false)
const selectedCertImage = ref('')
const selectedCertName = ref('')

function openModal(image?: string, name?: string) {
  if (!image || !name) return
  selectedCertImage.value = image
  selectedCertName.value = name
  modalOpen.value = true
}

function openLink(url: string) {
  window.open(url, '_blank')
}

function closeModal() {
  modalOpen.value = false
}

// --- TES DONNÉES ---
const certifications = ref([
  {
    id: 1,
    name: 'Advanced SQL',
    issuer: '365 Data Science',
    year: '2024',
    featured: true,
    link: 'https://lnkd.in/p/ep88Scw8' 
  },
  {
    id: 2,
    name: 'Machine Learning in Python',
    issuer: '365 Data Science',
    year: '2024',
    featured: false,
    link: 'https://learn.365datascience.com/certificates/CC-258A98B0EA/'
  },
  {
    id: 3,
    name: 'Oracle Cloud Infrastructure 2025 Foundations Associate',
    issuer: 'Oracle University',
    year: '2025',
    featured: false,
    link: 'https://education.oracle.com/' 
  },
  {
    id: 4,
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    year: 'Nov 2024',
    featured: false,
    image: '/images/certifications/python-1.png' // Plus de bouton "Voir", la ligne est cliquable
  },
  {
    id: 5,
    name: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    year: 'Dec 2024',
    featured: false,
    image: '/images/certifications/python-2.png' // Plus de bouton "Voir", la ligne est cliquable
  }
])

const softSkills = computed(() => {
  const skills: Record<string, string[]> = {
    fr: ['Travail d\'équipe', 'Ponctualité', 'Adaptabilité', 'Organisation', 'Curiosité', 'Esprit d\'initiative'],
    en: ['Teamwork', 'Punctuality', 'Adaptability', 'Organization', 'Curiosity', 'Initiative']
  }
  return skills[currentLanguage.value]
})
</script>

<style lang="scss" scoped>
/* ⚠️ TON CSS RESTE EXACTEMENT LE MÊME, J'AI JUSTE AJOUTÉ LA CLASSE .cert-row--clickable */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$text-tertiary: #64748b;
$primary: #6366f1;
$primary-light: #818cf8;
$border-color: rgba(255, 255, 255, 0.08);

.certifications {
  position: relative;
  padding: 100px 0;
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;

  &__container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  .section-header {
    margin-bottom: 40px;

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

  .terminal-bar {
    background: #0f172a;
    border: 1px solid $border-color;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    &__dots {
      display: flex;
      gap: 6px;
      span {
        width: 10px; height: 10px;
        border-radius: 50%;
        background: #334155;
        &:nth-child(1) { background: #ef4444; }
        &:nth-child(2) { background: #f59e0b; }
        &:nth-child(3) { background: #10b981; }
      }
    }

    &__text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #cbd5e1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      .prompt {
        color: $primary;
        margin-right: 8px;
      }
      
      .cursor {
        display: inline-block;
        margin-left: 6px;
        color: $primary;
        animation: blink 1s step-end infinite;
      }
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  &__grid {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid $border-color;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .scanline {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.1), transparent);
    animation: scan 8s linear infinite;
    pointer-events: none;
    z-index: 2;
  }

  @keyframes scan {
    0% { transform: translateY(-100px); }
    100% { transform: translateY(1000px); }
  }

  .cert-row {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    transition: all 0.3s ease;
    position: relative;
    z-index: 3;

    &:hover {
      background: rgba(255, 255, 255, 0.02);
      padding-left: 30px;
    }

    &:last-child {
      border-bottom: none;
    }

    /* ⬇️ AJOUT : Rendre la ligne cliquable visuellement pour les images (Python) ⬇️ */
    &--clickable {
      cursor: pointer;
      &:hover {
        background: rgba(99, 102, 241, 0.05); /* Petit halo au survol */
      }
    }

    &--featured {
      background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), transparent);
      border-left: 3px solid $primary;
      
      &::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 3px;
        background: $primary;
        box-shadow: 0 0 15px $primary;
        animation: pulse-border 2s infinite alternate;
      }
    }
  }

  @keyframes pulse-border {
    from { opacity: 0.5; box-shadow: 0 0 5px $primary; }
    to { opacity: 1; box-shadow: 0 0 20px $primary; }
  }

  .cert-status {
    .status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: relative;
      
      svg { width: 20px; height: 20px; z-index: 2; }

      &--green {
        background: rgba(16, 185, 129, 0.1);
        color: #34d399;
        border: 1px solid rgba(16, 185, 129, 0.3);
      }
      &--purple {
        background: rgba(99, 102, 241, 0.15);
        color: $primary-light;
        border: 1px solid rgba(99, 102, 241, 0.4);
      }

      .radar-ping {
        position: absolute;
        inset: -2px;
        border-radius: 50%;
        border: 1px solid currentColor;
        opacity: 0;
        animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
    }
  }

  @keyframes ping {
    75%, 100% { transform: scale(1.5); opacity: 0; }
  }

  .cert-content {
    flex: 1;
    min-width: 0;
  }

  .cert-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
  }

  .cert-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: $text-primary;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .cert-row--featured & {
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }

  .cert-badge {
    padding: 2px 8px;
    background: $primary;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    font-weight: 700;
    border-radius: 4px;
    letter-spacing: 0.05em;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  }

  .cert-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: $text-secondary;
  }

  .cert-dot {
    color: $text-tertiary;
  }

  .cert-action {
    .btn-view {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 8px 16px;
      border-radius: 6px;
      color: $text-secondary;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      svg { width: 14px; height: 14px; }

      &:hover:not(:disabled) {
        background: rgba(16, 185, 129, 0.1);
        border-color: #34d399;
        color: #34d399;
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
      }
    }
  }

  .extras-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .extras-card {
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid $border-color;
    border-radius: 12px;
    padding: 24px;
  }

  .extras-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    color: $primary-light;

    svg { width: 20px; height: 20px; }
    h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: $text-primary;
      margin: 0;
    }
  }

  .lang-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .lang-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .lang-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .lang-name {
    font-size: 13px;
    font-weight: 600;
    color: $text-primary;
  }

  .lang-level {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: $primary-light;
  }

  .lang-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
  }

  .lang-fill {
    height: 100%;
    background: linear-gradient(90deg, $primary, #c084fc);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  }

  .soft-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .soft-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #cbd5e1;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid $border-color;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      background: rgba(99, 102, 241, 0.1);
      border-color: rgba(99, 102, 241, 0.5);
      color: white;
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
    }
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(5, 8, 20, 0.9);
    backdrop-filter: blur(12px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .modal-content {
    background: #0f172a;
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 16px;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    box-shadow: 0 0 50px rgba(99, 102, 241, 0.2);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid $border-color;
    background: rgba(255, 255, 255, 0.02);
  }

  .modal-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: $text-primary;
    margin: 0;
  }

  .modal-close {
    background: transparent;
    border: none;
    color: $text-secondary;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: #ef4444; }
  }

  .modal-body {
    padding: 24px;
    background: #050814;
    display: flex;
    justify-content: center;
    max-height: 80vh;
    overflow-y: auto;
  }

  .cert-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
  .modal-enter-from, .modal-leave-to { opacity: 0; }
  .modal-enter-active .modal-content { animation: slideUp 0.3s ease-out; }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @media (max-width: 600px) {
    .cert-row {
      flex-wrap: wrap;
    }
    .terminal-bar__text { font-size: 10px; }
  }
}
</style>