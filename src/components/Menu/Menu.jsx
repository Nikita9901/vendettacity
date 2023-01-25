import React, { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import discico from "./images/discico.png";
import twitico from "./images/twitico.png";
import logoico from "./images/logoico.png";
import close from "./images/close.png";
import styles from "./Menu.module.css";
import { discordLink, twitterLink, logoLink } from "../links";

const Menu = ({ setMenuActive }) => {
  const story = document.getElementById("story");
  let cartel = document.getElementById("cartel");
  const characters = document.getElementById("characters");
  const roadmap = document.getElementById("roadmap");
  const whitepaper = document.getElementById("whitepaper");
  const [vertical, setVertical] = useState(false);
  const [idCartel, setIdCartel] = useState("cartel");
  const [idRoadmap, setIdRoadmap] = useState("roadmap");
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setVertical(true);
      cartel = document.getElementById("cartelMob");
      setIdCartel("cartelMob");
      setIdRoadmap("roadmapMob");
    }
  });
  const scrolling = (setActive, object, orientation) => {
    setActive(false);
    if (orientation) {
      window.scrollTo(
        0,
        object.getBoundingClientRect().top + window.pageYOffset
      );
    } else {
      window.scrollTo(
        object.getBoundingClientRect().left + window.pageXOffset,
        0
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div
          onClick={() => {
            scrolling(setMenuActive, story, vertical);
          }}
        >
          <div className={styles.anchor}>
            <a href={"#story"}>Story</a>
          </div>
        </div>
        <div
          onClick={() => {
            scrolling(setMenuActive, cartel, vertical);
          }}
        >
          <div className={styles.anchor}>
            <a href={`#${idCartel}`}>Gangs</a>
          </div>
        </div>
        <div
          onClick={() => {
            scrolling(setMenuActive, characters, vertical);
          }}
        >
          <div className={styles.anchor}>
            <a href={"#characters"}>Our NFTs</a>
          </div>
        </div>
        <div
          onClick={() => {
            scrolling(setMenuActive, roadmap, vertical);
          }}
        >
          <div className={styles.anchor}>
            <a href={`#${idRoadmap}`}>Roadmap</a>
          </div>
        </div>
        <div
          onClick={() => {
            scrolling(setMenuActive, whitepaper, vertical);
          }}
        >
          <div className={styles.anchor}>
            <a href={"#whitepaper"}>Whitepaper</a>
          </div>
        </div>
      </div>
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
      <img
        src={close}
        alt=""
        className={styles.close}
        onClick={() => {
          setMenuActive(false);
        }}
      />
      <img src={logo} alt={"logo"} className={styles.logo} />
      {/*<img src={background} alt="" className={styles.background} />*/}
    </div>
  );
};

export default Menu;
