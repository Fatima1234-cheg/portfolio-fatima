import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const triggers: ScrollTrigger[] = []

  const fadeInUp = (element: string | Element | Element[], options?: gsap.TweenVars) => {
    const tween = gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: 60 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        ...options
      }
    )
    return tween
  }

  const fadeIn = (element: string | Element | Element[], options?: gsap.TweenVars) => {
    const tween = gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        ...options
      }
    )
    return tween
  }

  const staggerFadeInUp = (
    elements: string | Element[],
    stagger: number = 0.1,
    options?: gsap.TweenVars
  ) => {
    const tween = gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: 'power3.out',
        ...options
      }
    )
    return tween
  }

  const scrollTriggerFadeInUp = (
    element: string | Element,
    trigger?: string | Element,
    start: string = 'top 85%'
  ) => {
    const st = ScrollTrigger.create({
      trigger: trigger || element,
      start,
      onEnter: () => {
        fadeInUp(element)
      },
      once: true
    })
    triggers.push(st)
    return st
  }

  const scrollTriggerStagger = (
    elements: string | Element[],
    trigger?: string | Element,
    start: string = 'top 85%',
    stagger: number = 0.1
  ) => {
    const st = ScrollTrigger.create({
      trigger: trigger || elements[0],
      start,
      onEnter: () => {
        staggerFadeInUp(elements, stagger)
      },
      once: true
    })
    triggers.push(st)
    return st
  }

  const parallax = (
    element: string | Element,
    speed: number = 0.5
  ) => {
    const st = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.set(element, { y: progress * 100 * speed })
      }
    })
    triggers.push(st)
    return st
  }

  onUnmounted(() => {
    triggers.forEach(st => st.kill())
    triggers.length = 0
  })

  return {
    fadeInUp,
    fadeIn,
    staggerFadeInUp,
    scrollTriggerFadeInUp,
    scrollTriggerStagger,
    parallax,
    gsap,
    ScrollTrigger
  }
}
