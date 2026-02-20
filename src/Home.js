import "./Home.css";
import photo from "./photo/1.png";
import Header from "./components/Header";
import {  FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";


export default function Home() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
    { name: "TypeScript", icon: <FaJsSquare color="#3178C6" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Tailwind", icon: <FaCss3Alt color="#38B2AC" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#563D7C" /> },
    { name: "Node.js (Basics)", icon: <FaNodeJs color="#68A063" /> },
  ];

  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    skillCards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div>
      <Header />

      <section className="home">
        <div className="home-text">
          <h2>Hello 👋</h2>
          <h1>
            I'm <span>Ahmad Hamdy </span>
          </h1>
          <h3 className="typing">
  <Typewriter
    words={[
      "full-Stack Developer",
      "Front-End Developer (React.js)",
      "Back-End Developer (Node.js)",

    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}

  />
</h3>

          <p>
           Software Developer focused on Front-End development using React.js. Experienced in building responsive and user-friendly web applications with clean design and good performance. Skilled in writing maintainable code and delivering high-quality solutions.
            <br />
            I focus on writing clean, maintainable code and turning designs into
            interactive digital experiences.
          </p>

          <div className="home-buttons">
            <a href="/projects" className="btn primary">
              View Projects
            </a>
            <a href="/contact" className="btn outline">
              Contact Me
            </a>
          </div>
          <div className="skills-section">
            {skills.map((skill, index) => (
              <div className="skill-card fade-in" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="home-image">
          <img src={photo} alt="Ahmad Elattar" />
        </div>
      </section>
    </div>
  );
}
