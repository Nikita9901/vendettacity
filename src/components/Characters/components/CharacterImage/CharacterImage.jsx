import React from "react";
import classnames from "classnames";
import styles from "./CharacterImage.module.css"

const CharacterImage = ({image}) => {
    return(
        <div className={classnames(styles.button_block)}>
            <img src={image} alt="" className={styles.image}/>
        </div>
    )
}

export default CharacterImage;