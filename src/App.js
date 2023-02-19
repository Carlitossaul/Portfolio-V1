import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Redes from "./components/Redes/Redes";
import Mail from "./components/Mail/Mail";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Redes />
      <Mail />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
