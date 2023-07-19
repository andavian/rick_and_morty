import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav(props) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const handleRandomSearch = () => {
    const random = Math.ceil(Math.random() * 826);
    props.onSearch(random);
  };

  return (
    <nav className={styles.nav}>
      <Link to="/home">
        <button className={styles.random}>Home</button>
      </Link>
      <Link to="/about">
        <button className={styles.random}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={styles.random}>Favorites</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <button className={styles.random} onClick={handleRandomSearch}>
        I'll be lucky
      </button>
      <button className={styles.random} onClick={props.logOut}>
        Log Out
      </button>
    </nav>
  );
}
