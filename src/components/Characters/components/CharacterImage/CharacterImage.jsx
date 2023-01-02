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
            <Carousel autoplay>
                
                {images.map((image) => <img src={image} alt="" className={styles.image}/>)}
            </Carousel>
        </div>
    )
}

export default CharacterImage;