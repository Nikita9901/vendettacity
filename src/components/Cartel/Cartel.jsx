import React, { useState } from "react";
import cartel from '../../static/cartel.png'
import russians from '../../static/russians.png'
import cosanostra from '../../static/cosanostra.png'
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
            text: 'CARTEL'
        },
        {
            id: 4,
            image: cosanostra,
            text: 'COSA NOSTRA'
        },
    ]
    return(
        <div className={styles.container} >
            {data.map((el) => <ImageInfo image={el.image} active={activeImage === el.id} setActiveImage={setActiveImage} id={el.id}/>)}
        </div>
    )
}

export default Cartel;