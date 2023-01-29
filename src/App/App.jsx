import React, { useEffect, useState } from "react";
import {
  HomePage,
  Story,
  Cartel,
  Map,
  Characters,
  Boosts,
  NewsPaper,
  WhitePaper,
  Menu,
  CartelMob,
  NewsPaperMob,
} from "../components";
import { VendettaCity } from "../components/VendettaCity";
import rotLoader from "./images/rotLoader.webp";
import styles from "./App.module.css";
import burger from "../components/Homepage/images/burger.svg";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let pixels = window.pageXOffset;
  const setPixels = (number) => {
    pixels = number;
  };
  useEffect(() => {
    if (window.attachEvent) {
      window.attachEvent("onload", function () {
        setLoaded(true);
      });
    } else if (window.addEventListener) {
      window.addEventListener(
        "load",
        function () {
          setLoaded(true);
        },
        false
      );
    } else {
      document.addEventListener(
        "load",
        function () {
          setLoaded(true);
        },
        false
      );
    }
    setTimeout(() => {
      if (!loaded) setLoaded(true);
    }, 7000);
    // window.onload = function () {
    //   setLoaded(true);
    //   console.log("loaded");
    // };
    if (window.outerWidth > 1200)
      window.addEventListener("wheel", function (event) {
        if (!menuActive)
          if (pixels < 0) pixels = 0;
          else if (
            pixels >
            document.documentElement.scrollWidth - window.outerWidth + 100
          )
            pixels =
              document.documentElement.scrollWidth - window.outerWidth + 100;
          else setPixels(pixels + event.deltaY);
        window.scrollTo(pixels, 0);
      });
  });
  return (
    <div>
      {!loaded ? (
        <>
          <div className={styles.loaderWrapper}>
            <img src={rotLoader} alt="" className={styles.rot} />
          </div>
        </>
      ) : null}
      <div
        className={styles.wrapper}
        style={
          menuActive || !loaded
            ? { overflow: "hidden" }
            : { scrollBehavior: "smooth" }
        }
      >
        {menuActive ? (
          <Menu setMenuActive={setMenuActive} setPixels={setPixels} />
        ) : null}
        <div className={styles.header}>
          <div className={styles.headerText}>Vendettacity</div>
          <img
            src={burger}
            alt={burger}
            className={styles.burgerImage}
            onClick={() => {
              setMenuActive(true);
            }}
          />
        </div>
        <HomePage setMenuActive={setMenuActive} />
        <div className={styles.animateBlock}>
          <VendettaCity />
        </div>
        <Story setMenuActive={setMenuActive} />
        <Cartel />
        <CartelMob />
        <Map />
        <Characters />
        <Boosts />
        <NewsPaper />
        <NewsPaperMob />
        <WhitePaper />
        {/*</Suspense>*/}
      </div>
    </div>
  );
}

export default App;
