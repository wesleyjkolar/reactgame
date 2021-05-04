
import { pathFromBezierCurve } from '../utils/formulas';

const GunBase = (props) => {
    const gunBaseStyle = {
        fill: '#000000',
        stroke: '#000000',
        strokeWidth: '2px',
    };

    const baseWidth = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },
        initialControlPoint: {
            x: 20,
            y: negativeHeight,
        },
        endingControlPoint: {
            x: 60,
            y: negativeHeight,
        },
        endingAxis: {
            x: baseWidth - 50,
            y: 0,
        },
    };

    return (
        <g>
            <path
            style={gunBaseStyle}
            d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
            x1={-halfBase}
            y1={height}
            x2={halfBase}
            y2={height}
            style={gunBaseStyle}
            />
        </g>
    );
};

export default GunBase;