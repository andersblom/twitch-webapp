import React, { Component } from 'react';
import axios from 'axios';

import SingleGame from '../SingleGame';

export default class Games extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/games/top?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      this.props.setGames(res.data.top)
    })
    .catch(err => console.error(err));
  }

  renderSingleGame(game, i) {
    return <SingleGame game={game} i={i} key={i} />
  }

  render() {
    return (
      <div style={{ backgroundColor: "#dedede" }}>
        {this.props.games.map(this.renderSingleGame)}
      </div>
    );
  }
}

