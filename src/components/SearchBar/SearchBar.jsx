import styles from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={styles.inputGroup}>
      <input type="search" className={styles.input} />
      <button
        className={styles.buttonAdd}
        onClick={(characterId) => {
          onSearch(characterId);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
