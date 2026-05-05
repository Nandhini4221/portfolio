import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaGithub, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/App.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="footer-social-icons" data-aos="fade-up">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/Nandhini4221"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <FaGithub />
              </a>

              <a href="mailto:yourmail@gmail.com" className="footer-icon">
                <MdEmail />
              </a>
            </div>
          </Col>

          <Col xs={12}>
            <div className="footer-bottom">
              <p>
                © {currentYear} Made with
                <FaHeart className="footer-heart" />
                by <span className="footer-name">Nandhini</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
