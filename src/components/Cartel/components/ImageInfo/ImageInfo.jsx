import React from "react";
import classnames from "classnames";
import styles from "./ImageInfo.module.css"

const ImageInfo = ({active, image, setActiveImage, id}) => {

    return(
        <div className={classnames(styles.block, active ? styles.active : null)} onClick={() => {
            setActiveImage(id);
        }}>
                <img src={image} alt={`${image}`} className={styles.image}/>
           
        </div>
    )
}

export default ImageInfo;