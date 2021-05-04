import PropTypes from 'prop-types';

const Saucer = (props) => {
    const style = {
        fill: '#5AC781',
        stroke: '#5c5c5c',
    };

    return (
        <ellipse
        cx={props.position.x}
        cy={props.position.y}
        rx="40"
        ry="20"
        style={style}
        />
    );
};

Saucer.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired

    }).isRequired,
};

export default Saucer