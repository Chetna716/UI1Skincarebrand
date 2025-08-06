import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './index.css'
import './App.css'
import Navbar from './Navbar'
import Skincare from './Skincare'
import Body from './Body'
import Bestseller from './Bestseller'
import AboutUs from './AboutUs';
import Footer from './Footer';

function App() {
  // Hero refs
  const bareTextRef = useRef(null)
  const bloomTextRef = useRef(null)
  const imageRef = useRef(null)
  const taglineRef = useRef(null)
  const desRef = useRef(null)
  const buttonRef = useRef(null)

  // Navbar refs
  const logoRef = useRef(null)
  const navLinksRef = useRef([])
  const navButtonsRef = useRef([])

  useEffect(() => {
    if (!imageRef.current || !bareTextRef.current || !bloomTextRef.current) return;

    gsap.set(imageRef.current, { opacity: 0 })
    gsap.set([bareTextRef.current, bloomTextRef.current, taglineRef.current, desRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    })
    gsap.set([logoRef.current, ...navLinksRef.current, ...navButtonsRef.current], {
      opacity: 0,
      x: -50
    })

    const tl = gsap.timeline()

    // Navbar animation
    tl.to(logoRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(navLinksRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15
    }, "-=0.6")
    .to(navButtonsRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15
    }, "-=0.5")

    // Hero section fade
    .to(imageRef.current, {
      opacity: 1,
      duration: 4,
      ease: "power1.inOut"
    }, "<")
    .to(bareTextRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=3.2")
    .to(bloomTextRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, "-=2.4")
    .to(taglineRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.8")
    .to(desRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5")
    .to(buttonRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.4")

    return () => tl.kill()
  }, [])

  return (
    <div className="main-container">
      <Navbar logoRef={logoRef} navLinksRef={navLinksRef} navButtonsRef={navButtonsRef} />
      
      {/* Hero Section */}
      <div className="hero-section">
        <img ref={imageRef} src="/bg.jpg" alt="Top Banner" className="top-image" />
        <div className="bare-bloom-text">
          <div ref={bareTextRef} className="bare-text">BARE</div>
          <div ref={bloomTextRef} className="bloom-text">Bloom.</div>
        </div>
        <div ref={taglineRef} className="tagline-text">
          Nurture Your Skin. Nourish the Earth.
        </div>
        <div ref={desRef} className="description-text">
          At BareBloom, we craft skincare that's pure, effective, and planet-friendly so you can glow naturally while caring for the world around you.
        </div>
        <button ref={buttonRef} className="shop-now-btn">Shop Now</button>
      </div>

      {/* Skincare Section */}
      <div id="skincare">
        <Skincare />
      </div>

      {/* Body Section */}
      <div id="body">
        <Body />
      </div>

      {/* Bestseller Section */}
      <div id="bestsellers">
        <Bestseller />
      </div>

      {/* About Us Section */}
      <div id="aboutus">
        <AboutUs />
      </div>
      <Footer />
    </div>
  )
}

export default App
