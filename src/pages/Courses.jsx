import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import styles from './Courses.module.css'

export default function Courses() {
  const [hoveredModule, setHoveredModule] = useState(null)
  const sectionRef = useRef(null)
  
  // Fix: Add check for sectionRef.current before using useScroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const modules = [
    { name: "Skin preparation & Analysis", icon: "🧖‍♀️", duration: "2 Days", level: "Beginner" },
    { name: "Colour Theory & Correction", icon: "🎨", duration: "3 Days", level: "Intermediate" },
    { name: "Bridal Makeup (Traditional & Modern)", icon: "👰", duration: "5 Days", level: "Advanced" },
    { name: "Party & Evening Glam", icon: "✨", duration: "3 Days", level: "Intermediate" },
    { name: "Airbrush Makeup Techniques", icon: "✈️", duration: "3 Days", level: "Advanced" },
    { name: "HD & Professional Camera Makeup", icon: "📸", duration: "2 Days", level: "Advanced" },
    { name: "Hairstyling (Basics to Advanced)", icon: "💇‍♀️", duration: "4 Days", level: "Intermediate" },
    { name: "Editorial & Fashion Makeup", icon: "👗", duration: "2 Days", level: "Advanced" },
    { name: "Business & Pricing Strategies", icon: "💼", duration: "2 Days", level: "Professional" },
    { name: "Portfolio Building", icon: "📷", duration: "2 Days", level: "Professional" },
    { name: "Client Management", icon: "🤝", duration: "1 Day", level: "Professional" },
    { name: "Social Media Marketing for Makeup Artists", icon: "📱", duration: "2 Days", level: "Professional" }
  ]

  const features = [
    { icon: "🎯", title: "100% Practical", desc: "Hands-on training with real models" },
    { icon: "💄", title: "All Products Provided", desc: "Professional grade products included" },
    { icon: "📜", title: "Certification", desc: "Industry recognized certificate" },
    { icon: "👥", title: "Small Batches", desc: "Personal attention to each student" },
    { icon: "🏆", title: "Expert Trainers", desc: "Learn from industry professionals" },
    { icon: "💼", title: "Job Assistance", desc: "Placement support provided" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -10,
      transition: { duration: 0.2 }
    }
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
            <span className={styles.headerBadge}>Professional Training</span>
            <h1>Advanced Makeup & <span className={styles.goldText}>Hairstyling Course</span></h1>
            <p>30 Days Intensive Program | Industry Ready Curriculum</p>
            <div className={styles.headerStats}>
              <div className={styles.headerStat}>
                <i className="fas fa-calendar-alt"></i>
                <span>30 Days</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-clock"></i>
                <span>Flexible Batches</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-certificate"></i>
                <span>Certified Course</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Info Cards */}
      <section className={styles.courseInfoSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.courseInfo}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.infoIcon}>💰</div>
              <h3>Course Fees</h3>
              <p className={styles.fee}>According To Course</p>
              <p className={styles.feeNote}>Including all products & materials</p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.infoIcon}>📅</div>
              <h3>Duration</h3>
              <p className={styles.duration}>30 Days</p>
              <p className={styles.durationNote}>Intensive Practical Training</p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.infoIcon}>🎓</div>
              <h3>Certification</h3>
              <p className={styles.certification}>Industry Recognized</p>
              <p className={styles.certificationNote}>Globally Accepted Certificate</p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.infoIcon}>👥</div>
              <h3>Batch Size</h3>
              <p className={styles.batchSize}>Limited Seats</p>
              <p className={styles.batchSizeNote}>Personal attention guaranteed</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Why Choose Us</span>
            <h2>What Makes Our <span className={styles.goldText}>Course Special</span></h2>
            <p>Comprehensive training with industry-standard equipment and techniques</p>
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
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredModule(index)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className={styles.featureHoverEffect}>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Modules */}
      <section className={styles.modulesSection} ref={sectionRef}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Course Curriculum</span>
            <h2>Complete <span className={styles.goldText}>12-Module</span> Program</h2>
            <p>Structured learning path from basics to professional expertise</p>
          </motion.div>

          <motion.div 
            className={styles.modulesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ opacity, scale }}
          >
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className={`${styles.moduleItem} ${hoveredModule === index ? styles.hovered : ''}`}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                onMouseEnter={() => setHoveredModule(index)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className={styles.moduleIcon}>{module.icon}</div>
                <div className={styles.moduleContent}>
                  <div className={styles.moduleName}>{module.name}</div>
                  <div className={styles.moduleMeta}>
                    <span className={styles.moduleDuration}>
                      <i className="fas fa-clock"></i> {module.duration}
                    </span>
                    <span className={`${styles.moduleLevel} ${styles[module.level.toLowerCase()]}`}>
                      {module.level}
                    </span>
                  </div>
                </div>
                <div className={styles.moduleCheck}>
                  <i className="fas fa-check-circle"></i>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className={styles.outcomesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>What You'll Learn</span>
            <h2>Skills You'll <span className={styles.goldText}>Master</span></h2>
            <p>Become a complete professional makeup artist</p>
          </motion.div>

          <motion.div 
            className={styles.outcomesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              "Professional makeup application techniques",
              "Bridal makeup for all skin tones",
              "Airbrush makeup mastery",
              "HD & camera-ready makeup",
              "Editorial & fashion makeup",
              "Advanced hairstyling",
              "Client consultation & management",
              "Portfolio development",
              "Social media branding",
              "Business & pricing strategies"
            ].map((outcome, index) => (
              <motion.div
                key={index}
                className={styles.outcomeItem}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <i className="fas fa-star"></i>
                <span>{outcome}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools & Equipment */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Tools & Equipment</span>
            <h2>Professional <span className={styles.goldText}>Products</span> Provided</h2>
            <p>All products included - Students only need to bring brushes</p>
          </motion.div>

          <motion.div 
            className={styles.toolsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { icon: "💄", name: "Professional Makeup Kits" },
              { icon: "🎨", name: "Color Correcting Palette" },
              { icon: "✈️", name: "Airbrush Machine & Products" },
              { icon: "👁️", name: "Premium Eyeshadow Palettes" },
              { icon: "💋", name: "Liquid & Matte Lipsticks" },
              { icon: "✨", name: "Highlighters & Contour Kits" },
              { icon: "🧴", name: "Skincare & Primer Products" },
              { icon: "🔧", name: "Professional Tools Set" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className={styles.toolItem}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={styles.toolIcon}>{tool.icon}</div>
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={styles.ctaBadge}>
              <i className="fas fa-fire"></i> Limited Seats Available!
            </span>
            <h2>Ready to Start Your <span className={styles.goldText}>Makeup Career</span>?</h2>
            <p>Join the next batch and transform your passion into profession</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.btnPrimary}>
                Book Your Seat Now <i className="fas fa-arrow-right"></i>
              </Link>
              <button className={styles.btnOutline}>
                <i className="fas fa-download"></i> Download Brochure
              </button>
            </div>
            <div className={styles.ctaContact}>
              <div className={styles.contactItem}>
                <i className="fas fa-phone-alt"></i>
                <span>9665628794</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fab fa-whatsapp"></i>
                <span>9923865974</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}