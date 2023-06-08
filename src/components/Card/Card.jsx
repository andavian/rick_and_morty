import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h2 className={styles.title}>{props.name}</h2>

          <img src={props.image} alt="" />
        </div>
        <div className={styles.flipCardBack}>
          <button
            className={styles.button}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
          <h2 className={styles.title}>{props.status}</h2>
          <h2 className={styles.title}>{props.species}</h2>
          <h2 className={styles.title}>{props.gender}</h2>
          <h2 className={styles.title}>{props.origin}</h2>
        </div>
      </div>
    </div>
  );
}
