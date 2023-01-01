import React from "react";
import cartelImage from './images/Cartel.png'
import styles from "./OpenImage.module.css"

const OpenImage = ({text, image, header, id, logo}) => {
    return(
        <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
            <div className={styles.block}>
                <div className={styles.header}>
                    <img src={logo} alt="" className={styles.logo}/>
                    {header}
                </div>
                <div className={styles.description}>{text}</div>
                <div className={styles.button}>read more</div>
            </div>
            {/* <img src={image} alt=""  className={styles.background}/> */}
        </div>
    )
}

export default OpenImage;