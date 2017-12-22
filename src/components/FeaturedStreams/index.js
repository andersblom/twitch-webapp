import React, { Component } from 'react';
import axios from 'axios';

import StreamsGridWithControls from '../../components/StreamsGridWithControls';
import Loading from '../../components/Loading';

export default class FeaturedStreams extends Component {
  componentWillMount() {
    axios.get(`https://api.twitch.tv/kraken/streams/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
    .then(res => {
      const { streams } = res.data;
      this.props.setStreams(streams)
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      this.props.streams.length === 0 ? 
        <Loading /> 
        : 
        <StreamsGridWithControls title={`Featured Streams`} {...this.props} />
    );
  }
}

