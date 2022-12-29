import React from "react";
import classnames from "classnames";
import {Carousel} from 'antd';
import styles from "./CharacterImage.module.css";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const CharacterImage = ({images}) => {
    return(
        <div className={classnames(styles.block)}>
                {/* <img src={images[0]} alt="" className={styles.image}/> */}
            <Carousel autoplay>
                <img src={images[0]} alt="" className={styles.image}/>
                <img src={images[1]} alt="" className={styles.image}/>
                <img src={images[2]} alt="" className={styles.image}/>
                <img src={images[3]} alt="" className={styles.image}/>
            </Carousel>
        </div>
    )
}

export default CharacterImage;