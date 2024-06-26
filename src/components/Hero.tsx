import React from "react";
import { useInView } from "react-intersection-observer";
import "./Hero.css";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 500,
  });

  return (
    <section id="home" className="hero">
      <div ref={ref} className={`hero-content ${inView ? "animate" : ""}`}>
        <h1>Discover Your Next Adventure</h1>
        <p>Unleash your wanderlust and explore the world's hidden gems</p>
        <button className="cta-button">Start Your Journey</button>
      </div>
    </section>
  );
};

export default Hero;
