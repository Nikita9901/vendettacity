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
          <img src={board} alt="" className={styles.board} />
        </Col>
      </Col>
    </div>
  );
};

export default NewsPaperMob;
