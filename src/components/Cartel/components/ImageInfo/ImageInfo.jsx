import React from "react";
import classnames from "classnames";
import {OpenImage} from '../OpenImage'
import { cartelbgImage, logoCartel} from "./images";
import styles from "./ImageInfo.module.css"

const ImageInfo = ({active, image, setActiveImage, id, text, activeImage}) => {
    const data = [
        {  
            id: 1,
            header: "Cartel",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cartelbgImage,
            logo: logoCartel,
        },
        {  
            id: 2,
            header: "Russians",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cartelbgImage,
            logo: logoCartel,
        },
        {  
            id: 3,
            header: "Triada",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cartelbgImage,
            logo: logoCartel,
        },
        {  
            id: 4,
            header: "Cosa nostra",
            description: "Quis in diam porta sem. Ullamcorper nisi ac aliquam commodo a quisque risus aliquam. Scelerisque lorem sit adipiscing arcu. Nam neque vitae tincidunt ac gravida. Orci consequat nunc nascetur elit porttitor arcu eu. Semper sit quisque sem duis turpis. Elit facilisi nulla varius quis dolor at quam. Scelerisque dignissim mi nunc sem egestas eros orci dignissim sagittis. Amet bibendum feugiat adipiscing tortor.",
            image: cartelbgImage,
            logo: logoCartel,
        },
    ]
    return(
        <div className={classnames(styles.block, active ? styles.openCard : styles.closeCard)} style={activeImage > id ? {justifyContent:"flex-end"} : {justifyContent:"flex-start"}} onClick={() => {
            setActiveImage(id);
        }}>
            {active ? 
            <div className={classnames(styles.openCard)}>
                {data.map((el) => id === el.id ? <OpenImage text={el.description} image={el.image} id={el.id} header={el.header} logo={el.logo}/> : null)}
            </div>
            :
            <div className={styles.imageText}>
                <img src={image} alt={`${image}`} className={styles.image}/>
                <div className={styles.text}>{text}</div>
            </div>
            
            }

        </div>
    )
}

export default ImageInfo;