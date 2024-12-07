import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../themeContext/themeContext";
import './style.css'

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'dark'; 
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
