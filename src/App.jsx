import { useState, useEffect, useRef } from 'react'
import './styles.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import InkscapeGallery from './pages/InkscapeGallery'
import ThreeDGallery from './pages/ThreeDGallery'
import MarketingGallery from './pages/MarketingGallery'
import Commission from './pages/Commission'
import Contact from './pages/Contact'

function Divider() {
  return <div className="section-divider"><hr /></div>
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const shellRef = useRef(null)

  /* Intersection Observer to highlight active nav link */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* Scroll-reveal for .reveal elements */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell" ref={shellRef}>
      <Navbar activeSection={activeSection} />
      <About />
      <Divider />
      <InkscapeGallery />
      <Divider />
      <ThreeDGallery />
      <Divider />
      <MarketingGallery />
      <Divider />
      <Commission />
      <Divider />
      <Contact />
    </div>
  )
}

export default App
