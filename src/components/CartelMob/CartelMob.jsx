import React, { useState } from "react";
import { Col, Row } from "antd";
import cartel from "./images/cartel.webp";
import russians from "./images/russians.webp";
import cosanostra from "./images/cosanostra.webp";
import triada from "./images/triad.webp";
import styles from "./CartelMob.module.css";
import { CloseImage } from "./components";
import classnames from "classnames";

const CartelMob = () => {
  const [activeImage, setActiveImage] = useState(0);
  const data = [
    {
      id: 1,
      image: cartel,
      text: "Cartel",
    },
    {
      id: 2,
      image: russians,
      text: "Russians",
    },
    {
      id: 3,
      image: triada,
      text: "Triad",
    },
    {
      id: 4,
      image: cosanostra,
      text: "Cosa Nostra",
    },
  ];
  return (
    <div className={styles.container} id={"cartelMob"}>
      <div className={styles.wrapper}>
        <img
          src={data[0].image}
          className={classnames(
            activeImage === data[0].id
              ? styles.hiddenImageCartelActive
              : styles.hiddenImageCartel
          )}
          onClick={() => {
            setActiveImage(0);
          }}
        />
        <img
          src={data[1].image}
          className={classnames(
            activeImage === data[1].id
              ? styles.hiddenImageRussiansActive
              : styles.hiddenImageRussians
          )}
          onClick={() => {
            setActiveImage(0);
          }}
        />
        <img
          src={data[2].image}
          className={classnames(
            activeImage === data[2].id
              ? styles.hiddenImageTriadaActive
              : styles.hiddenImageTriada
          )}
          onClick={() => {
            setActiveImage(0);
          }}
        />
        <img
          src={data[3].image}
          className={classnames(
            activeImage === data[3].id
              ? styles.hiddenImageCosanostraActive
              : styles.hiddenImageCosanostra
          )}
          onClick={() => {
            setActiveImage(0);
          }}
        />
        <div className={styles.header}>Select your gang</div>
        <Row gutter={[12, 24]} justify={"center"} align={"middle"}>
          <Col span={11} flex={1}>
            <CloseImage
              image={data[0].image}
              id={data[0].id}
              setActiveImage={setActiveImage}
              activeImage={activeImage}
              name={data[0].text}
            />
          </Col>
          <Col span={11} flex={2}>
            <CloseImage
              image={data[1].image}
              id={data[1].id}
              setActiveImage={setActiveImage}
              activeImage={activeImage}
              name={data[1].text}
            />
          </Col>
        </Row>
        <Row gutter={[12, 24]} justify={"center"} align={"middle"}>
          <Col span={11}>
            <CloseImage
              image={data[2].image}
              id={data[2].id}
              setActiveImage={setActiveImage}
              activeImage={activeImage}
              name={data[2].text}
            />
          </Col>
          <Col span={11}>
            <CloseImage
              image={data[3].image}
              id={data[3].id}
              setActiveImage={setActiveImage}
              activeImage={activeImage}
              name={data[3].text}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartelMob;
