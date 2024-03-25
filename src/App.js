import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Narbar/Nav";
import Hero from "./Pages/Hero/Hero";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Papers from "./Pages/Papers/Papers";
import Footer from "./Pages/Footer/Footer";
import Testformat from "./Pages/Experience/Testformat";
import Papertest from "./Pages/Papers/Papertest";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero className="h-[30hv]" /> */}
      <Hero />
      <About />
      <Experience />
      <Papers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
