import React, { useState } from "react";
import {Buttons} from './components/Buttons';
import { Carousel } from "antd";
import styles from "./Boosts.module.css";
import {
    weapon1,
    weapon2,
    weapon3,
    weapon4,
    car1,
    car2,
    car3,
    car4,
    armorBullet1,
    armorBullet2,
    armorBullet3,
    armorBullet4,
    rightArrow,
    leftArrow
} from "./images";

const Boosts = () => {
    const [active, setActive] = useState(1);
    const [currentInfo, setCurrentInfo] = useState(0);
    const boosts = [
        {
            id: 1,
            button: 'Weapons',
            data: [
                {
                    id: 1,
                    name: 'Handgun',
                    image: weapon1,
                    description: 'A first level weapon that increases your chances of winning a battle when attacking an enemy district',
                    bonus: ['Bonus to attack : +3'],
                },
                {
                    id: 2,
                    name: 'Usi',
                    image: weapon3,
                    description: 'A second-level weapon that increases your chances of winning in combat when attacking an enemy district',
                    bonus: ['Bonus to attack : +5'],
                },
                {
                    id: 3,
                    name: 'Thompson submachine gun',
                    image: weapon2,
                    description: 'A level 3 weapon that increases your chances of winning a battle when attacking an enemy district',
                    bonus: ['Bonus to attack : +7'],
                },
                {
                    id: 4,
                    name: 'Machine Gun',
                    image: weapon4,
                    description: 'A level 4 weapon that increases your chances of winning a battle when attacking an enemy district',
                    bonus: ['Bonus to attack : +9'],
                },
            ]
        },
        {
            id: 2,
            button: 'Cars',
            data: [
                {
                    id: 1,
                    name: 'Car lvl 1',
                    image: car1,
                    description: 'This car will help you attack more distant districts.',
                    bonus: ['Bonus to move: +1'],
                },
                {
                    id: 2,
                    name: 'Car lvl 2',
                    image: car2,
                    description: 'This car will help you attack more distant districts and strengthen your protection',
                    bonus: ['Bonus to move: +1', 'Bonus to protection : +3'],
                },
                {
                    id: 3,
                    name: 'Car lvl 3',
                    image: car3,
                    description: 'This car will help you attack more distant districts and strengthen your attack power',
                    bonus: ['Bonus to move: +1', 'Bonus to attack : +3'],
                },
                {
                    id: 4,
                    name: 'Car lvl 4',
                    image: car4,
                    description: 'This car will help you attack more distant districts, strengthen your attack power and strengthen your protection',
                    bonus: ['Bonus to move: +1', 'Bonus to attack : +3', 'Bonus to protection : +3'],
                },
            ]
        },
        {
            id: 3,
            button: 'Alibi',
            data: [
                {
                    id: 1,
                    name: 'Alibi',
                    image: null,
                    description: 'An alibi keeps you out of jail if the district you are in is raided by cops.',
                    bonus:[],
                },
            ]
        },
        {
            id: 4,
            button: 'Armor',
            data: [
                {
                    id: 1,
                    name: 'Bulletproof vest lvl 1',
                    image: armorBullet1,
                    description: 'Bulletproof vest increases the chance of surviving in combat while defending your area',
                    bonus: ['Bonus to protection : +3'],
                },
                {
                    id: 2,
                    name: 'Bulletproof vest lvl 2',
                    image: armorBullet2,
                    description: 'Bulletproof vest increases the chance of surviving in combat while defending your area',
                    bonus: ['Bonus to protection : +5'],
                },
                {
                    id: 3,
                    name: 'Bulletproof vest lvl 3',
                    image: armorBullet3,
                    description: 'Bulletproof vest increases the chance of surviving in combat while defending your area',
                    bonus: ['Bonus to protection : +7'],
                },
                {
                    id: 4,
                    name: 'Bulletproof vest lvl 4',
                    image: armorBullet4,
                    description: 'Bulletproof vest increases the chance of surviving in combat while defending your area',
                    bonus: ['Bonus to protection : +9'],
                },
            ]
        },
    ]
    const onChange = (currentSlide) => {
        setCurrentInfo(currentSlide===3 ? 0 : currentSlide+1)
    }
    return(
        <div className={styles.container} id={'boosts'}>
            <div className={styles.header}>Boosts</div>
            <div className={styles.block}>
                {boosts.map((el) => active === el.id ?
                <div className={styles.carousel}>
                    <Carousel 
                        dots={false} 
                        style={{width:'560px'}} 
                        arrows={true} 
                        prevArrow={<img src={leftArrow} alt="prev" className={styles.arrow}/>} 
                        nextArrow={<img src={rightArrow} alt="next" className={styles.arrow}/>}
                        beforeChange={onChange}
                    >
                        {el.data.map((info) => 
                        <div className={styles.infoBlock}>
                            <div>
                                <div className={styles.headerCarousel}>{info.name}</div>
                                <div className={styles.description}>{info.description}</div>
                                {info.bonus.map((boost) => <div className={styles.bonus}>{boost}</div>)}
                            </div>
                        </div>
                        )}
                    </Carousel>
                </div>
                 : null)}
                <Buttons setActive={setActive} active={active} image={boosts[active-1].data[currentInfo].image} setCurrentInfo={setCurrentInfo}/>
            </div>
        </div>
    )
}

export default Boosts;