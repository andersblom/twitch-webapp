import React, { Component } from 'react';
import axios from 'axios';

import SingleStream from '../SingleStream';
export default class FeaturedStreams extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/streams/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      const { streams } = res.data;
      this.props.setStreams(streams)
    })
    .catch(err => console.error(err));
  }

  renderSingleGame(stream, i) {
    return <SingleStream stream={stream} i={i} key={i} />
  }

  render() {
    return (
      <div>
        {this.props.streams.map(this.renderSingleGame)}
      </div>
    );
  }
}

