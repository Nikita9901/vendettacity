import React from "react";
import styles from "./OpenImage.module.css";

const OpenImage = ({ text, image, header, logo }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.block}>
        <div className={styles.header}>
          <img src={logo} alt="" className={styles.logo} />
          {header}
        </div>
        <div className={styles.description}>{text}</div>
      </div>
    </div>
  );
};

export default OpenImage;
