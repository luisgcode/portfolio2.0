import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Toolbox from "./components/toolbox/Toolbox";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Behind from "./components/behind/Behind";

function App() {
  return (
    <div className="App">
      <div className="custom-bg">
        <Navbar />
        <Hero />
      </div>
      {/* <Behind /> */}
      {/* <About /> */}
      <div className="custom-bg">{/* <Toolbox /> */}</div>
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
