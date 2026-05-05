import { Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import aboutImg from "../assets/img/me4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById("connect");
    const offset = 80;
    const top = section.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center" data-aos="fade-up">
            <div className="about-img-wrapper">
              <img src={aboutImg} alt="about" className="about-img" />
            </div>
          </Col>

          <Col md={6} data-aos="fade-up" data-aos-duration="1800">
            <div className="about-content">
              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                About Me
              </h2>

              <p
                className="about-text"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="2000"
              >
                I’m Nandhini Sitharthan, a MERN Stack Developer passionate about
                building modern and responsive web applications. I specialize in
                creating clean, user-friendly, and scalable interfaces using
                React, Node.js, Express, and MongoDB. I also work with CSS and
                Bootstrap to design visually appealing and responsive user
                experiences. I enjoy crafting digital products that are not only
                functional but also intuitive and engaging for users.
              </p>

              <div className="about-stats">
                <div
                  className="stat-box"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <h3>0+</h3>
                  <p>Years Experience</p>
                </div>

                <div
                  className="stat-box"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <h3>25+</h3>
                  <p>Projects Completed</p>
                </div>

                <div
                  className="stat-box"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <h3>8+</h3>
                  <p>Technologies</p>
                </div>
              </div>

              <button
                className="connect-btn"
                onClick={handleScrollToContact}
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="2200"
              >
                Let’s Connect
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
