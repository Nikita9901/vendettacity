import React from "react";
import classnames from "classnames";
import { cartelImage, cosanostraImage, triadaImage, russiansImage } from "./images";
import styles from "./ImageInfo.module.css"

const ImageInfo = ({active, image, setActiveImage, id, text}) => {
    const data = [
        {  
            id: 1,
            header: "Cartel",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cartelImage,
        },
        {  
            id: 2,
            header: "Russians",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: russiansImage,
        },
        {  
            id: 3,
            header: "Triada",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: triadaImage,
        },
        {  
            id: 4,
            header: "Cosa nostra",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cosanostraImage,
        },
    ]
    return(
        <div className={classnames(styles.block)} onClick={() => {
            setActiveImage(id);
        }}>
            {active ? 
            <div className={styles.openCard}>
                {data.map((el) => id === el.id ? el.header : null)}
            </div>
            :
            <>
                <img src={image} alt={`${image}`} className={styles.image}/>
                <div className={styles.text}>{text}</div>
            </>
            
            }

        </div>
    )
}

export default ImageInfo;