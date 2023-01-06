import React from "react";
import background from "./images/background.png";
import logo from "./images/logo.svg";
import discico from "./images/discico.png";
import twitico from "./images/twitico.png";
import logoico from "./images/logoico.png";
import close from "./images/close.png";
import styles from "./Menu.module.css";

const Menu = ({ setMenuActive, setPixels }) => {
  const story = document.getElementById("story");
  const cartel = document.getElementById("cartel");
  const characters = document.getElementById("characters");
  const roadmap = document.getElementById("roadmap");
  const whitepaper = document.getElementById("whitepaper");
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div
          onClick={() => {
            setMenuActive(false);
            window.scrollTo(
              story.getBoundingClientRect().left + window.pageXOffset,
              0
            );
          }}
        >
          <div className={styles.anchor}>Story</div>
        </div>
        <div
          onClick={() => {
            setMenuActive(false);
            window.scrollTo(
              cartel.getBoundingClientRect().left + window.pageXOffset,
              0
            );
          }}
        >
          <div className={styles.anchor}>Gangs</div>
        </div>
        <div
          onClick={() => {
            setMenuActive(false);
            window.scrollTo(
              characters.getBoundingClientRect().left + window.pageXOffset,
              0
            );
          }}
        >
          <div className={styles.anchor}>Our NFTs</div>
        </div>
        <div
          onClick={() => {
            setMenuActive(false);
            window.scrollTo(
              roadmap.getBoundingClientRect().left + window.pageXOffset,
              0
            );
          }}
        >
          <div className={styles.anchor}>Roadmap</div>
        </div>
        <div
          onClick={() => {
            setMenuActive(false);
            window.scrollTo(
              whitepaper.getBoundingClientRect().left + window.pageXOffset,
              0
            );
          }}
        >
          <div className={styles.anchor}>Whitepaper</div>
        </div>
      </div>
      <div className={styles.icons}>
        <img src={twitico} alt="" className={styles.icon} />
        <img src={discico} alt="" className={styles.icon} />
        <img src={logoico} alt="" className={styles.icon} />
      </div>
      <img
        src={close}
        alt=""
        className={styles.close}
        onClick={() => {
          setMenuActive(false);
        }}
      />
      <img src={logo} alt={"logo"} className={styles.logo} />
      <img src={background} alt="" className={styles.background} />
    </div>
  );
};

export default Menu;
