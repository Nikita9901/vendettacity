import React, { useEffect, useState, Suspense } from "react";
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
import rotLoader from "./images/rotLoader.png";
import styles from "./App.module.css";
import burger from "../components/Homepage/images/burger.svg";
// const HomePage = React.lazy(() => import("../components/Homepage"));
// const Story = React.lazy(() => import("../components/Story"));
// const Cartel = React.lazy(() => import("../components/Cartel"));
// const Map = React.lazy(() => import("../components/Map"));
// const Characters = React.lazy(() => import("../components/Characters"));
// const Boosts = React.lazy(() => import("../components/Boosts"));
// const NewsPaper = React.lazy(() => import("../components/NewsPaper"));
// const NewsPaperMob = React.lazy(() => import("../components/NewsPaperMob"));
// const WhitePaper = React.lazy(() => import("../components/WhitePaper"));
// const Menu = React.lazy(() => import("../components/Menu"));
// const CartelMob = React.lazy(() => import("../components/CartelMob"));

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let pixels = window.pageXOffset;
  const setPixels = (number) => {
    pixels = number;
  };
  useEffect(() => {
    window.onload = function () {
      setLoaded(true);
      console.log("loaded");
    };
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
      <div
        className={styles.wrapper}
        style={
          menuActive ? { overflow: "hidden" } : { scrollBehavior: "smooth" }
        }
      >
        {/*<Suspense*/}
        {/*  fallback={*/}
        {/*    <>*/}
        {/*      <div className={styles.loaderWrapper}>*/}
        {/*        <img src={rotLoader} alt="" className={styles.rot} />*/}
        {/*      </div>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*>*/}
        {menuActive ? (
          <Menu setMenuActive={setMenuActive} setPixels={setPixels} />
        ) : null}
        {!loaded ? (
          <>
            <div className={styles.loaderWrapper}>
              <img src={rotLoader} alt="" className={styles.rot} />
            </div>
          </>
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
