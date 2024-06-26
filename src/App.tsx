import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
