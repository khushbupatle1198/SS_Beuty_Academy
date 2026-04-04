import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Gallery.module.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
   { id: 1, image: '/images/gallery/makeup (1).jpeg' },
    { id: 2, image: '/images/gallery/makeup (2).jpeg' },
    { id: 3, image: '/images/gallery/makeup (3).jpeg' },
    { id: 4, image: '/images/gallery/makeup (4).jpeg' },
    { id: 5, image: '/images/gallery/makeup (5).jpeg' },
    { id: 6, image: '/images/gallery/makeup (6).jpeg' },
    { id: 7, image: '/images/gallery/makeup (7).jpeg' },
    { id: 8, image: '/images/gallery/makeup (8).jpeg' },
    { id: 9, image: '/images/gallery/makeup (9).jpeg' },
    { id: 10, image: '/images/gallery/makeup (10).jpeg' },
    { id: 11, image: '/images/gallery/makeup (11).jpeg' },
    { id: 12, image: '/images/gallery/makeup (12).jpeg' },
    { id: 13, image: '/images/gallery/makeup (13).jpeg' },
    { id: 14, image: '/images/gallery/makeup (14).jpeg' },
    { id: 15, image: '/images/gallery/makeup (15).jpeg' },
    { id: 16, image: '/images/gallery/makeup (16).jpeg' },
    { id: 17, image: '/images/gallery/makeup (17).jpeg' },
    { id: 18, image: '/images/gallery/makeup (18).jpeg' },
    { id: 19, image: '/images/gallery/makeup (19).jpeg' },
    { id: 20, image: '/images/gallery/makeup (20).jpeg' },
    { id: 21, image: '/images/gallery/makeup (21).jpeg' },
    { id: 22, image: '/images/gallery/makeup (22).jpeg' },
    { id: 23, image: '/images/gallery/makeup (23).jpeg' },
    { id: 24, image: '/images/gallery/makeup (24).jpeg' },
    { id: 25, image: '/images/gallery/makeup (25).jpeg' },
    { id: 26, image: '/images/gallery/makeup (26).jpeg' },
    { id: 27, image: '/images/gallery/makeup (27).jpeg' },
    { id: 28, image: '/images/gallery/makeup (28).jpeg' },
    { id: 29, image: '/images/gallery/makeup (29).jpeg' },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[prevIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

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
            <span className={styles.headerBadge}>Our Portfolio</span>
            <h1>Makeup <span className={styles.goldText}>Gallery</span></h1>
            <p>Explore our beautiful transformations and creative work</p>
            <div className={styles.headerStats}>
              <div className={styles.headerStat}>
                <i className="fas fa-images"></i>
                <span>{galleryImages.length}+ Transformations</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-smile"></i>
                <span>Happy Clients</span>
              </div>
              <div className={styles.headerStat}>
                <i className="fas fa-star"></i>
                <span>5 Star Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {/* Gallery Grid - Removed AnimatePresence since it's not needed for initial render */}
          <motion.div
            className={styles.galleryGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                className={styles.galleryItem}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openLightbox(image)}
              >
                <div className={styles.galleryImageWrapper}>
                  <img 
                    src={image.image} 
                    alt="Makeup Gallery"
                    className={styles.galleryImage}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500?text=Image+Coming+Soon'
                    }}
                  />
                  <div className={styles.galleryOverlay}>
                    <div className={styles.galleryInfo}>
                      <span className={styles.viewBtn}>
                        <i className="fas fa-search-plus"></i> View
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className={styles.instagramSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.instagramContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.instagramIcon}>
              <i className="fab fa-instagram"></i>
            </div>
            <h2>Follow Us on <span className={styles.goldText}>Instagram</span></h2>
            <p>Get daily updates, tips, and behind-the-scenes content</p>
            <a 
              href="https://www.instagram.com/ss_beautyacademy_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.instagramBtn}
            >
              <i className="fab fa-instagram"></i> @ss_beautyacademy_
            </a>
            <div className={styles.instagramStats}>
              <div className={styles.instaStat}>
                <i className="fas fa-heart"></i>
                <span>Daily Updates</span>
              </div>
              <div className={styles.instaStat}>
                <i className="fas fa-video"></i>
                <span>Video Tutorials</span>
              </div>
              <div className={styles.instaStat}>
                <i className="fas fa-smile"></i>
                <span>Client Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeLightbox}>
                <i className="fas fa-times"></i>
              </button>
              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <img src={selectedImage.image} alt="Gallery" />
              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className={styles.lightboxCounter}>
                {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}