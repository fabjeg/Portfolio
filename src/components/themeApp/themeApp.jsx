import { Routes, Route } from "react-router-dom";
import { About, Contact, HomePage, Projects } from "../../index/index";

const ThemedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default ThemedApp;
