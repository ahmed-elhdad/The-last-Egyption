import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../css/1-Header/1-Header.css";
function Header() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="header">
      <div className="head">
        <h1>مصر الحضارة</h1>
        <button onClick={toggleMode} className="mode-toggle">
          {mode === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
