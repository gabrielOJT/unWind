import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="un">un</span>
        Wind
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              onClick={(e) => handleNavClick(e, "destinations")}
            >
              Destinations
            </a>
          </li>
          <li>
            <a href="#features" onClick={(e) => handleNavClick(e, "features")}>
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
