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
import Contacttest from "./Pages/Contact/Contacttest";
import Abouttest from "./Pages/About/Abouttest";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero className="h-[30hv]" /> */}
      <Hero />
      <Abouttest />

      <Experience />
      <Papers />
      <Contacttest />

      <Footer />
    </div>
  );
}

export default App;
