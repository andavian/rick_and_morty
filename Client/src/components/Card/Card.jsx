import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/action.js";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({
  id,
  name,
  gender,
  origin,
  status,
  image,
  species,
  onClose,
}) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, gender, origin, status, image, species }));
    }
  };

  const handleClose = () => {
    setIsFav(false);
    dispatch(removeFav(id));
    onClose(id);
  };

  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, id]);

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {isFav ? <p className={styles.pFav}>❤️</p> : <></>}
          <img src={image} alt="" />
        </div>
        <div className={styles.flipCardBack}>
          {isFav ? (
            <button className={styles.buttonFav} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.buttonFav} onClick={handleFavorite}>
              🤍
            </button>
          )}
          <button className={styles.buttonClose} onClick={handleClose}>
            X
          </button>
          <h2 className={styles.title}>{name}</h2>
          <div style={{ display: "none" }}>{id}</div>
          <div style={{ display: "none" }}>{status}</div>
          <div style={{ display: "none" }}>{origin}</div>
          <div style={{ display: "none" }}>{gender}</div>
          <div style={{ display: "none" }}>{species}</div>
          <Link to={`/detail/${id}`}>
            <p>More Info</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
