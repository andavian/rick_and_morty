import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./cards.module.css";

export default function Cards(props) {
  const onClose = () => window.alert("Emulamos que se cierra la card");
  const characters = props.characters;
  const listCharacters = characters.map((character) => (
    <li className={styles.item} key={character.id}>
      <Card
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
        image={character.image}
        onClose={onClose}
      />
    </li>
  ));
  return (
    <div>
      <ul className={styles.unorderedList}>{listCharacters}</ul>
    </div>
  );
}
