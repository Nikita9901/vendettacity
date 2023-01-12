import React, { useState } from "react";
import { Col, Row } from "antd";
import cartel from "./images/cartel.png";
import russians from "./images/russians.png";
import cosanostra from "./images/cosanostra.png";
import triada from "./images/triada.png";
import styles from "./CartelMob.module.css";
import { CloseImage } from "./components";

const CartelMob = () => {
  const [activeImage, setActiveImage] = useState(0);
  const data = [
    {
      id: 1,
      image: cartel,
      text: "CARTEL",
    },
    {
      id: 2,
      image: russians,
      text: "RUSSIANS",
    },
    {
      id: 3,
      image: triada,
      text: "TRIADA",
    },
    {
      id: 4,
      image: cosanostra,
      text: "COSA NOSTRA",
    },
  ];
  return (
    <div className={styles.container} id={"cartelMob"}>
      <div className={styles.wrapper}>
        <Row gutter={[24, 24]} justify={"center"} align={"middle"}>
          <Col span={11} flex={1}>
            <CloseImage
              image={data[0].image}
              id={data[0].id}
              setActiveImage={setActiveImage}
            />
          </Col>
          <Col span={11} flex={2}>
            <CloseImage
              image={data[1].image}
              id={data[1].id}
              setActiveImage={setActiveImage}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} justify={"center"} align={"middle"}>
          <Col span={11}>
            <CloseImage
              image={data[2].image}
              id={data[2].id}
              setActiveImage={setActiveImage}
            />
          </Col>
          <Col span={11}>
            <CloseImage
              image={data[3].image}
              id={data[3].id}
              setActiveImage={setActiveImage}
              activeImage={activeImage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartelMob;
