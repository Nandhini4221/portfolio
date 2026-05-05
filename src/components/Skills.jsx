import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import "../styles/App.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon html" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon css" />, level: 90 },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="skill-icon bootstrap" />,
      level: 86,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="skill-icon js" />,
      level: 78,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="skill-icon mongodb" />,
      level: 85,
    },
    {
      name: "Express",
      icon: <SiExpress className="skill-icon express" />,
      level: 80,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs className="skill-icon node" />,
      level: 82,
    },
    {
      name: "React",
      icon: <FaReact className="skill-icon react" />,
      level: 90,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="skill-icon tailwind" />,
      level: 75,
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="title" data-aos="fade-up">
          <h1>
            My <span>Skills</span>
          </h1>
          <p>Technologies I Work With</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="skill-header">
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>

              <div className="progress-row">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
