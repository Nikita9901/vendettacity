import React, { useState } from "react";
import gta10 from "./images/gta10.png";
import discico from "./images/discico.png";
import twitico from "./images/twitico.png";
import logoico from "./images/logoico.png";
import close from "./images/close.png";
import styles from "./WhitePaper.module.css";

const WhitePaper = () => {
  const [imprintActive, setImprintActive] = useState(false);
  return (
    <div className={styles.container} id={"whitepaper"}>
      <div className={styles.header}>Whitepaper</div>
      <div className={styles.gta10}>
        <img src={gta10} alt="whitepaper" className={styles.whitepaper} />
        {imprintActive ? (
          <div className={styles.imprintWindow}>
            <img
              src={close}
              alt={"close"}
              onClick={() => {
                setImprintActive(false);
              }}
              className={styles.closeButton}
            />
            <div className={styles.headerImprint}>Imprint</div>
            <div className={styles.textAbout}>
              Company name: Prodeus Games LTD{" "}
            </div>
            <div className={styles.textAbout}>CEO: Pavlo Mifanic</div>
            <div className={styles.textAbout}>
              Address: 23, New Drum Street, London, England, E1 7AY
            </div>
            <div className={styles.textAbout}>Company ID: 14544425</div>
          </div>
        ) : null}
      </div>
      <div className={styles.button}>read</div>
      <div className={styles.icons}>
        <img src={twitico} alt="" className={styles.icon} />
        <img src={discico} alt="" className={styles.icon} />
        <img src={logoico} alt="" className={styles.icon} />
      </div>
      <div className={styles.rights}>
        <div
          className={styles.imprint}
          onClick={() => {
            setImprintActive(true);
          }}
        >
          Imprint{" "}
        </div>
        &nbsp;| All Rights Reserved 2023
      </div>
    </div>
  );
};

export default WhitePaper;
