import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          
          <Col xs={12} className="text-center">
            <div className="social-icons" data-aos="fade-down">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon linkedin">
                <FaLinkedinIn />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="icon instagram">
                <FaInstagram />
              </a>

              <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="icon github">
                <FaGithub />
              </a>

              <a href="mailto:yourmail@gmail.com" className="icon mail">
                <MdEmail />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};