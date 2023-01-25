import React from "react";
import classnames from "classnames";
import { OpenImage } from "../OpenImage";
import {
  cartelbgImage,
  triadabgImage,
  cosanostrabgImage,
  russiansbgImage,
  logoCartel,
} from "./images";
import styles from "./ImageInfo.module.css";

const ImageInfo = ({
  active,
  image,
  setActiveImage,
  id,
  text,
  activeImage,
}) => {
  const data = [
    {
      id: 1,
      header: "Cartel",
      description:
        "The cartel are scumbags led by even bigger scumbags. They're cold-blooded when they plan a case, cold-blooded when they go on a case - cold-blooded all the time. They have no moral principles - it's no fun with them.",
      image: cartelbgImage,
      logo: logoCartel,
    },
    {
      id: 2,
      header: "Russians",
      description:
        "The Russians are from CIS countries, some of them have done more than one term before getting into the gang. Every one of them could be put away for a lot of time if the gang weakened, but now the cops and everyone around them are afraid to deal with them.",
      image: russiansbgImage,
      logo: logoCartel,
    },
    {
      id: 3,
      header: "Triad",
      description:
        "Triad - gangs within which there is strict discipline and hierarchy, these guys are organized and well prepared to deal with any issues with any people. They have no such thing as fear, such a feeling that each of them will be ready to go out alone against a dozen.",
      image: triadabgImage,
      logo: logoCartel,
    },
    {
      id: 4,
      header: "Cosa nostra",
      description:
        "Casa Nostra - calculating and judicious, these guys solve issues without too much fuss and noise, but the consequences are like shouting that the Cosa Nostra do not play by small things - they take everything and at once.",
      image: cosanostrabgImage,
      logo: logoCartel,
    },
  ];
  return (
    <div
      className={classnames(
        styles.block,
        active ? styles.openCard : styles.closeCard
      )}
      style={
        activeImage > id
          ? { justifyContent: "flex-end" }
          : { justifyContent: "flex-start" }
      }
      onClick={() => {
        setActiveImage(id);
      }}
    >
      {active ? (
        <div className={classnames(styles.openCard)}>
          {data.map((el) =>
            id === el.id ? (
              <OpenImage
                text={el.description}
                image={el.image}
                id={el.id}
                header={el.header}
                logo={el.logo}
              />
            ) : null
          )}
        </div>
      ) : (
        <div className={styles.imageText}>
          <img src={image} alt={`${image}`} className={styles.image} />
          <div className={styles.text}>{text}</div>
        </div>
      )}
    </div>
  );
};

export default ImageInfo;
