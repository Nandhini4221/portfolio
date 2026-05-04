import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import {About} from "./components/About"
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;