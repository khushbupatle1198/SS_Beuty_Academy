import { motion } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const stats = [
    { number: "17+", label: "Years Experience", icon: "⭐" },
    { number: "1000+", label: "Happy Students", icon: "🎓" },
    { number: "100%", label: "Practical Training", icon: "💯" },
    { number: "30", label: "Days Intensive", icon: "📅" }
  ]

  const achievements = [
    { icon: "🏆", title: "Best Makeup Academy", desc: "Awarded 2023 & 2024" },
    { icon: "🌍", title: "International Certification", desc: "Globally recognized" },
    { icon: "📈", title: "1000+ Success Stories", desc: "Students placed worldwide" },
    { icon: "💎", title: "Industry Standard", desc: "Latest techniques & equipment" }
  ]

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About SS Beauty Academy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Learn. Create. Shine. ✨
          </motion.p>
        </div>
      </section>

      {/* Owner Section */}
      <section className={styles.ownerSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Meet Your Mentor</span>
            <h2>Behind the <span className={styles.goldText}>Vision</span></h2>
            <p>The passion and expertise that drives SS Beauty Academy</p>
          </motion.div>

          <div className={styles.ownerGrid}>
            <motion.div
              className={styles.ownerImageWrapper}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className={styles.ownerImageContainer}>
                <div className={styles.imageGlow}></div>
                <img 
                  src="/images/owner.jpeg" 
                  alt="Sonali Solanke - Founder & Lead Trainer" 
                  className={styles.ownerImage}
                />
                <div className={styles.experienceBadge}>
                  <span className={styles.blinkingDot}></span>
                  17+ Years Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.ownerContent}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Sonali Solanke <span className={styles.verifiedBadge}>✓</span></h3>
              <p className={styles.ownerTitle}>🎨 Makeup Artist | Educator | Dream Builder ✨</p>
              
              <div className={styles.ownerBadges}>
                <span>💄 16+ Years Experience</span>
                <span>🌍 Certified International Artist</span>
                <span>📍 Nagpur</span>
                <span>🎯 1000+ Students Trained</span>
              </div>

              <p className={styles.ownerBio}>
                With over 16 years of hands-on experience in the beauty industry, Sonali Solanke has transformed 
                countless aspiring makeup enthusiasts into confident professionals. Her journey from a passionate 
                artist to an internationally certified educator is an inspiration to many.
              </p>

              <p className={styles.ownerBio}>
                Sonali's teaching philosophy combines deep theoretical knowledge with extensive practical exposure, 
                ensuring every student graduates with industry-ready skills. Her attention to detail and commitment 
                to excellence has made SS Beauty Academy a trusted name in makeup education.
              </p>

              <div className={styles.ownerAchievements}>
                {achievements.slice(0, 2).map((item, index) => (
                  <div key={index} className={styles.achievementItem}>
                    <div className={styles.achievementIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/ss_beautyacademy_/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Follow on Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563323352552" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Like on Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className={styles.businessSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Our Legacy</span>
            <h2>Building <span className={styles.goldText}>Dreams</span> Since 2007</h2>
            <p>Creating successful makeup artists with quality education and practical training</p>
          </motion.div>

          <div className={styles.businessGrid}>
            <motion.div
              className={styles.businessContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>SS Beauty Academy</h3>
              <p className={styles.businessSubtitle}>Where Passion Meets Profession</p>
              
              <p>
                SS Beauty Academy was founded with a vision to provide world-class makeup education that combines 
                deep theoretical knowledge with extensive practical exposure. Located in Nagpur, the academy has 
                become a trusted name for professional makeup training.
              </p>

              <p>
                Our curriculum is designed to cater to both beginners who want to start their career in makeup 
                artistry and experienced artists who wish to upgrade their skills. We believe in holistic 
                development that includes technical skills, business knowledge, and personal branding.
              </p>

              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.businessImageWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className={styles.businessImageContainer}>
                <div className={styles.businessImageGlow}></div>
                <img 
                  src="/images/academy.jpg" 
                  alt="SS Beauty Academy - Professional Makeup Training" 
                  className={styles.businessImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayText}>
                    <i className="fas fa-play-circle"></i>
                    <span>Take a Tour</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievement Cards */}
          <motion.div
            className={styles.achievementsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className={styles.achievementCardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.missionIcon}>
                <i className="fas fa-medal"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To empower aspiring makeup artists with skills, confidence, and business knowledge to build successful careers in the beauty industry.</p>
              <div className={styles.missionHighlight}>
                <span>1000+ Dreams Realized</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.missionIcon}>
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be India's most trusted makeup academy producing industry-ready professionals who excel globally.</p>
              <div className={styles.missionHighlight}>
                <span>Industry Leaders by 2030</span>
              </div>
            </motion.div>
          </div>
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
            <h2>Ready to Start Your Journey?</h2>
            <p>Join SS Beauty Academy and transform your passion into a profession</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.btnPrimary}>Book a Free Consultation</a>
              <a href="/courses" className={styles.btnOutline}>View Our Courses</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}