import React, { useState } from "react";
import {Button} from '../Button'
import {
    cartelCharactersImage, 
    russiansCharactersImage, 
    triadaCharactersImage, 
    cosanostraCharactersImage} from './images'
import {CharacterImage} from '../CharacterImage'
import styles from "./Character.module.css"

const Character = () => {
    const [active, setActive] = useState(2);
    const data = [
        {
            id: 1,
            text: 'Triada',
            image: triadaCharactersImage,
        },
        {
            id: 2,
            text: 'Cartel',
            image: cartelCharactersImage,
        },
        {
            id: 3,
            text: 'Russians',
            image: russiansCharactersImage,
        },
        {
            id: 4,
            text: 'Cosa Nostra',
            image: cosanostraCharactersImage,
        },
    ]
    return(
        <div className={styles.container}>
            <div className={styles.header}>Characters</div>
            <div className={styles.block}>
                {data.map((el) => active===el.id ? <CharacterImage image={el.image}/> : null)}
                <div className={styles.button_block}>
                    {data.map((el) => <Button text={el.text} setActive={setActive} active={active===el.id} id={el.id} key={el.id}/>)}
                </div>
            </div>
            <div className={styles.text}>Improve respect of your characters to upgrade them and earn more!</div>
        </div>
    )
}

export default Character;