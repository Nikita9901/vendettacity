import React, { useEffect, useRef, useState } from "react";
import classnames from 'classnames';
import map from "../../static/map.png";
import styles from "./Map.module.css";

const Map = () => {
    const imageRef = useRef(null);
    const parentRef = useRef(null);
    let mas = [0, 0]
    const [coordinates, setCoordinates] = useState([0, 0])
    useEffect(() => {
        imageRef.current.addEventListener('mousemove', async function(e){
            const parent = parentRef.current.getBoundingClientRect();
            const element = imageRef.current.getBoundingClientRect();
            const x = e.pageX - window.pageXOffset-element.left-25;
            const y = e.pageY - element.top-25;
            if (Math.abs(mas[0]-x)>50 || Math.abs(mas[1]-y)>50){
                await setCoordinates([x, y])
                mas = [x, y]
                console.log(window.pageXOffset+element.left, e.pageX)
            }
            // mas = [x,y]
        })
    })
    // $(".image").mousemove(function(e) {
    //     var parentOffset = $(this).parent().offset();
    //     var posX = (e.pageX - parentOffset.left) - 30;
    //     var posY = (e.pageY - parentOffset.top) - 30;
      
    //     $('mask g').attr('transform', 'translate(' + posX + ',' + posY + ')');
    //   });
    return(
        <div className={styles.container} ref={parentRef}>
            <div className={styles.header}>Game Map</div>
            <div className={styles.imagep} ref={imageRef}>
                <svg x="0px" y="0px" width="600px" height="300px" viewBox="0 0 600 300">
                    <mask id="mask">
                        <rect width="100%" height="100%" x="0" y="0" fill="white" opacity="0.8" />
                        <g transform={`translate(${coordinates[0]}, ${coordinates[1]})`}>
                            <circle cx="30" cy="30" r="40" />
                        </g>
                    </mask>
                    <rect x="0" y="0" className={styles.one} mask="url(#mask)" width="600" height="300"  />
                </svg>
            </div>
            {/* <div className={styles.mask}></div> */}
            {/* <img src={map} alt="map" className={styles.mapImage}/> */}
        </div>
    )
}

export default Map;