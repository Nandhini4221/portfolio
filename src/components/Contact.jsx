import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/App.css";

import bgImg from "../assets/img/bg-1.png";

export const Contact = () => {

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section
      className="contact-section"
      id="connect"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={7} data-aos="fade-up">

            <div className="contact-box">

              <h2 className="contact-title">Contact Me</h2>

              <form>
                <Row>

                  <Col sm={6}>
                    <input type="text" placeholder="First Name" />
                  </Col>

                  <Col sm={6}>
                    <input type="text" placeholder="Last Name" />
                  </Col>

                  <Col sm={6}>
                    <input type="email" placeholder="Email" />
                  </Col>

                  <Col sm={6}>
                    <input type="tel" placeholder="Phone" />
                  </Col>

                  <Col xs={12}>
                    <textarea rows="5" placeholder="Message"></textarea>

                    <button type="submit">Send Message</button>
                  </Col>

                </Row>
              </form>

            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;