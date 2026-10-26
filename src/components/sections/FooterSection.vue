<template>
  <footer class="footer">
    <!-- Halo lumineux subtil en arrière-plan -->
    <div class="footer__glow" aria-hidden="true"></div>

    <div class="footer__container">
      <!-- Bloc Call To Action -->
      <div class="footer__cta">
        <p class="footer__kicker">UNE OPPORTUNITÉ ?</p>
        
        <h2 class="footer__title">
          Construisons ensemble <br class="footer__br" />
          <span>la prochaine solution.</span>
        </h2>

        <!-- ⬇️ Bouton modifié pour faire défiler vers #contact ⬇️ -->
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="footer__button">
          Me contacter
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>

      <!-- Ligne de bas de page (Copyright & Réseaux) -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} Fatima Chegdani. Tous droits réservés.
        </p>
        
        <div class="footer__social">
          <a href="https://github.com/ton-pseudo" target="_blank" rel="noopener">GitHub</a>
          <span class="footer__dot">•</span>
          <a href="https://www.linkedin.com/in/fatima-chegdani-44b840274/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// ⬇️ Fonction pour scroller en douceur vers la section contact
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80 // On compense la hauteur du menu fixe (header)
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap');

/* =========================================
   VARIABLES (Thème sombre)
========================================= */
$bg-color: #050814;
$text-primary: #f8fafc;
$text-secondary: #94a3b8;
$primary: #6366f1;
$primary-light: #818cf8;
$border-color: rgba(255, 255, 255, 0.08);

.footer {
  position: relative;
  background-color: $bg-color;
  color: $text-primary;
  font-family: 'Inter', system-ui, sans-serif;
  overflow: hidden;
  padding: 100px 0 40px;

  &__glow {
    position: absolute;
    bottom: -150px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
  }

  &__container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    z-index: 1;
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 80px;
  }

  &__kicker {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: $primary-light;
    letter-spacing: 0.15em;
    margin: 0 0 20px;
  }

  &__title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0 0 40px;
    color: $text-primary;

    span {
      color: $primary-light;
    }
  }

  &__br {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    background: #ffffff;
    color: #050814;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border-radius: 100px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
      background: $primary;
      color: white;

      svg {
        transform: translate(2px, -2px);
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid $border-color;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__copyright {
    font-size: 13px;
    color: $text-secondary;
    margin: 0;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 600;
      color: $text-secondary;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: $primary-light;
      }
    }
  }

  &__dot {
    color: rgba(255, 255, 255, 0.2);
    font-size: 10px;
  }

  @media (max-width: 600px) {
    padding: 80px 0 30px;

    &__bottom {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>