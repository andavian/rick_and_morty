import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          setCharacter(null);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el personaje:", error);
        setCharacter(null);
      });
  }, [id]);

  if (character === null) {
    return (
      <div>
        <h2>Error: No se encontró el personaje</h2>
      </div>
    );
  }

  if (!character) {
    return (
      <div>
        <h2>Cargando</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h2>Name: {character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin}</h3>
      </div>
      <div className={styles.imagen}>
        <img className={styles.img} src={character.image} alt="" />
      </div>
    </div>
  );
};

export default Detail;
