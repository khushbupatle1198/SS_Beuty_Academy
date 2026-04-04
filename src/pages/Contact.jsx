import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const contactMethods = [
    { 
      icon: "fas fa-phone", 
      title: "Call Us", 
      number: "9665628794",
      action: "Call Now",
      link: "tel:9665628794",
      color: "#4CAF50"
    },
    { 
      icon: "fas fa-phone-alt", 
      title: "Alternate Number", 
      number: "9923865974",
      action: "Call Now",
      link: "tel:9923865974",
      color: "#2196F3"
    },
    { 
      icon: "fab fa-whatsapp", 
      title: "WhatsApp", 
      number: "9665628794",
      action: "Message Now",
      link: "https://wa.me/919665628794",
      color: "#25D366"
    },
    { 
      icon: "fas fa-map-marker-alt", 
      title: "Location", 
      number: "Nagpur, Maharashtra",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Nagpur,Maharashtra",
      color: "#FF9800"
    }
  ]

  const features = [
    { icon: "🎓", title: "Expert Training", desc: "Learn from industry professionals" },
    { icon: "💄", title: "All Products Included", desc: "Professional grade products provided" },
    { icon: "📜", title: "Certification", desc: "Industry recognized certificate" },
    { icon: "👥", title: "Small Batches", desc: "Personal attention to each student" },
    { icon: "💼", title: "Career Support", desc: "Job assistance & portfolio building" },
    { icon: "⭐", title: "5 Star Rating", desc: "Trusted by 1000+ students" }
  ]

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.headerBadge}>Limited Seats Available</span>
            <h1>Book Your <span className={styles.goldText}>Seat</span> Today</h1>
            <p>Start your journey to become a professional makeup artist</p>
            <div className={styles.headerStats}>
              <div className={styles.headerStat}>
                <i className="fas fa-users"></i>
                <span>Limited Batch Size</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-calendar-check"></i>
                <span>Next Batch Starting Soon</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-graduation-cap"></i>
                <span>100% Placement Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Get in Touch</span>
            <h2>Connect With <span className={styles.goldText}>Us</span></h2>
            <p>Choose your preferred way to reach out and book your seat</p>
          </motion.div>

          <motion.div 
            className={styles.contactGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={styles.contactCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ borderColor: method.color }}
              >
                <div className={styles.contactIcon} style={{ background: method.color }}>
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
                <div className={styles.contactNumber}>{method.number}</div>
                <div className={styles.contactActions}>
                  <a 
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.contactButton}
                    style={{ background: method.color }}
                  >
                    {method.action} <i className="fas fa-arrow-right"></i>
                  </a>
                  <button 
                    className={styles.copyButton}
                    onClick={() => copyToClipboard(method.number, method.title)}
                    style={{ borderColor: method.color }}
                  >
                    <i className="fas fa-copy"></i>
                    {copied === method.title ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Why Choose Us</span>
            <h2>Reasons to Join <span className={styles.goldText}>SS Beauty Academy</span></h2>
            <p>What makes us the best choice for your makeup career</p>
          </motion.div>

          <motion.div 
            className={styles.featuresGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className={styles.featureGlow}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className={styles.responseSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.responseContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.responseIcon}>
              <i className="fas fa-bolt"></i>
            </div>
            <h2>Quick Response Guaranteed</h2>
            <p>We respond to all inquiries within <strong>24 hours</strong></p>
            <div className={styles.responseStats}>
              <div className={styles.responseStat}>
                <i className="fas fa-clock"></i>
                <span>9 AM - 8 PM</span>
                <small>Available Hours</small>
              </div>
              <div className={styles.responseStat}>
                <i className="fas fa-reply-all"></i>
                <span>Within 24h</span>
                <small>Response Time</small>
              </div>
              <div className={styles.responseStat}>
                <i className="fas fa-headset"></i>
                <span>Dedicated Support</span>
                <small>For Students</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.ctaBadge}>
              <i className="fas fa-fire"></i> Limited Time Offer
            </span>
            <h2>Ready to Transform Your <span className={styles.goldText}>Career</span>?</h2>
            <p>Don't miss this opportunity to learn from industry experts</p>
            <div className={styles.ctaButtons}>
              <a href="https://wa.me/919665628794" className={styles.btnPrimary}>
                <i className="fab fa-whatsapp"></i> WhatsApp Now
              </a>
              <a href="tel:9665628794" className={styles.btnOutline}>
                <i className="fas fa-phone-alt"></i> Call Us
              </a>
            </div>
            <div className={styles.ctaNote}>
              <i className="fas fa-shield-alt"></i>
              <span>Limited seats available for the next batch. Book your seat today!</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}