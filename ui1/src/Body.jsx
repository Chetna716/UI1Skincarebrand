import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Body.css";

gsap.registerPlugin(ScrollTrigger);

const bodyCards = [
  { id: 1, label: "Body Lotion", image: "/body-lotion.jpg" },
  { id: 2, label: "Soap", image: "/soap.jpg" },
  { id: 3, label: "Body Oil", image: "/body-oil.jpg" },
  { id: 4, label: "Body Scrub", image: "/body-scrub.jpg" }
];

function Body() {
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const circleRefs = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!taglineRef.current || !wrapperRef.current) return;

    // Set initial state for tagline and description
    gsap.set(taglineRef.current, { opacity: 0, y: -50 });
    gsap.set(descriptionRef.current, { opacity: 0, y: -30 });

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate tagline first
    tl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    
    // Then animate description
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="body-wrapper">
      <img src="/leaf.jpg" alt="Body Background" className="body-bg-image" />
      <div ref={taglineRef} className="body-tagline">Indulge in Nature's Touch</div>
      <div ref={descriptionRef} className="body-description">Body care that hydrates, nourishes, and loves your skin back.</div>
      
      {/* Body Care Circles */}
      <div className="body-circles-wrapper">
        {bodyCards.map((item, index) => (
          <div 
            key={item.id} 
            ref={el => circleRefs.current[index] = el}
            className={`body-circle-card body-circle${index + 1}`}
          >
            <img 
              src={item.image} 
              alt={item.label}
              className="body-circle-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="body-circle-text">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
