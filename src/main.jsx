import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/themeProvider/themeProvider";
import ThemedApp from "../src/components/themeApp/themeApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </Router>
  </StrictMode>
);
