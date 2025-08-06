import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutUs.css";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const bgImageRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!bgImageRef.current || !taglineRef.current || !wrapperRef.current) return;

    gsap.set(bgImageRef.current, { opacity: 0 });
    gsap.set([taglineRef.current, descriptionRef.current], {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(bgImageRef.current, {
      opacity: 1,
      duration: 3,
      ease: "power1.inOut"
    })
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=2")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="aboutus-wrapper">
      <img ref={bgImageRef} src="/aboutus.jpg" alt="About Us Background" className="aboutus-bg-image" />
      <div ref={taglineRef} className="aboutus-tagline">Rooted in Nature, Backed by Science</div>
      <div ref={descriptionRef} className="aboutus-description">
        At BareBloom, our mission is to create skincare that is pure, effective, and kind to the planet. Our journey began with a passion for natural beauty and a commitment to sustainability. Every product is crafted with care, using vegan ingredients and eco-friendly packaging, so you can feel good about what you put on your skin and how you impact the world.
      </div>
    </div>
  );
}

export default AboutUs;