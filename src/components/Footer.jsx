import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: 'fab fa-instagram', 
      url: 'https://www.instagram.com/ss_beautyacademy_/',
      color: '#E4405F'
    },
    { 
      name: 'Facebook', 
      icon: 'fab fa-facebook-f', 
      url: 'https://www.facebook.com/profile.php?id=61563323352552',
      color: '#1877F2'
    },
    { 
      name: 'WhatsApp', 
      icon: 'fab fa-whatsapp', 
      url: 'https://wa.me/919665628794',
      color: '#25D366'
    }
  ]

  const quickLinks = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About Us', icon: 'fas fa-user' },
    { path: '/courses', label: 'Courses', icon: 'fas fa-graduation-cap' },
    { path: '/gallery', label: 'Gallery', icon: 'fas fa-images' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-phone' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className={styles.waveFill}></path>
        </svg>
      </div>
      
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={`${styles.footerCol} ${styles.brandCol}`}>
              <div className={styles.footerLogo}>
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
              </div>
              <p className={styles.brandTagline}>Learn. Create. Shine. ✨</p>
              <p className={styles.brandDesc}>Makeup Artist | Educator | Dream Builder</p>
              <p className={styles.brandExperience}>💼 17+ Years of Excellence</p>
              
              {/* Social Icons */}
              <div className={styles.socialIconsWrapper}>
                <h4>Follow Us</h4>
                <div className={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      style={{ '--social-color': social.color }}
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                      <span className={styles.socialTooltip}>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div className={styles.footerCol}>
              <h4>
                <i className="fas fa-link"></i>
                Quick Links
              </h4>
              <ul className={styles.footerLinks}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>
                      <i className={link.icon}></i>
                      <span>{link.label}</span>
                      <i className={`fas fa-arrow-right ${styles.linkArrow}`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info Column */}
            <div className={styles.footerCol}>
              <h4>
                <i className="fas fa-address-card"></i>
                Contact Info
              </h4>
              <ul className={styles.contactInfo}>
                <li>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className={styles.contactDetails}>
                    <span>Call Us</span>
                    <a href="tel:+919665628794">+91 96656 28794</a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className={styles.contactDetails}>
                    <span>WhatsApp</span>
                    <a href="https://wa.me/919665628794">+91 99238 65974</a>
                  </div>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={styles.contactDetails}>
                    <span>Location</span>
                    <p>Nagpur, Maharashtra, India</p>
                  </div>
                </li>
                <li>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.contactDetails}>
                    <span>Email Us</span>
                    <a href="mailto:ssbeautyacademy@gmail.com">ssbeautyacademy@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Working Hours & Newsletter Column */}
            <div className={styles.footerCol}>
              <h4>
                <i className="fas fa-clock"></i>
                Working Hours
              </h4>
              <div className={styles.workingHours}>
                <div className={styles.hourItem}>
                  <span>Monday - Saturday</span>
                  <strong>10:00 AM - 7:00 PM</strong>
                </div>
                <div className={styles.hourItem}>
                  <span>Sunday</span>
                  <strong className={styles.closed}>Closed</strong>
                </div>
              </div>
              
              <div className={styles.newsletter}>
                <h4>
                  <i className="fas fa-envelope-open-text"></i>
                  Get Updates
                </h4>
                <p>Subscribe for course updates & offers</p>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p>&copy; {currentYear} SS Beauty Academy. All rights reserved.</p>
            <p className={styles.credit}>Crafted with <i className="fas fa-heart"></i> by Sonali Solanke</p>
          </div>
        </div>
      </div>
    </footer>
  )
}