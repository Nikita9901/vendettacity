import React, { useState } from "react";
import { Character } from "./components/Character";
import { VendettaCity } from "../VendettaCity";
import styles from "./Characters.module.css";

const Characters = () => {
  return (
    <div className={styles.container} id={"characters"}>
      <div className={styles.animateBlock}>
        <VendettaCity />
      </div>
      <div className={styles.block_characters}>
        <Character />
      </div>
    </div>
  );
};

export default Characters;
