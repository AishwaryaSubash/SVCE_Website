import React from "react";
import styles from './Card.module.scss'
const Card = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.frame}></div>
      </div>
    </div>
  );
};

export default Card;
