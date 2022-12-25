import React, { useState } from "react";
import styles from "./ImageInfo.module.css"

const ImageInfo = ({active, image}) => {
    return(
        <div className={styles.block} onClick={(e) => {
            e.target.style.width = active ? '1250px' : 'auto';
        }}>
            {active ? <div style={{width: '1250px'}}>Hello</div> :  <img src={image} alt={`${image}`} />}
           
        </div>
    )
}

export default ImageInfo;