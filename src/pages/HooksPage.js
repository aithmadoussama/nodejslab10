import React from "react";
import Counter from "../components/Counter";
import Clock from "../components/Clock";
import SearchDemo from "../components/SearchDemo";
import FocusBox from "../components/FocusBox";

function HooksPage() {
  return (
    <div>
      <h2>Démonstration des Hooks</h2>

      <div className="grid">
        <Counter />
        <Clock />
        <SearchDemo />
        <FocusBox />
      </div>
    </div>
  );
}

export default HooksPage;