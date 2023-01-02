import React from "react";
import classnames from "classnames";
import { carsButton, alibiButton, armorButton, weaponsButton } from "./images";
import styles from "./Buttons.module.css"

const Buttons = ({setActive, active, image, setCurrentInfo}) => {
    return(
        <div className={styles.container}>
            <img
                src={weaponsButton} 
                alt="weapons" 
                className={classnames(styles.button, styles.weaponsButton, active===1 ? styles.active : null)} 
                onClick={() => {
                    setActive(1)
                    setCurrentInfo(0)
                }}
            />
                <img 
                src={armorButton} 
                alt="armor" 
                className={classnames(styles.button, styles.armorButton, active===4 ? styles.active : null)} 
                onClick={() => {
                    setActive(4)
                    setCurrentInfo(0)
                }}
            />
            <img 
                src={alibiButton} 
                alt="alibi" 
                className={classnames(styles.button, styles.alibiButton, active===3 ? styles.active : null)} 
                onClick={() => {
                    setActive(3)
                    setCurrentInfo(0)
                }}
            />
            <img 
                src={carsButton} 
                alt="cars" 
                className={classnames(styles.button, styles.carsButton, active===2 ? styles.active : null)} 
                onClick={() => {
                    setActive(2)
                    setCurrentInfo(0)
                }}
            />
            <div className={classnames(styles.name, styles.carsName, active===2 ? styles.activeName : null)} onClick={() => {
                    setActive(2)
                    setCurrentInfo(0)
                }}>Cars</div>
            <div className={classnames(styles.name, styles.alibiName, active===3 ? styles.activeName : null)} onClick={() => {
                    setActive(3)
                    setCurrentInfo(0)
                }}>Alibi</div>
            <div className={classnames(styles.name, styles.armorName, active===4 ? styles.activeName : null)} onClick={() => {
                    setActive(4)
                    setCurrentInfo(0)
                }}>Armor</div>
            <div className={classnames(styles.name, styles.weaponsName, active===1 ? styles.activeName : null)} onClick={() => {
                    setActive(1)
                    setCurrentInfo(0)
                }}>Weapons</div>
            <img src={image} alt="" className={styles.image}/>
        </div>
    )
}

export default Buttons;