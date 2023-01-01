import React from "react";
import pistol from './images/pistol.png'
import newspaper from './images/newspaper.png'
import roadmap from './images/roadmap.png'
import styles from "./NewsPaper.module.css"

const NewsPaper = () => {
    return(
        <div className={styles.container}>
            <img src={pistol} alt="" className={styles.pistolImage}/>
            <img src={newspaper} alt="" className={styles.newspaperImage}/>
            <img src={roadmap} alt="" className={styles.roadmapImage} id={'roadmap'}/>
        </div>
    )
}

export default NewsPaper;