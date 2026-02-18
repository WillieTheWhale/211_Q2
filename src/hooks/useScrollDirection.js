import { useState, useEffect, useRef } from 'react'

export default function useScrollDirection(threshold = 10) {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setAtTop(currentScrollY < 20)

          if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
            setHidden(currentScrollY > lastScrollY.current && currentScrollY > 80)
            lastScrollY.current = currentScrollY
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { hidden, atTop }
}
