import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
    </button>
  );
}

export default ThemeToggle;