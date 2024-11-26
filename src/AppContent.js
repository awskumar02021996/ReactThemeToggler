import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import './styles.css';

const AppContent = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div className={`app ${theme}`}>
        <header className="app-header">
          <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
          <button onClick={toggleTheme} className="toggle-button">
            Toggle Theme
          </button>
        </header>
        <main>
          <p>
            This is a responsive UI example with a {theme} theme.
          </p>
        </main>
      </div>
    );
  };

  export default AppContent;