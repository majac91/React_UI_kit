import React from "react";
import card from "./card.module.css";

const Card = ({ children }) => {
  return (
    <div className={card.outter}>
      <div className={card.inner}>
        <p className={card.text}>{children}</p>
      </div>
    </div>
  );
};

export default Card;
