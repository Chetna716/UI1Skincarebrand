import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skincare.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const skincareCards = [
  { id: 1, label: "Moisturizing Cream", image: "/sunscreen.jpeg" },
  { id: 2, label: "Organic Face Wash", image: "/foam.jpg" },
  { id: 3, label: "Herbal Toner", image: "/toner.jpeg" },
  { id: 4, label: "Sun Protection Lotion", image: "/mos.jpg" }
]

function Skincare() {
  const taglineRef = useRef(null)
  const descriptionRef = useRef(null)
  const shopButtonRef = useRef(null)
  const circleRefs = useRef([])
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!taglineRef.current || !descriptionRef.current || !shopButtonRef.current || !wrapperRef.current) return

    // Set initial states
    gsap.set(taglineRef.current, { 
      opacity: 0,
      x: 100
    })
    gsap.set(descriptionRef.current, { 
      opacity: 0,
      x: -100
    })
    gsap.set(shopButtonRef.current, { 
      opacity: 0,
      y: 30
    })
    gsap.set(circleRefs.current, { 
      opacity: 0,
      y: 50
    })

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Animate tagline from right and description from left
    tl.to(taglineRef.current, {
      opacity: 1,
      x: 0,
      duration: 2.0,
      ease: "power2.out"
    })
    .to(descriptionRef.current, {
      opacity: 1,
      x: 0,
      duration: 2.0,
      ease: "power2.out"
    }, "-=1.2")
    .to(shopButtonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power2.out"
    }, "-=1.0")
    
    // Then animate circles
    .to(circleRefs.current, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: "power1.inOut",
      stagger: 0.4
    }, "-=0.5")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={wrapperRef} className="circles-wrapper">
      <div ref={taglineRef} className="skincare-tagline">
        Find Your Perfect Skincare Match
      </div>
      <button ref={shopButtonRef} className="skincare-shop-btn">Shop All</button>
      <div ref={descriptionRef} className="skincare-description">
        From gentle cleansers to nourishing serums, explore our collections crafted for every skin type.
      </div>
      {skincareCards.map((item, index) => (
        <div 
          key={item.id} 
          ref={el => circleRefs.current[index] = el}
          className={`circle-card circle${index + 1}`}
        >
          <img 
            src={item.image} 
            alt={item.label}
            className="circle-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="circle-text">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Skincare
