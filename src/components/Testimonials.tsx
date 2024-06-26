import React from "react";
import { useInView } from "react-intersection-observer";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "unWind made my dream vacation a reality. The personalized itinerary was perfect!",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "I've never had such a smooth travel experience. Their 24/7 support is truly outstanding.",
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 500,
  });

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Travelers Say</h2>
      <div ref={ref} className={`testimonial-grid ${inView ? "animate" : ""}`}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.quote}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
