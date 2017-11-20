import React, { Component } from 'react';
import axios from 'axios';

import SectionHeader from '../SectionHeader';
import SingleGame from '../SingleGame';

import './games.css';

export default class Games extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/games/top?limit=100&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
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
      <div className="games__container">
      <SectionHeader title={`Browse games`} />
        <div className="games__grid">
          {this.props.games.map(this.renderSingleGame)}
        </div>
      </div>
    );
  }
}

