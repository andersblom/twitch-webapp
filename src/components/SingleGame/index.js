import React from 'react';
import PropTypes from 'prop-types';

const SingleGame = (props) => {
    const game = props.game.game;
    const { channels, viewers } = props;
    console.log(props.game);

    return(
        <div>{game.name}</div>
    );
}

SingleGame.propTypes = {
    game: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleGame;