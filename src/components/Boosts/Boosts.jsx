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
                    name: 'Pistol',
                    image: weapon1,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 2,
                    name: 'Submachine Gun',
                    image: weapon2,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 3,
                    name: 'Usi',
                    image: weapon3,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 4,
                    name: 'Machine Gun',
                    image: weapon4,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
            ]
        },
        {
            id: 2,
            button: 'Cars',
            data: [
                {
                    id: 1,
                    name: 'Pistol',
                    image: car1,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 2,
                    name: 'Submachine Gun',
                    image: car2,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 3,
                    name: 'Usi',
                    image: car3,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 4,
                    name: 'Machine Gun',
                    image: car4,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
            ]
        },
        {
            id: 3,
            button: 'Alibi',
            data: [
                {
                    id: 1,
                    name: 'Pistol',
                    image: car1,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 2,
                    name: 'Submachine Gun',
                    image: car2,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 3,
                    name: 'Usi',
                    image: car3,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 4,
                    name: 'Machine Gun',
                    image: car4,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
            ]
        },
        {
            id: 4,
            button: 'Armor',
            data: [
                {
                    id: 1,
                    name: 'Pistol',
                    image: armorBullet1,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 2,
                    name: 'Submachine Gun',
                    image: armorBullet2,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 3,
                    name: 'Usi',
                    image: armorBullet3,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
                {
                    id: 4,
                    name: 'Machine Gun',
                    image: armorBullet4,
                    description: 'A reliable and powerful weapon that will help you win any fight, be sure to take it to increase your chances of winning!',
                },
            ]
        },
    ]
    const onChange = (currentSlide) => {
        setCurrentInfo(currentSlide===3 ? 0 : currentSlide+1)
    }
    return(
        <div className={styles.container}>
            <div className={styles.header}>Boosts</div>
            <div className={styles.block}>
                {boosts.map((el) => active === el.id ?
                <div className={styles.carousel}>
                    <Carousel 
                        dots={false} 
                        style={{width:'550px'}} 
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
                            </div>
                        </div>
                        )}
                    </Carousel>
                </div>
                 : null)}
                <Buttons setActive={setActive} active={active} image={boosts[active-1].data[currentInfo].image}/>
            </div>
        </div>
    )
}

export default Boosts;