import React, { useEffect, useRef, useState } from "react";
import {HandySvg} from 'handy-svg';
import maskpng from '../../static/mask.png'
import masksvg from '../../static/mask.svg'
import mappng from '../../static/map.png'
import mapsvg from '../../static/Map.svg'
import styles from "./Map.module.css";

const Map = () => {
    const imageRef = useRef(null);
    const parentRef = useRef(null);
    const [coordinates, setCoordinates] = useState([100, 100])
    useEffect(() => {
        imageRef.current.addEventListener('mousemove', function(e){
            const element = imageRef.current.getBoundingClientRect();
            const x = e.pageX - window.pageXOffset-element.left-25;
            const y = e.pageY - element.top-25;
            setCoordinates([x, y])
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
            <image width="100%" height="100%" x="0" y="0" xlinkHref={mapsvg} fill="white" opacity="1"></image>
                <svg x="0px" y="0px" height="1076" viewBox="0 0 1874 1076">
                    <mask id="mask">
                        <rect width="100%" height="100%" x="0" y="0" fill="white" opacity="1"/>
                        <g transform={`translate(${coordinates[0]}, ${coordinates[1]})`}>
                            <circle cx="30" cy="30" r="140" />
                        </g>
                    </mask>
                    <rect x="0" y="0" className={styles.one} mask="url(#mask)" width="1874" height="1076"  />
                    <image width="100%" height="100%" x="0" y="0" xlinkHref={masksvg} mask="url(#mask)" className={styles.imagehui} fill="white" opacity="1"></image>
                </svg>
            </div>
            {/* <div className={styles.mask}></div> */}
            {/* <img src={map} alt="map" className={styles.mapImage}/> */}
        </div>
    )
}

export default Map;