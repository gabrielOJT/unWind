import React from "react";
import { useInView } from "react-intersection-observer";
import "./Features.css";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "🌟",
    title: "Personalized Itineraries",
    description: "Tailor-made travel plans designed just for you",
  },
  {
    id: 2,
    icon: "🏆",
    title: "Best Price Guarantee",
    description: "Unbeatable deals on flights, hotels, and experiences",
  },
  {
    id: 3,
    icon: "🤝",
    title: "24/7 Support",
    description: "Expert assistance throughout your journey",
  },
];

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 500,
  });

  return (
    <section id="features" className="features">
      <h2>Why Choose Us</h2>
      <div ref={ref} className={`feature-grid ${inView ? "animate" : ""}`}>
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
