import { Route, Routes } from "react-router-dom";
import { About } from "./About.js";
import { Home } from "./Home.js";

export function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
