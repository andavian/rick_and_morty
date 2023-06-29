import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/action";
import styles from "./favorites.module.css";

export default function Favorites({ onClose }) {
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const listFavorites = myFavorites.map((character) => (
    <li className={styles.item} key={character.id}>
      <Card
        id={character.id}
        name={character.name}
        image={character.image}
        gender={character.gender}
        onClose={onClose}
      />
    </li>
  ));

  return (
    <div>
      <select onChange={handleOrder} className={styles.input}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select onChange={handleFilter} className={styles.input}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <ul className={styles.unorderedList}>{listFavorites}</ul>
    </div>
  );
}
