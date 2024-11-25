import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Projects } from "./components/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
  </StrictMode>
);
