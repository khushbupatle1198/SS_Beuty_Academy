import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-user' },
    { path: '/courses', label: 'Courses', icon: 'fas fa-graduation-cap' },
    { path: '/gallery', label: 'Gallery', icon: 'fas fa-images' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-phone' }
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <img 
                src="/images/sslogo.png" 
                alt="SS Beauty Academy Logo" 
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>SS Beauty</span>
              <span className={styles.logoSub}>Academy</span>
            </div>
          </Link>
          
          <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                {location.pathname === item.path && <span className={styles.navIndicator}></span>}
              </Link>
            ))}
          </div>

          <div className={styles.navRight}>
            <Link to="/contact" className={styles.navCta}>
              <i className="fas fa-calendar-check"></i>
              <span>Book Now</span>
            </Link>
            
            <button 
              className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </>
  )
}