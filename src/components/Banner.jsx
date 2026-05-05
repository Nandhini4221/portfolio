import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImg from "../assets/img/me7.png";
import resume from "../assets/Resume/Nandhinis-Resume.pdf";
import "../styles/App.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  const roles = ["Web Developer", "Web Designer", "MERN Stack Developer"];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];

        setText(
          isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1),
        );

        if (!isDeleting && text === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="banner"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container>
        <Row>
          <Col md={7}>
            <div className="social-icons" data-aos="fade-down">
              <a
                href="https://www.linkedin.com/in/nandhini-sitharthan-8a4158293"
                target="_blank"
                rel="noreferrer"
                className="icon linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/_choco.daze_"
                target="_blank"
                rel="noreferrer"
                className="icon instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/Nandhini4221"
                target="_blank"
                rel="noreferrer"
                className="icon github"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:nandhinisitharthan07@gmail.com"
                className="icon mail"
              >
                <MdEmail />
              </a>
            </div>

            <h1 data-aos="fade-right">
              Hi! I'm <span className="name">Nandhini</span>
              <br />
              <span className="typing">{text}</span>
            </h1>

            <p data-aos="fade-up">
              I build scalable and user-friendly web applications with clean
              code.
            </p>

            <div className="btn-group" data-aos="zoom-in">
              <a href={resume} download className="btn-outline">
                Download CV
              </a>

              <button className="btn-fill" onClick={scrollToAbout}>
                Let’s Connect <ArrowRightCircle size={20} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
