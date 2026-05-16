import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import useOnlineStatus from "./hooks/useOnlineStatus";

import HomePage from "./pages/HomePage";
import HooksPage from "./pages/HooksPage";
import AboutPage from "./pages/AboutPage";

function Layout() {
  const { theme } = useTheme();
  const online = useOnlineStatus();

  return (
    <div className={`app ${theme}`}>
      <header>

        <nav>
          <Link to="/">Taches</Link>
          <Link to="/hooks">Hooks</Link>
        </nav>

      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;