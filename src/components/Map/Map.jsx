import React, { useEffect, useRef, useState } from "react";
import masksvg from '../../static/mask.svg'
import mapsvg from '../../static/map.png'
import legend from '../../static/legend.png'
import styles from "./Map.module.css";

const Map = () => {
    const imageRef = useRef(null);
    const [coordinates, setCoordinates] = useState([100, 100])
    useEffect(() => {
        imageRef.current.addEventListener('mousemove', function(e){
            const element = imageRef.current.getBoundingClientRect();
            const x = e.pageX - window.pageXOffset-element.left+130;
            const y = e.pageY - element.top+70;
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
        <div className={styles.container} id={'map'}>
            
            <div className={styles.imagep} ref={imageRef}> 
                <img src={legend} alt="" className={styles.legend}/>
                <div className={styles.header}>Game Map</div>
                <div className={styles.text}>Discover, who rules in this city</div>
                <img src={mapsvg} alt="map" className={styles.mapTablet}/>
                <svg x="0px" y="0px" height="100%" width={'100%'} viewBox="0 0 1874 1076" className={styles.svgImage}>
                    <mask id="mask">
                        <rect width="100%" height="100%" x="0" y="0" fill="white" opacity="1"/>
                        <g transform={`translate(${coordinates[0]}, ${coordinates[1]})`}>
                            <circle cx="30" cy="30" r="140" />
                        </g>
                    </mask>
                    <image width="100%" height="100%" x="0" y="0" xlinkHref={masksvg} mask="url(#mask)" className={styles.imageMask} fill="white" opacity="1"></image>
                </svg>
            </div>
            {/* <div className={styles.mask}></div> */}
            {/* <img src={map} alt="map" className={styles.mapImage}/> */}
        </div>
    )
}

export default Map;