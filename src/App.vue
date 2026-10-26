<template>
  <div class="app">
    <CustomCursor />
    <Navigation />
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useSmoothScroll } from './composables/useSmoothScroll'

import CustomCursor from './components/CustomCursor.vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import CertificationsSection from './components/sections/CertificationsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import FooterSection from './components/sections/FooterSection.vue'

const { initSmoothScroll } = useSmoothScroll()

onMounted(() => {
  initSmoothScroll()
})
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
}

main {
  position: relative;
}
</style>
