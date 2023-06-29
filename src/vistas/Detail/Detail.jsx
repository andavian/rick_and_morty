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
    <>
      {character && (
        <div className={styles.container}>
          <div className={styles.texto}>
            <h2>Name: {character.name}</h2>
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin.name}</h3>
          </div>
          <div className={styles.imagen}>
            <img className={styles.img} src={character.image} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
