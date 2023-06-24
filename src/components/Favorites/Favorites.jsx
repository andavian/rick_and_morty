import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./favorites.module.css";

export default function Favorites({ onClose }) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const listFavorites = myFavorites.map((character) => (
    <li className={styles.item} key={character.id}>
      <Card
        id={character.id}
        name={character.name}
        image={character.image}
        onClose={onClose}
      />
    </li>
  ));

  return (
    <div>
      <ul className={styles.unorderedList}>{listFavorites}</ul>
    </div>
  );
}
