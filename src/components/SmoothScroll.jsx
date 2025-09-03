import { useEffect } from 'react'

function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      e.preventDefault()
      const href = target.getAttribute('href')
      const targetElement = document.querySelector(href)
      
      if (targetElement) {
        const navHeight = 80 // Account for sticky navigation
        const targetPosition = targetElement.offsetTop - navHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default SmoothScroll
