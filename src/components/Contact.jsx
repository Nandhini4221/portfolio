import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/App.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import bgImg from "../assets/img/bg-1.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nandy78", // service id
        "template_nandy78", // template id
        form.current,
        "WkqlapeAlSo1mmODO" // public key
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        form.current.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to send ❌");
      });
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

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

              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      required
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </Col>

                  <Col sm={6}>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                    />
                  </Col>

                  <Col xs={12}>
                    <textarea
                      rows="5"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>

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