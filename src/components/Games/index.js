import React, { Component } from 'react';
import axios from 'axios';

export default class Games extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/games/top?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      this.props.setGames(res.data.top)
    })
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        hi im games
      </div>
    );
  }
}

