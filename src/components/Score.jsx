import PropTypes from 'prop-types';

const Score = (props) =>{
    const scoreStyle = {
        fontFamily: "Press Start 2P",
        fontSize: 20,
        fill: '#999',
    };

    return (
        <g filter="url(#shadow)">
            <text style={scoreStyle} x="190" y="-580">
                Current Score:{props.score}
            </text>
        </g>
    );
};

Score.propsTypes = {
    score: PropTypes.number.isRequired,
};

export default Score;