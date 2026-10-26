<template>
  <section id="contact" class="contact" ref="sectionRef">
    <!-- Background Elements (Light Theme) -->
    <div class="background" aria-hidden="true">
      <div class="background-grid"></div>
      <div class="glow glow-one"></div>
      <div class="glow glow-two"></div>
    </div>

    <div class="contact__container">
      <!-- Header de section (Style Light Theme) -->
      <div class="section-header">
        <span class="section-header__subtitle">06</span>
        <h2 class="section-header__title">Me Contacter</h2>
        <p class="section-header__description">
          Une opportunité, un projet ou juste envie d'échanger ? Discutons-en.
        </p>
      </div>

      <div class="contact__grid">
        
        <!-- COLONNE GAUCHE : Infos de contact -->
        <div class="contact__info-card">
          <div class="info-header">
            <h3 class="info-name">Fatima Chegdani</h3>
            <span class="info-role">Développeuse Full Stack</span>
          </div>

          <div class="info-list">
            <!-- Email -->
            <a href="mailto:chegdanifatima82@gmail.com" class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="info-content">
                <span class="info-label">EMAIL</span>
                <span class="info-value">chegdanifatima82@gmail.com</span>
              </div>
            </a>

            <!-- Téléphone -->
            <a href="tel:+212763722243" class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="info-content">
                <span class="info-label">TÉLÉPHONE</span>
                <span class="info-value">0763722243</span>
              </div>
            </a>

            <!-- Localisation -->
            <div class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="info-content">
                <span class="info-label">LOCALISATION</span>
                <span class="info-value">Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          <!-- Réseaux Sociaux -->
          <div class="social-links">
            <a href="https://github.com/Fatima1234-cheg" target="_blank" class="social-btn" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/fatima-chegdani-44b840274/" target="_blank" class="social-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <!-- COLONNE DROITE : Le CV en image (Style Carte About) -->
        <div class="contact__cv-wrapper">
          <!-- Étiquette décorative -->
          <div class="cv-badge">
            <span class="dot"></span> MON CV
          </div>

          <!-- La carte blanche inclinée -->
          <div class="cv-card">
            <div class="cv-header">
              <span class="cv-label">CURRICULUM VITAE · 2026</span>
              <span class="cv-status">PDF</span>
            </div>
            
            <div class="cv-image-wrapper">
              <!-- ⚠️ REMPLACE "moncv.png" par le nom exact de ton image dans src/assets -->
              <img 
                :src="cvImage" 
                alt="CV Fatima Chegdani" 
                class="cv-image" 
              />
            </div>

            <!-- Bouton de téléchargement visible sous l'image -->
            <a href="/mon-cv.pdf" target="_blank" class="cv-download-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Télécharger le CV
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// ⚠️ IMPORTANT : Modifie le nom du fichier si ton image est en .jpg (ex: import cvImage from '@/assets/moncv.jpg')
import cvImage from '@/assets/moncv.png' 

const sectionRef = ref<HTMLElement>()
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

/* =========================================
   VARIABLES (LIGHT THEME)
========================================= */
$bg-color: #f8f9fc;
$text-primary: #111827;
$text-secondary: #64748b;
$text-tertiary: #94a3b8;
$primary: #6366f1;
$border-color: #e2e8f0;

.contact {
  position: relative;
  padding: 120px 0;
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;

  .background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .background-grid {
    position: absolute;
    inset: 0;
    background-size: 55px 55px;
    background-image: 
      linear-gradient(rgba(30,41,59,.045) 1px, transparent 1px), 
      linear-gradient(90deg, rgba(30,41,59,.045) 1px, transparent 1px);
    mask-image: linear-gradient(to bottom, black, transparent 85%);
  }

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: .3;
    animation: drift 18s ease-in-out infinite;
    
    &.glow-one {
      width: 450px; height: 450px;
      background: #c7d2fe;
      top: -50px; right: -100px;
    }
    &.glow-two {
      width: 350px; height: 350px;
      background: #ddd6fe;
      bottom: 10%; left: -150px;
      animation-delay: -6s;
    }
  }

  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -25px); }
  }

  &__container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  .section-header {
    margin-bottom: 60px;
    text-align: center;

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
      font-weight: 800;
      letter-spacing: -0.04em;
      margin: 0 0 16px;
      color: $text-primary;
    }

    &__description {
      font-size: 16px;
      line-height: 1.6;
      color: $text-secondary;
      margin: 0;
      max-width: 600px;
      margin-inline: auto;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    align-items: center;

    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* =========================================
     CARTE INFOS (Gauche)
  ========================================= */
  &__info-card {
    background: #ffffff;
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
  }

  .info-header {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid $border-color;
  }

  .info-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 6px;
    color: $text-primary;
  }

  .info-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: $primary;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid transparent;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #ffffff;
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 10px 20px rgba(99, 102, 241, 0.05);
      transform: translateX(4px);
    }
  }

  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: #eef2ff;
    color: $primary;
    flex-shrink: 0;

    svg { width: 20px; height: 20px; }
  }

  .info-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .info-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: $text-tertiary;
    letter-spacing: 0.1em;
  }

  .info-value {
    font-size: 14px;
    font-weight: 600;
    color: $text-primary;
  }

  .social-links {
    display: flex;
    gap: 12px;
    margin-top: 30px;
    padding-top: 24px;
    border-top: 1px solid $border-color;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid $border-color;
    color: $text-secondary;
    transition: all 0.3s ease;

    svg { width: 20px; height: 20px; }

    &:hover {
      background: $primary;
      border-color: $primary;
      color: white;
      transform: translateY(-3px);
    }
  }

  /* =========================================
     CARTE CV (Droite - Style About Section)
  ========================================= */
  &__cv-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    perspective: 1000px;
  }

  .cv-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: #111827;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    border-radius: 100px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);

    .dot {
      width: 6px; height: 6px;
      background: #34d399;
      border-radius: 50%;
      box-shadow: 0 0 8px #34d399;
    }
  }

  .cv-card {
    position: relative;
    width: 100%;
    max-width: 450px;
    background: #ffffff;
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 35px 80px rgba(15, 23, 42, 0.1);
    transform: rotate(-2deg);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    z-index: 2;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: rotate(0deg) translateY(-5px);
      box-shadow: 0 45px 90px rgba(15, 23, 42, 0.15);
    }
  }

  .cv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 4px;
  }

  .cv-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: $text-tertiary;
    letter-spacing: 0.1em;
  }

  .cv-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: $primary;
    background: #eef2ff;
    padding: 4px 8px;
    border-radius: 4px;
  }

  /* Wrapper de l'image du CV */
  .cv-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.3;
    border-radius: 8px;
    overflow: hidden;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
  }

  .cv-image {
    width: 100%;
    height: 100%;
    /* ⚠️ C'est ici que l'image s'affiche en entier */
    object-fit: contain; 
    object-position: top center;
    background-color: #ffffff; /* Fond blanc pour faire ressortir le document */
  }

  /* Bouton de téléchargement sous le CV */
  .cv-download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 16px;
    padding: 14px;
    background: #111827;
    color: white;
    text-decoration: none;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    transition: all 0.3s ease;

    svg { width: 18px; height: 18px; }

    &:hover {
      background: $primary;
      box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
    }
  }

  /* Responsive */
  @media (max-width: 900px) {
    &__grid {
      grid-template-columns: 1fr;
    }
    .cv-card {
      transform: rotate(0deg);
      max-width: 100%;
      margin-top: 20px;
    }
  }
}
</style>