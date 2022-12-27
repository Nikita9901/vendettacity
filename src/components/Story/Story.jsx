import React, { useState } from "react";
import classnames from 'classnames';
import gta10 from "../../static/gta10.png";
import gta6 from "../../static/gta6.png";
import burger from '../../static/burger.svg'
import vendettacity from '../../static/vendettacity.svg';
import styles from "./Story.module.css";

const Story = () => {
    const [anim, setAnim] = useState({
        vcity:false,
        images: false,
        text: false
      })
    window.addEventListener('wheel', function(event) {
        if (window.scrollX > 200 && !anim.vcity) setAnim((prev) => {
            return {...prev, vcity: true}
        })
        else if (window.scrollX < 200 && anim.vcity) setAnim((prev) => {
            return {...prev, vcity: false}
        })
        if (window.scrollX > 900 && !anim.images) setAnim((prev) => {
            return {...prev, images: true}
        })
        else if (window.scrollX < 900 && anim.images)   setAnim((prev) => {
            return {...prev, images: false}
        })
        if (window.scrollX > 1400 && !anim.text) setAnim((prev) => {
            return {...prev, text: true}
        })
        else if (window.scrollX < 1400 && anim.text) setAnim((prev) => {
            return {...prev, text: false}
        })
      });
    
    return(
        <div className={styles.container}>
            <img src={vendettacity} alt={'vendettacity'} className={classnames(styles.vendettacityImage, anim.vcity ? styles.active : null)}/>
            <img src={gta10} alt={'gta'} className={classnames(styles.gtaImage, styles.image2)}/>
            <img src={gta6} alt={'gta'} className={classnames(styles.gtaImage, styles.image1, anim.images? styles.activeImage:null)}/>
            <div className={styles.textBlock}>
                <div className={classnames(styles.header, anim.text ? styles.activeText : null)}>Story</div>
                <div className={classnames(styles.text, anim.text ? styles.activeText : null)}>Your story began when you moved to this city 
                in search of a soul mate and a good job. After a while, not finding anything 
                worthwhile, you got a job as a waiter in a small bar in the city center.</div>
                <div className={classnames(styles.button, anim.text ? styles.activeText : null)}>read more</div>
            </div>
            <img src={burger} alt={burger} className={styles.burgerImage}/>
        </div>
    )
}

export default Story;