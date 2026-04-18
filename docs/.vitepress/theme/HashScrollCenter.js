import { defineComponent, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

function centerHashTarget() {
  if (typeof window === 'undefined' || !window.location.hash) {
    return
  }

  let target = null

  try {
    target = document.getElementById(decodeURIComponent(window.location.hash).slice(1))
  } catch {
    return
  }

  if (!target) {
    return
  }

  const nav = document.querySelector('.VPNav')
  const navHeight = nav ? nav.getBoundingClientRect().height : 0
  const targetTop = window.scrollY + target.getBoundingClientRect().top
  const desiredTop = navHeight + Math.max((window.innerHeight - navHeight) * 0.28, 120)
  const nextTop = Math.max(0, Math.round(targetTop - desiredTop))

  if (Math.abs(window.scrollY - nextTop) > 2) {
    window.scrollTo({ left: 0, top: nextTop, behavior: 'auto' })
  }
}

function scheduleCenter() {
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(centerHashTarget)
    })
  })
}

export default defineComponent({
  name: 'HashScrollCenter',
  setup() {
    const route = useRoute()

    onMounted(() => {
      window.addEventListener('hashchange', scheduleCenter)
      scheduleCenter()
    })

    onBeforeUnmount(() => {
      window.removeEventListener('hashchange', scheduleCenter)
    })

    watch(() => route.path, scheduleCenter)

    return () => null
  },
})
