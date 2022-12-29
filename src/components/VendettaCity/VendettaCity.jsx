import React from "react";
import Marquee from 'react-double-marquee';
import styles from "./VendettaCity.module.css"

const VendettaCity = () => {
    return(
        <div className={styles.animateText}>
            <Marquee speed={0.04}>
                VENDETTACITY
            </Marquee>
        </div>
    )
}

export default VendettaCity;