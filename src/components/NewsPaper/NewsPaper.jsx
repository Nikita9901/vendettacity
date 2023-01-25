import React from "react";
import pistol from "./images/pistol.png";
import newspaper from "./images/newspaper.png";
import board from "./images/board.png";
import threads from "./images/threads.png";
import styles from "./NewsPaper.module.css";

const NewsPaper = () => {
  return (
    <div className={styles.container}>
      <img src={pistol} alt="" className={styles.pistolImage} />
      <div className={styles.newspaper}>
        <img src={newspaper} alt="" className={styles.newspaperImage} />
        <div className={styles.newspaperText}>
          <div className={styles.newspaperHeader}>Pass Generation 1</div>
          <div className={styles.toptext}>
            First of all, the Pass is a boost in the game. This allows you to
            get a bonus to your respect until you lose a battle to enemy gangs
            or are raided by cops - after these events the bonus is gone
            forever. The pass has the following advantages:
          </div>
          <div className={styles.bottomtext}>
            &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;whitelist for drops with lower
            prices
          </div>
          <div className={styles.bottomtext}>
            &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;game early access
          </div>
          <div className={styles.bottomtext}>
            &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;boost of your respect in gang prices
          </div>
        </div>
      </div>
      <div className={styles.roadmap} id={"roadmap"}>
        <div className={styles.board}>
          <img src={board} alt="" className={styles.boardImage} />
          <img src={threads} alt="" className={styles.threadsImage} />
        </div>
        <div className={styles.phase1}>
          <div className={styles.phase1Header}>Phase 1. Jan-Fab 2023</div>
          <div className={styles.phase1Text}>
            1. Creation of the collection. Launch of social networks. Launching
            the website. Applying for Verification on AtomicHub
            <br />
            2. Active marketing <br />
            3. Introducing Whitepaper to Players <br />
            4. Passes Drop <br />
            5. Selection of people to participate in the game <br />
            6. Character card drop for the chosen people
          </div>
        </div>
        <div className={styles.phase2}>
          <div className={styles.phase1Header}>Phase 2. Feb-Mar 2023</div>
          <div className={styles.phase1Text}>
            1. Prelaunch.
            <br />
            2. Start of the game. Lite version.
            <br />
            3. Dropping Boosts Level 1. Opening the ability to create them.
            Boost 1.
            <br />
            4. unlocking the ability to enter the game for the Pure Money.
          </div>
        </div>
        <div className={styles.phase3}>
          <div className={styles.phase1Header}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase 3. Feb-Mar 2023
          </div>
          <div className={styles.phase1Text}>
            1. Droping Boost Level 2. Opening the ability to create them.
            <br />
            2. Dropping Boosts level 3. Unlocking the ability to create them.{" "}
            <br /> 3. Dropping cars. Unlocking the ability to craft them.
          </div>
        </div>
        <div className={styles.phase4}>
          <div className={styles.phase1Header}>Phase 4. Mar-Apr 2023</div>
          <div className={styles.phase4Text}>
            1. Dropping boosts Level 4. Unlocking the ability to create them.
            <br />
            2. Dropping Bosses.
            <br />
            3. Game map expansion.
            <br />
            Unlocking the ability to create your own gang.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPaper;
