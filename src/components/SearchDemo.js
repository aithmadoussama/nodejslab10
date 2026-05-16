import React, { useMemo, useState, useCallback } from "react";

const data = [
  "React",
  "JavaScript",
  "Hooks",
  "useState",
  "useEffect",
  "useContext",
  "useReducer",
  "React Router",
  "Frontend",
  "Full Stack",
];

function SearchDemo() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const clearSearch = useCallback(() => {
    setSearch("");
  }, []);

  return (
    <div className="card">
      <h3>Recherche optimisée</h3>

      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={clearSearch}>Effacer</button>

      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchDemo;