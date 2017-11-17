import React, { Component } from 'react';
import axios from 'axios';

export default class Welcome extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/streams/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      const { streams } = res.data;
      this.props.setDataSource(streams)
    })
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        hi im app
      </div>
    );
  }
}

