import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Toolkit from "./components/Toolkit";
import Academic from "./components/Academic";
import GrowthPath from "./components/GrowthPath";
import Projects from "./components/Project";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Overview />
      <Toolkit />
      <Academic/>
      <GrowthPath />
      <Projects />
      <Recognition />
      <Contact />
      <Footer />
    </>
  );
}

export default App;