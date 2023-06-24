import Card from "../Card/Card.jsx";
import styles from "./cards.module.css";

export default function Cards(props) {
  const onClose = props.onClose;
  const characters = props.characters;

  const listCharacters = characters.map((character) => (
    <li className={styles.item} key={character.id}>
      <Card
        id={character.id}
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
