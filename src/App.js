import { Route, Routes } from "react-router-dom";
import { About } from "./About.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Home } from "./Home.js";
import "./main.css";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index={true} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
