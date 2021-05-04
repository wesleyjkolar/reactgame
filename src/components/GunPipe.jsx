
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';



const GunPipe = (props) => {
    const gunPipeStyle = {
        fill: '#212222',
        stroke: '#000000',
        strokeWidth: '2px',
    };
    const transform = `rotate(${props.rotation}, 0, 0)`;

    const muzzleWidth = 40;
    const halfMuzzle = 20;
    const height = 100;
    const yBasis = 70;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfMuzzle,
            y:-yBasis,
        },
        initialControlPoint: {
            x: -40 + 20,
            y: height * 1.7,
        },
        endingControlPoint: {
            x: 80,
            y: height * 1.7,
        },
        endingAxis: {
            x: muzzleWidth + 30,
            y: 0,
        },
        
    };
    return (
        <g transform={transform}>
          <path
            style={gunPipeStyle}
            d={pathFromBezierCurve(cubicBezierCurve)}
          />
          <line
            x1={-halfMuzzle + 70}
            y1={-yBasis}
            x2={-halfMuzzle}
            y2={-yBasis}
            style={gunPipeStyle}
          />
        </g>
      );
    };
    
    GunPipe.propTypes = {
      rotation: PropTypes.number.isRequired,
    };
    
    export default GunPipe;