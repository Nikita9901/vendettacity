import React, { useState } from "react";
import cartel from "./images/cartel.webp";
import russians from "./images/russians.webp";
import cosanostra from "./images/cosanostra.webp";
import triada from "./images/triad.webp";
import { ImageInfo } from "./components/ImageInfo";
import styles from "./Cartel.module.css";

const Cartel = () => {
  const [activeImage, setActiveImage] = useState(3);
  const data = [
    {
      id: 1,
      image: cartel,
      text: "CARTEL",
    },
    {
      id: 2,
      image: russians,
      text: "RUSSIANS",
    },
    {
      id: 3,
      image: triada,
      text: "TRIAD",
    },
    {
      id: 4,
      image: cosanostra,
      text: "COSA NOSTRA",
    },
  ];
  return (
    <div className={styles.container} id={"cartel"}>
      {data.map((el) => (
        <ImageInfo
          image={el.image}
          active={activeImage === el.id}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          id={el.id}
          text={el.text}
        />
      ))}
    </div>
  );
};

export default Cartel;
