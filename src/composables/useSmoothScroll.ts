import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

export function useSmoothScroll() {
  let lenis: Lenis | null = null

  const initSmoothScroll = () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Connect Lenis to GSAP ScrollTrigger if available
    lenis.on('scroll', () => {
      // ScrollTrigger.update() would go here if using GSAP
    })
  }

  const scrollTo = (target: string | number | HTMLElement, options?: object) => {
    lenis?.scrollTo(target, options)
  }

  onUnmounted(() => {
    lenis?.destroy()
  })

  return {
    initSmoothScroll,
    scrollTo,
    lenis
  }
}
