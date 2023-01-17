import React from "react";
import classnames from "classnames";
import styles from "./CloseImage.module.css";

const CloseImage = ({ image, setActiveImage, id, activeImage, name }) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        setActiveImage(id);
      }}
    >
      {activeImage !== id && <div className={styles.name}>{name}</div>}
      <img
        src={image}
        alt=""
        className={classnames(
          activeImage !== 0 ? styles.imageActive : styles.image
        )}
      />
    </div>
  );
};

export default CloseImage;
