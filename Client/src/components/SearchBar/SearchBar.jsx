import styles from "./searchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearchByName, cleanCharacters }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      <input
        type="search"
        className={styles.input}
        onChange={handleChange}
        placeholder="search by name"
      />
      <Link to="/home">
        <button
          className={styles.buttonAdd}
          onClick={() => onSearchByName(name)}
        >
          Add
        </button>
      </Link>
      <Link to="/home">
        <button
          className={styles.buttonClean}
          onClick={() => cleanCharacters()}
        >
          Clear
        </button>
      </Link>
    </div>
  );
}
