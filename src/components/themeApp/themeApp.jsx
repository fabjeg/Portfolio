import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../themeContext/themeContext";
import { About, Contact, HomePage, Projects } from "../../index/index";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
