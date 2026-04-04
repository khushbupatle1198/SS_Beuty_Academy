import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      
      <a href="https://wa.me/919665628794" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        <span>Book Now</span>
      </a>
    </>
  )
}

export default App