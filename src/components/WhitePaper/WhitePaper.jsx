import React, { useState } from "react";
import gta10 from "./images/gta10.png";
import discico from "./images/discord.svg";
import twitico from "./images/twitter.svg";
import logoico from "./images/AH.svg";
import close from "./images/close.png";
import styles from "./WhitePaper.module.css";
import { discordLink, whitePaperButton, twitterLink, logoLink } from "../links";

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
      <a
        href={whitePaperButton}
        target={"_blank"}
        rel={"noreferrer"}
        className={styles.button}
      >
        <div>read</div>
      </a>
      <div className={styles.icons}>
        <a href={twitterLink} target={"_blank"} rel={"noreferrer"}>
          <img src={twitico} alt="" className={styles.icon} />
        </a>
        <a href={discordLink} target={"_blank"} rel={"noreferrer"}>
          <img src={discico} alt="" className={styles.icon} />
        </a>
        <a href={logoLink} target={"_blank"} rel={"noreferrer"}>
          <img src={logoico} alt="" className={styles.icon} />
        </a>
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
