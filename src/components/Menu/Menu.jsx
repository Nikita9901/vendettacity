import React from "react";
import background from './images/background.png'
import close from './images/close.png'
import styles from "./Menu.module.css"

const Menu = ({setMenuActive, setPixels}) => {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <div onClick={() => {setMenuActive(false)}}>
                    <a href="#story">Story</a>
                </div>
                <div>Gangs</div>
                <div>Our NFTs</div>
                <div>Roadmap</div>
                <div>Whitepaper</div>
            </div>
            <img src={close} alt="" className={styles.close} onClick={() => {setMenuActive(false)}}/>
            <img src={background} alt="" className={styles.background}/>
        </div>
    )
}

export default Menu;