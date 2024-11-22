import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>
);
