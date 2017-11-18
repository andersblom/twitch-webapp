import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleGame = props => {
    const game = props.game.game;
    const { channels, viewers } = props;

    return(
        <div><Link to={`/game/${game.name}`}>{game.name}</Link></div>
    );
}

SingleGame.propTypes = {
    game: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleGame;