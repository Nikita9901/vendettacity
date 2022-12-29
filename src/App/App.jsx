import React from 'react';
import { HomePage, Story, Cartel, Map, Characters, Boosts} from '../components';
import {VendettaCity} from '../components/VendettaCity'
import styles from './App.module.css';

// const throttle = (func, limit) => {
//   let lastFunc
//   let lastRan
//   return function() {
//     const context = this
//     const args = arguments
//     if (!lastRan) {
//       func.apply(context, args)
//       lastRan = Date.now()
//     } else {
//       clearTimeout(lastFunc)
//       lastFunc = setTimeout(function() {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(context, args)
//           lastRan = Date.now()
//         }
//       }, limit - (Date.now() - lastRan))
//     }
//   }
// }

function App() {
  let pixels = 0;
  window.addEventListener('wheel', function(event) {
    if (pixels < 0) pixels = 0
    else if (pixels > document.documentElement.scrollWidth-window.outerWidth+100) 
      pixels = document.documentElement.scrollWidth-window.outerWidth+100
    else pixels = pixels + event.deltaY;
    window.scrollTo(pixels, 0)
  });
  return (
    <div>
      <div className={styles.wrapper} style={{scrollBehavior: 'smooth'}}>
        <HomePage/>
        {/* <div className={styles.animateBlock}>
          <VendettaCity/>
        </div> */}
        <Story/>
        <Cartel/>
        <Map/>
        <Characters/>
        <Boosts/>
      </div>
    </div>
    
  );
}

export default App;
