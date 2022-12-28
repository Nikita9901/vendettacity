import React, { useState } from "react";
import cartel from './images/cartel.png'
import russians from './images/russians.png'
import cosanostra from './images/cosanostra.png'
import {ImageInfo} from './components/ImageInfo'
import styles from "./Cartel.module.css"

const Cartel = () => {
    const [activeImage, setActiveImage] = useState(3)
    const data = [
        {
            id: 1,
            image: cartel,
            text: 'CARTEL'
        },
        {
            id: 2,
            image: russians,
            text: 'RUSSIANS'
        },
        {
            id: 3,
            image: cartel,
            text: 'TRIADA'
        },
        {
            id: 4,
            image: cosanostra,
            text: 'COSA NOSTRA'
        },
    ]
    return(
        <div className={styles.container} >
            {data.map((el) => <ImageInfo image={el.image} active={activeImage === el.id} setActiveImage={setActiveImage} id={el.id} text={el.text}/>)}
        </div>
    )
}

export default Cartel;