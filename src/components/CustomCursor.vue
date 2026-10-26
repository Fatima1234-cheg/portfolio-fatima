<template>
  <div
    class="custom-cursor"
    :class="{ 'custom-cursor--hover': isHovering, 'custom-cursor--hidden': isTouchDevice }"
    :style="cursorStyle"
  >
    <div class="custom-cursor__dot"></div>
    <div class="custom-cursor__ring"></div>
    <div class="custom-cursor__glow"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const targetX = ref(0)
const targetY = ref(0)
const isHovering = ref(false)
const isTouchDevice = ref(false)
let animationFrame: number
let rafId: number

const cursorStyle = computed(() => ({
  transform: `translate(${cursorX.value - 20}px, ${cursorY.value - 20}px)`
}))

const handleMouseMove = (e: MouseEvent) => {
  targetX.value = e.clientX
  targetY.value = e.clientY
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

const animate = () => {
  const ease = 0.15
  cursorX.value += (targetX.value - cursorX.value) * ease
  cursorY.value += (targetY.value - cursorY.value) * ease
  
  rafId = requestAnimationFrame(animate)
}

const setupHoverListeners = () => {
  const interactiveElements = document.querySelectorAll(
    'a, button, [role="button"], input, textarea, select, .cursor-hover'
  )
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
  })
  
  return () => {
    interactiveElements.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    })
  }
}

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches
  
  if (!isTouchDevice.value) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animate()
    
    // Setup hover listeners with a small delay to ensure DOM is ready
    setTimeout(() => {
      const cleanup = setupHoverListeners()
      
      // Re-setup listeners when DOM changes
      const observer = new MutationObserver(() => {
        cleanup()
        setupHoverListeners()
      })
      
      observer.observe(document.body, { childList: true, subtree: true })
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<style lang="scss" scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  
  &--hidden {
    display: none;
  }
  
  &__dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.15s ease;
  }
  
  &__ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }
  
  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &--hover {
    .custom-cursor__dot {
      transform: translate(-50%, -50%) scale(0);
    }
    
    .custom-cursor__ring {
      transform: scale(1.5);
      border-color: rgba(255, 255, 255, 0.8);
      border-width: 2px;
    }
    
    .custom-cursor__glow {
      opacity: 1;
    }
  }
}
</style>
