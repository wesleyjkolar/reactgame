import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import GunBase from './GunBase';
import GunPipe from './GunPipe';
import GunWheel from './GunWheel';
import CannonBall from './CannonBall';
import Score from './Score';
import Stars from './Stars';
import Saucer from './Saucer';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
    <svg
      id="simple-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox= {viewBox}
    >
    <defs>
        <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
    </defs>
        <Sky />
        <Stars />
        <Ground />
        <GunPipe rotation={props.angle} />
        <GunBase />
        <GunWheel />
        <CannonBall position={{x: 0, y: -100}} />
        <Saucer position={{x: -150, y: -300}} />
       
        <Score score={1500} />
        

      
    </svg>
  );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,

};

export default Canvas;