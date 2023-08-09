import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState(null);
  const [isFav, setIsFav] = useState(false);

  const allCharacters = useSelector((state) => state.allCharacters);
  console.log("id", id);
  console.log("all Character", allCharacters);
  const findCharacter = allCharacters.find((char) => char.id === Number(id));

  console.log("personaje buscado", findCharacter);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const { data } = await axios(`rickandmorty/character/${id}`);

        if (data.name) {
          setCharacter(data);
        } else {
          setCharacter(null);
        }
      } catch (error) {
        alert("Error al obtener el personaje:", error);
        setCharacter(null);
      }
    };
    fetchCharacter();
  }, [id]);

  useEffect(() => {
    console.log("IsFav Value:", isFav, allCharacters);

    if (findCharacter) {
      setIsFav(true);
    }
  }, [allCharacters, id]);

  if (character === null) {
    return (
      <div>
        <h2>Error: No se encontró el personaje</h2>
      </div>
    );
  }

  const { name, gender, origin, status, image, species } = character;

  const handleFavorite = () => {
    console.log(
      "Handling Favorite:",
      isFav,
      id,
      name,
      gender,
      origin,
      status,
      image,
      species
    );
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, gender, origin, status, image, species }));
    }
  };

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
        <Link to="/home">
          {" "}
          <button type="button" className={styles.flecha}>
            🢀
          </button>
        </Link>
      </div>

      <div className={styles.imagen}>
        <img className={styles.img} src={character.image} alt="" />
        <div>
          {console.log("Rendering isFav:", isFav)}
          {isFav ? (
            <button
              type="button"
              className={styles.buttonFav}
              onClick={handleFavorite}
            >
              ❤️
            </button>
          ) : (
            <button
              type="button"
              className={styles.buttonFav}
              onClick={handleFavorite}
            >
              🤍
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
