import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./nav.module.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../img/19.jpeg";

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
        <img src={logo} alt="" height={80} className={styles.image} />
      </Link>
      <Link to="/home">
        <button className={styles.random}>Home</button>
      </Link>
      <Link to="/about">
        <button className={styles.random}>About</button>
      </Link>
      <Link to="/favorites">
        <button className={styles.random}>Favorites</button>
      </Link>
      <SearchBar
        onSearchByName={props.onSearchByName}
        cleanCharacters={props.cleanCharacters}
      />
      <Link to="/home">
        <button className={styles.random} onClick={handleRandomSearch}>
          I'll be lucky
        </button>
      </Link>
      <button className={styles.random} onClick={props.logOut}>
        Log Out
      </button>
    </nav>
  );
}
