import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import AppContent1 from "./AppContent";
import './styles.css';



const App = () => {
  return (
    <ThemeProvider>
      <AppContent1 />
    </ThemeProvider>
  );
};

export default App;