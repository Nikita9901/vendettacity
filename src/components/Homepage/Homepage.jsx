import React from "react";
import homepage from '../../static/homepage.png'
import burger from '../../static/burger.svg'
import logo from '../../static/logo.png'
import styles from "./Homepage.module.css"

const HomePage = () => {
    return(
        <div className={styles.container}>
            <img src={logo} alt={logo} className={styles.logoImage}/>
            <img src={homepage} alt={'homepage'} className={styles.homepageImage}/>
            <img src={burger} alt={burger} className={styles.burgerImage}/>
        </div>
    )
}

export default HomePage;