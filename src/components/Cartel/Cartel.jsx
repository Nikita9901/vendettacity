import React, { useState } from "react";
import cartel from '../../static/cartel.png'
import russians from '../../static/russians.png'
import cosanostra from '../../static/cosanostra.png'
import {ImageInfo} from './components/ImageInfo'
import styles from "./Cartel.module.css"

const Cartel = () => {
    const [activeImage, setActiveImage] = useState(2)
    return(
        <div className={styles.container}>
            <ImageInfo image={cartel} active={activeImage === 1} onClick={() => {
                console.log('H1')
            }}/>
            <ImageInfo image={russians} active={activeImage === 2} onClick={() => {
                console.log('H2')
            }}/>
            <ImageInfo image={cartel} active={activeImage === 3} onClick={() => {
                console.log('H3')
            }}/>
            <ImageInfo image={cosanostra} active={activeImage === 4} onClick={() => {
                setActiveImage(4);
            }}/>
        </div>
    )
}

export default Cartel;