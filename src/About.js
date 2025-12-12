import React, { useState, useRef } from "react";
import "./About.css"; 
import Header from "./components/Header";

function About() {
  const [answer, setAnswer] = useState(null);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);

  const moveNoButton = () => {
    const container = containerRef.current;
    const button = noButtonRef.current;

    if (container && button) {
      const contRect = container.getBoundingClientRect();
      const btnRect = button.getBoundingClientRect();

      const maxX = contRect.width - btnRect.width;
      const maxY = contRect.height - btnRect.height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };

  return (
    <div>
      <Header />
      <div ref={containerRef} className="about-container">
        <h2>Do You Love Me?</h2>
        <button onClick={() => setAnswer("yes")} className="about-button yes">
          Yes
        </button>
        <button ref={noButtonRef} onMouseEnter={moveNoButton} className="about-button no-btn">
          No
        </button>
        {answer === "yes" && <div className="about-response">me too ❤️</div>}
      </div>
    </div>
  );
}

export default About;
