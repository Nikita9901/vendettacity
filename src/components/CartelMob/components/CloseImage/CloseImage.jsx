import React from "react";
import classnames from "classnames";
import styles from "./CloseImage.module.css";

const CloseImage = ({ image, setActiveImage, id, activeImage }) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt=""
        className={classnames(
          activeImage === id ? styles.imageActive : styles.image
        )}
        onClick={() => {
          setActiveImage(id);
        }}
      />
    </div>
  );
};

export default CloseImage;
