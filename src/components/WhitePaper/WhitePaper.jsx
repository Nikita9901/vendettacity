import React from "react";
import gta10 from './images/gta10.png'
import instico from './images/instico.png'
import discico from './images/discico.png'
import twitico from './images/twitico.png'
import logoico from './images/logoico.png'
import styles from "./WhitePaper.module.css"

const WhitePaper = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>Whitepaper</div>
            <img src={gta10} alt="" className={styles.gta10}/>
            <div className={styles.button}>read more</div>
            <div className={styles.icons}>
                <img src={twitico} alt="" className={styles.icon}/>
                <img src={discico} alt="" className={styles.icon}/>
                <img src={instico} alt="" className={styles.icon}/>
                <img src={logoico} alt="" className={styles.icon}/>
            </div>
            <div className={styles.rights}>
                Imprint | All Rights Reserved 2023
            </div>
        </div>
    )
}

export default WhitePaper;