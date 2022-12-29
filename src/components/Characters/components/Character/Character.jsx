import React, { useState } from "react";
import {Button} from '../Button'
import {
    cartelCharactersImage1,
    cartelCharactersImage2, 
    cartelCharactersImage3, 
    cartelCharactersImage4, 
    russiansCharactersImage1, 
    russiansCharactersImage2, 
    russiansCharactersImage3, 
    russiansCharactersImage4, 
    triadaCharactersImage1, 
    triadaCharactersImage2,
    triadaCharactersImage3,
    triadaCharactersImage4,
    cosanostraCharactersImage1,
    cosanostraCharactersImage2,
    cosanostraCharactersImage3,
    cosanostraCharactersImage4} from './images'
import {CharacterImage} from '../CharacterImage'
import styles from "./Character.module.css"

const Character = () => {
    const [active, setActive] = useState(2);
    const data = [
        {
            id: 1,
            text: 'Triada',
            images: [triadaCharactersImage1,triadaCharactersImage2,triadaCharactersImage3,triadaCharactersImage4],
        },
        {
            id: 2,
            text: 'Cartel',
            images: [cartelCharactersImage1,cartelCharactersImage2,cartelCharactersImage3,cartelCharactersImage4],
        },
        {
            id: 3,
            text: 'Russians',
            images: [russiansCharactersImage1,russiansCharactersImage2,russiansCharactersImage3,russiansCharactersImage4],
        },
        {
            id: 4,
            text: 'Cosa Nostra',
            images: [cosanostraCharactersImage1,cosanostraCharactersImage2,cosanostraCharactersImage3,cosanostraCharactersImage4],
        },
    ]
    return(
        <div className={styles.container}>
            <div className={styles.header}>Characters</div>
            <div className={styles.block}>
                {data.map((el) => active===el.id ? <CharacterImage images={el.images}/> : null)}
                <div className={styles.button_block}>
                    {data.map((el) => <Button text={el.text} setActive={setActive} active={active===el.id} id={el.id} key={el.id}/>)}
                </div>
            </div>
            <div className={styles.text}>Improve respect of your characters to upgrade them and earn more!</div>
        </div>
    )
}

export default Character;