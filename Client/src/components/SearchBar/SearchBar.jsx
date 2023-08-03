import styles from "./searchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearchByName }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      <input type="search" className={styles.input} onChange={handleChange} />
      <button className={styles.buttonAdd} onClick={() => onSearchByName(name)}>
        Add
      </button>
    </div>
  );
}
