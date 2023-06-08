import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./nav.module.css";

export default function Nav(props) {
  const handleRandomSearch = () => {
    const random = Math.ceil(Math.random() * 826);
    props.onSearch(random);
  };

  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={props.onSearch} />
      <button className={styles.random} onClick={handleRandomSearch}>
        Voy a tener suerte
      </button>
    </nav>
  );
}
