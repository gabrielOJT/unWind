import React from "react";
import { useInView } from "react-intersection-observer";
import "./Destinations.css";

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Mystic Mountains",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Experience the serenity of misty peaks and hidden valleys",
  },
  {
    id: 2,
    name: "Tropical Paradise",
    image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
    description: "Relax on pristine beaches and swim in crystal-clear waters",
  },
  {
    id: 3,
    name: "Urban Exploration",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    description: "Immerse yourself in vibrant cultures and bustling cityscapes",
  },
];

const Destinations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    delay: 500,
  });

  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div ref={ref} className={`destination-grid ${inView ? "animate" : ""}`}>
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
