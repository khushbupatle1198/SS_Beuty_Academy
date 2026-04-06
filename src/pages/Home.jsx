import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import styles from './Home.module.css'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [activeTab, setActiveTab] = useState('courses')
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  
  // Fix mobile overflow on mount
  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }
    return () => {
      document.body.style.overflowX = ''
      document.documentElement.style.overflowX = ''
    }
  }, [])

  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=600&fit=crop",
      title: "Professional Makeup Course",
      subtitle: "Learn from Industry Experts",
      highlight: "30 Days Advanced Training"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&h=600&fit=crop",
      title: "Bridal Makeup Masterclass",
      subtitle: "Transform Your Passion into Profession",
      highlight: "100% Practical Training"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&h=600&fit=crop",
      title: "Airbrush Techniques",
      subtitle: "Hands-on Practical Training",
      highlight: "Industry Standard Equipment"
    }
  ]

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Nagpur",
      rating: 5,
      text: "The 30 days course completely transformed my career! The airbrush techniques and bridal makeup training were exceptional. Now I'm running my own successful makeup studio.",
      course: "30 Days Advanced Course",
      date: "March 2024",
      
    },
    {
      id: 2,
      name: "Anjali Verma",
      location: "Mumbai",
      rating: 5,
      text: "Sonali ma'am's teaching style is amazing! The practical exposure and one-on-one guidance helped me master professional techniques.",
      course: "Professional Makeup Course",
      date: "February 2024",
      
    },
    {
      id: 3,
      name: "Neha Gupta",
      location: "Pune",
      rating: 5,
      text: "From zero to hero! I had no prior experience, but the step-by-step training made everything easy.",
      course: "Advanced Makeup Course",
      date: "January 2024",
      
    },
    {
      id: 4,
      name: "Riya Mehta",
      location: "Delhi",
      rating: 5,
      text: "Best decision of my life! The portfolio building and business strategies helped me start my own salon.",
      course: "Bridal Makeup Masterclass",
      date: "December 2023",
      
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

 

  const courses = [
    {
      id: 1,
      title: "Advanced Makeup Course",
      duration: "30 Days",
      
      image: "/images/advance.jpeg",
      features: ["Bridal Makeup", "Airbrush Techniques", "HD Makeup", "Hairstyling"],
      level: "Professional",
      popular: true,
      students: "500+",
      projects: "15+"
    },
    {
      id: 2,
      title: "Bridal Makeup Masterclass",
      duration: "15 Days",
      
      image: "/images/bride.jpeg",
      features: ["Traditional Bridal", "Modern Bridal", "Pre-Bridal Prep", "Draping"],
      level: "Advanced",
      popular: false,
      students: "300+",
      projects: "10+"
    },
    {
      id: 3,
      title: "Professional Hairstyling",
      duration: "15 Days",
      
      image: "/images/hair.jpeg",
      features: ["Bridal Hairstyles", "Party Hairstyles", "Braiding", "Updos"],
      level: "Intermediate",
      popular: false,
      students: "200+",
      projects: "12+"
    },
    {
      id: 4,
      title: "Airbrush & HD Makeup",
      duration: "10 Days",
      
      image: "/images/hd.jpeg",
      features: ["Airbrush Techniques", "Camera Makeup", "Film Makeup", "Special Effects"],
      level: "Advanced",
      popular: false,
      students: "150+",
      projects: "8+"
    }
  ]

  const achievements = [
    { number: "17+", label: "Years Experience", icon: "🏆" },
    { number: "1000+", label: "Happy Students", icon: "👨‍🎓" },
    { number: "500+", label: "Bridal Makeovers", icon: "👰" },
    { number: "100%", label: "Placement Rate", icon: "💼" },
    { number: "50+", label: "Expert Trainers", icon: "👩‍🏫" },
    { number: "4.9", label: "Google Rating", icon: "⭐" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const glowVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className={styles.homeWrapper}>
      {/* Custom Cursor - Hidden on mobile */}
      <motion.div
        className={styles.customCursor}
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroCarousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={styles.carouselSlide}
              style={{ 
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url(${banners[currentSlide].image})`
              }}
            >
              <div className={styles.carouselContent}>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={styles.carouselBadge}
                >
                  ✨ {banners[currentSlide].highlight} ✨
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {banners[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {banners[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className={styles.heroButtons}
                >
                  <Link 
                    to="/contact" 
                    className={styles.btnPrimary}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Book Your Seat <i className="fas fa-calendar-check"></i>
                  </Link>
                  <button 
                    className={styles.btnOutline}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Download Brochure <i className="fas fa-download"></i>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className={styles.carouselDots}>
            {banners.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className={styles.trustBadges}>
        <div className={styles.container}>
          <motion.div 
            className={styles.badgesWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span>✓ 5000+ Happy Students</span>
            <span>✓ 100% Job Assistance</span>
            <span>✓ Government Certified</span>
            <span>✓ EMI Options Available</span>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        className={styles.statsSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={styles.statIconGold}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Links Section */}
      <div className={styles.socialLinksSection}>
        <div className={styles.container}>
          <div className={styles.socialLinksGrid}>
            <motion.a
              href="https://www.instagram.com/ss_beautyacademy_/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialCard} ${styles.instagram}`}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              variants={glowVariants}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <i className="fab fa-instagram"></i>
              <div>
                <h3>Follow on Instagram</h3>
                <p>@ss_beautyacademy_</p>
              </div>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=61563323352552"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialCard} ${styles.facebook}`}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              variants={glowVariants}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <i className="fab fa-facebook"></i>
              <div>
                <h3>Like on Facebook</h3>
                <p>SS Beauty Academy</p>
              </div>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </div>
        </div>
      </div>

      

      {/* Popular Courses Section */}
      <div className={styles.coursesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Popular Courses</span>
            <h2>Choose Your <span className={styles.goldText}>Path to Success</span></h2>
            <p>Industry-focused courses designed to make you a professional makeup artist</p>
          </motion.div>

          <motion.div 
            className={styles.coursesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className={`${styles.courseCard} ${course.popular ? styles.popularCard : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {course.popular && (
                  <div className={styles.popularBadge}>
                    <i className="fas fa-fire"></i> Most Popular
                  </div>
                )}
                <div className={styles.courseImageWrapper}>
                  <img src={course.image} alt={course.title} className={styles.courseImage} />
                  <div className={styles.courseLevel}>{course.level}</div>
                </div>
                <div className={styles.courseContent}>
                  <h3>{course.title}</h3>
                  <div className={styles.courseMeta}>
                    <span><i className="fas fa-clock"></i> {course.duration}</span>
                    <span><i className="fas fa-tag"></i> {course.price}</span>
                  </div>
                  <div className={styles.courseStats}>
                    <span><i className="fas fa-users"></i> {course.students} Students</span>
                    <span><i className="fas fa-project-diagram"></i> {course.projects} Projects</span>
                  </div>
                  <div className={styles.courseFeatures}>
                    {course.features.map((feature, i) => (
                      <span key={i} className={styles.courseFeature}>
                        <i className="fas fa-check-circle"></i> {feature}
                      </span>
                    ))}
                  </div>
                  <Link to="/courses" className={styles.courseBtn}>
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.viewAllBtn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/courses" className={styles.btnOutline}>
              View All Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trainer Section */}
      <div className={styles.trainerSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Your Mentor</span>
            <h2>Learn from Industry <span className={styles.goldText}>Expert</span></h2>
          </motion.div>
          <div className={styles.trainerGrid}>
            <motion.div
              className={styles.trainerImage}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className={styles.trainerPlaceholder}>
                <div className={styles.trainerGlow}></div>
                <img 
                  src="/images/owner.jpeg" 
                  alt="Sonali Solanke - Makeup Artist & Trainer" 
                  className={styles.trainerImage}
                />
                <div className={styles.trainerExperienceBadge}>
                  <span className={styles.blinkingDot}></span>
                  17+ Years Experience
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.trainerInfo}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Sonali Solanke <span className={styles.verifiedBadge}>✓</span></h3>
              <p className={styles.trainerTitle}>🎨 Makeup Artist | Educator | Dream Builder ✨</p>
              <div className={styles.trainerBadges}>
                <span>💄 16+ Years Experience</span>
                <span>🌍 Certified International Artist</span>
                <span>📍 Nagpur</span>
                <span>🏆 Award Winning Trainer</span>
              </div>
              <p>With over 16 years of hands-on experience in the beauty industry, Sonali has transformed countless aspiring makeup enthusiasts into confident professionals. Her passion for teaching and eye for perfection makes every student industry-ready.</p>
              <p>She has trained over 1000+ students who are now successful makeup artists, salon owners, and brand ambassadors. Her unique teaching methodology combines creativity with business acumen.</p>
              <div className={styles.trainerSocial}>
                <a href="https://www.instagram.com/ss_beautyacademy_/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> @ss_beautyacademy_
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviewsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.sectionBadge}>Student Testimonials</span>
            <h2>What Our <span className={styles.goldText}>Students</span> Say</h2>
            <p>Join 1000+ successful makeup artists who started their journey with us</p>
          </motion.div>
          <motion.div 
            className={styles.reviewsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((review) => (
              <motion.div
                className={styles.reviewCard}
                key={review.id}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className={styles.reviewCardInner}>
                  <div className={styles.reviewQuoteIcon}>
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <div className={styles.reviewStars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                  </div>
                  <p className={styles.reviewText}>"{review.text}"</p>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.reviewerImage}>
                      <img src={review.image} alt={review.name} />
                    </div>
                    <div className={styles.reviewerDetails}>
                      <h4>{review.name}</h4>
                      <div className={styles.reviewerMeta}>
                        <span className={styles.reviewerLocation}>
                          <i className="fas fa-map-marker-alt"></i> {review.location}
                        </span>
                        <span className={styles.reviewerCourse}>
                          <i className="fas fa-graduation-cap"></i> {review.course}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reviewDate}>
                    <i className="far fa-calendar-alt"></i> {review.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <motion.span
              className={styles.ctaBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⭐ Limited Seats Available! ⭐
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Start Your Career <span className={styles.goldText}>Transformation</span> 🚀
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Perfect for beginners as well as artists who want to upgrade their skills
            </motion.p>
            <motion.div
              className={styles.ctaContactInfo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.contactPhone}>
                <i className="fas fa-phone-alt"></i>
                <span>9665628794</span>
              </div>
              <div className={styles.contactPhone}>
                <i className="fab fa-whatsapp"></i>
                <span>9923865974</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className={`${styles.btnPrimary} ${styles.ctaButton}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Book Your Seat Now <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}