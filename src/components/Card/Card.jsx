import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/action.js";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    }
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const handleClose = () => {
    setIsFav(false);
    dispatch(removeFav(props.id));
    props.onClose(props.id);
  };

  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {isFav ? <p className={styles.pFav}>❤️</p> : <></>}
          <img src={props.image} alt="" />
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
          <h2 className={styles.title}>{props.name}</h2>
          <Link to={`/detail/${props.id}`}>
            <p>More Info</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
