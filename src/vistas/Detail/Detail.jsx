import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
          setLoading(false);
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (loading) {
    return (
      <div>
        <h2>Cargando</h2>
      </div>
    );
  }

  return (
    <div>
      {character && (
        <div>
          <h2 className={styles.title}>Name: {character.name}</h2>
          <h2 className={styles.title}>Status: {character.status}</h2>
          <h2 className={styles.title}>Specie: {character.species}</h2>
          <h2 className={styles.title}>Gender: {character.gender}</h2>
          <h2 className={styles.title}>Origin: {character.origin.name}</h2>
          <img src={character.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Detail;
