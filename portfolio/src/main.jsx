import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, HomePage, Projects } from "../src/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
  </StrictMode>
);
