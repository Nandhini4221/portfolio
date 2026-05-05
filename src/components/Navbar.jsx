import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      variant="dark"
      className={scrolled ? "scrolled navbar" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="logo">
          MyPortfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["home", "about", "skills", "projects"].map((item) => (
              <Nav.Link
                key={item}
                as={HashLink}
                to={`#${item}`}
                className={
                  activeLink === item ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          <span className="navbar-text">
            <HashLink to="#connect">
              <button className="btn-nav">Hire Me</button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
