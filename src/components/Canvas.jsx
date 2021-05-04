import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import GunBase from './GunBase';
import GunPipe from './GunPipe';
import GunWheel from './GunWheel';


const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
    <svg
      id="simple-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox= {viewBox}
    >
        
        <Sky />
        <Ground />
        <GunPipe rotation={props.angle} />
        <GunBase />
        <GunWheel />

      
    </svg>
  );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,

};

export default Canvas;