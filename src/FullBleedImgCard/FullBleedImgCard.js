import React from "react";
import style from "./full-bleed-card.module.css";

const FullBleedImgCard = ({ p1, p2, alt, src }) => {
  return (
    <div className={style.card}>
      <p>{p1}</p>
      <div className={style.imgWrapper}>
        <img alt={alt} src={src} />
      </div>
      <p>{p2}</p>
    </div>
  );
};

export default FullBleedImgCard;
