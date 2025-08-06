import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Bestseller.css";

gsap.registerPlugin(ScrollTrigger);

const bestsellerProducts = [
  { 
    id: 1, 
    name: "Natural Face Cream", 
    price: "299Rs", 
    image: "/lotion.jpeg",
    category: "Skincare"
  },
  { 
    id: 2, 
    name: "Organic Body Soap", 
    price: "249Rs", 
    image: "/soap.jpeg",
    category: "Body Care"
  },
  { 
    id: 3, 
    name: "Hydrating Toner", 
    price: "349Rs", 
    image: "/toner.jpeg",
    category: "Skincare"
  },
  { 
    id: 4, 
    name: "Nourishing Body Oil", 
    price: "449Rs", 
    image: "/body oil.jpeg",
    category: "Body Care"
  },
  { 
    id: 5, 
    name: "Exfoliating Scrub", 
    price: "470Rs", 
    image: "/body scrub.jpeg",
    category: "Body Care"
  },
  { 
    id: 6, 
    name: "Protective Sunscreen", 
    price: "499Rs", 
    image: "/sunscreen.jpeg",
    category: "Skincare"
  }
];

const topCategories = [
  { id: 1, title: "Best Sellers", count: "50+ Products" },
  { id: 2, title: "New Arrivals", count: "20+ Products" },
  { id: 3, title: "Customer Favorites", count: "30+ Products" }
];

function Bestseller() {
  const bgImageRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRefs = useRef([]);
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);
  const infoBoxesRowRef = useRef(null);
  const infoBoxRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!bgImageRef.current || !taglineRef.current || !wrapperRef.current) return;

    // Set initial states
    gsap.set(bgImageRef.current, { opacity: 0 });
    gsap.set([taglineRef.current, descriptionRef.current], { 
      opacity: 0, 
      y: 30 
    });
    gsap.set(categoryRefs.current, { 
      opacity: 0,
      y: 30
    });
    gsap.set(carouselRef.current, { 
      opacity: 0,
      y: 50
    });
    
    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // First: Background image fade in (like landing page)
    tl.to(bgImageRef.current, {
      opacity: 1,
      duration: 3,
      ease: "power1.inOut"
    })
    
    // Then: Tagline appears
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=2")
    
    // Then: Description appears
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    
    // Then: Category rectangles appear
    .to(categoryRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    }, "-=0.5")
    
    // Finally: Carousel appears
    .to(carouselRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(bestsellerProducts.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(bestsellerProducts.length / 3) - 1 : prev - 1
    );
  };

  const getVisibleProducts = () => {
    const startIndex = currentSlide * 3;
    return bestsellerProducts.slice(startIndex, startIndex + 3);
  };

  useEffect(() => {
    if (!taglineRef.current || !wrapperRef.current) return;

    // Set initial states
    gsap.set(infoBoxesRowRef.current, { opacity: 0 });
    gsap.set(infoBoxRefs.current, { opacity: 0, y: 40 });
    gsap.set([taglineRef.current, descriptionRef.current], { 
      opacity: 0, 
      y: 30 
    });
    gsap.set(carouselRef.current, { 
      opacity: 0,
      y: 50
    });

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Info boxes row fade in
    tl.to(infoBoxesRowRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut"
    })
    .to(infoBoxRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    }, "-=0.2")
    // Tagline appears
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.5")
    // Description appears
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    // Carousel appears
    .to(carouselRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="bestseller-wrapper">
      {/* Info Boxes Row */}
      <div ref={infoBoxesRowRef} className="info-boxes-row">
        <div className="info-box" ref={el => infoBoxRefs.current[0] = el}>
          <img src="/doctor.png" alt="Dermatologist Tested" className="info-icon" />
          <div className="info-text">Dermatologist Tested</div>
        </div>
        <div className="info-box" ref={el => infoBoxRefs.current[1] = el}>
          <img src="/vegan.png" alt="100% Vegan" className="info-icon" />
          <div className="info-text">100% Vegan</div>
        </div>
        <div className="info-box" ref={el => infoBoxRefs.current[2] = el}>
          <img src="/recycle.png" alt="Recyclable Packaging" className="info-icon" />
          <div className="info-text">Recyclable Packaging</div>
        </div>
      </div>

      {/* Tagline and Description */}
      <div ref={taglineRef} className="bestseller-tagline">Our Bestsellers</div>
      <div ref={descriptionRef} className="bestseller-description">
        Discover our most loved products, carefully crafted for your natural beauty journey.
      </div>
      
      {/* Product Carousel */}
      <div ref={carouselRef} className="product-carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="product-carousel">
          {getVisibleProducts().map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(bestsellerProducts.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;