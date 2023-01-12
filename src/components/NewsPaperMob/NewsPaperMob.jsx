import React from "react";
import pistol from "./images/pistol.png";
import newspaper from "./images/newspaper.png";
import board from "./images/board.png";
import { Col, Row } from "antd";
import styles from "./NewsPaperMob.module.css";

const NewsPaperMob = () => {
  return (
    <div className={styles.container}>
      <Col>
        <Row gutter={30} justify={"center"} align={"middle"}>
          <Col span={12}>
            <img src={pistol} alt="" className={styles.pistolImage} />
          </Col>
          <Col span={12}>
            <div className={styles.newspaper}>
              <img src={newspaper} alt="" className={styles.newspaperImage} />
              <div className={styles.newspaperText}>
                <div className={styles.newspaperHeader}>Pass Generation 1</div>
                <div className={styles.toptext}>
                  First of all, the Pass is a boost in the game. This allows you
                  to get a bonus to your respect until you lose a battle to
                  enemy gangs or are raided by cops - after these events the
                  bonus is gone forever. The pass has the following advantages:
                </div>
                <div className={styles.bottomtext}>
                  &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;whitelist for drops with lower
                  prices
                </div>
                <div className={styles.bottomtext}>
                  &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;game early access
                </div>
                <div className={styles.bottomtext}>
                  &nbsp;&nbsp;♦ &nbsp;&nbsp;&nbsp;boost of your respect in gang
                  prices
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Col>
          <div className={styles.roadmap} id={"roadmapMob"}>
            <img src={board} alt="" className={styles.board} />
            <div className={styles.phase1}>
              <div className={styles.phase1Header}>Phase 1. January 2023</div>
              <div className={styles.phase1Text}>
                1. Creation of the collection. Launch of social networks.
                Launching the website. Applying for Verification on AtomicHub{" "}
                <br />
                2. Active marketing <br />
                3. Getting to know the players with White Paper <br />
                4. Open beta testing <br />
                5. Selection of people to participate in the game <br />
                6. Character card drop for the chosen people
              </div>
            </div>
            <div className={styles.phase2}>
              <div className={styles.phase1Header}>Phase 2. February 2023</div>
              <div className={styles.phase1Text}>
                1. Prelaunch. Start.
                <br />
                2. Start of the game. Lite.
                <br />
                3. Dropping Boosts Level 1. Opening the ability to create them.
                Boost 1.
                <br />
                4. unlocking the ability to enter the game for the Pure Money.
              </div>
            </div>
            <div className={styles.phase3}>
              <div className={styles.phase1Header}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase 3. March 2023
              </div>
              <div className={styles.phase1Text}>
                1. Drop Boost Level 2. Opening the ability to create them. Boost
                2
                <br />
                2. Dropping Boosts level 3. Unlocking the ability to create
                them. Boost 3<br /> 3. Dropping cars. Unlocking the ability to
                craft them. Car
              </div>
            </div>
            <div className={styles.phase4}>
              <div className={styles.phase1Header}>
                Phase 4. April
                2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;
              </div>
              <div className={styles.phase4Text}>
                1. Dropping boosts to level 4. Unlocking the ability to create
                them. Boost 4<br />
                2. Dropping Bosses. Boss. Stage 1<br />
                3. Game map expansion.
                <br />
                Unlocking the ability to create your own gang. Stage 2
              </div>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
};

export default NewsPaperMob;
