import PropTypes from 'prop-types';

const CannonBall = (props) => {
    const ballStyle = {
        fill:'#777',
        stroke:'#444',
        strokeWidth: '2px',

    };
    return (
    <ellipse 
        style={ballStyle}
        cx={props.position.x}
        cy={props.position.y}
        rx="25"
        ry="25"
        />
    );
};

CannonBall.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default CannonBall;