import styles from "./searchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.inputGroup}>
      <input type="search" className={styles.input} onChange={handleChange} />
      <button className={styles.buttonAdd} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
