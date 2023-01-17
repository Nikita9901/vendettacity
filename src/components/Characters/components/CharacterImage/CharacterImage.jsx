import React from "react";
import classnames from "classnames";
import { Carousel } from "antd";
import styles from "./CharacterImage.module.css";

const CharacterImage = ({ images }) => {
  return (
    <div className={classnames(styles.block)}>
      <Carousel autoplay className={styles.carousel}>
        {images.map((image) => (
          <img src={image} alt="" className={styles.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default CharacterImage;
