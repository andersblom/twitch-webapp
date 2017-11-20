import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleGame = (props) => {
    const game = props.game.game;
    const { channels, viewers } = props.game;
    return(
        <Link to={`/game/${game.name}`}>
            <div><img src={game.box.large} alt={game.name} /></div>
            <div>{game.name}</div>
            <div>{channels} channels streaming for {viewers} viewers</div>
        </Link>
    );
}

SingleGame.propTypes = {
    game: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleGame;