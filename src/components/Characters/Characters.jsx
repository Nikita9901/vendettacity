import React, { useState } from "react";
import {Character} from './components/Character'
import { VendettaCity } from "../VendettaCity";
import classnames from "classnames";
import vendettacity from './images/vendettacity.svg';
import styles from "./Characters.module.css"

const Characters = () => {
    const [anim, setAnim] = useState(false);
    window.addEventListener('wheel', function(event) {
        if (window.scrollX > 5100 && !anim) setAnim(true)
        else if (window.scrollX < 5100 && anim) setAnim(false)
      });
    return(
        <div className={styles.container} id={'characters'}>
            <div className={styles.animateBlock}><VendettaCity/></div>
            
            {/* <img src={vendettacity} alt={'vendettacity'} className={classnames(styles.vendettacityImage, anim ? styles.active : null)}/> */}
            <div className={styles.block_characters}>
                <Character/>
            </div>
        </div>
    )
}

export default Characters;