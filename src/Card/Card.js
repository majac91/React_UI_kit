import React from "react";
import card from "./card.module.css";

const Card = ({ children }) => {
  return (
    <div className={card.wrapper}>
      <div className={card.card}>
        <p className={card.text}>{children}</p>
      </div>
    </div>
  );
};

export default Card;
