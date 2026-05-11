import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";
import { ToastContainer } from "react-toastify";

import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
