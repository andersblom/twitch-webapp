import React, { Component } from 'react';
import axios from 'axios';

import SingleStream from '../SingleStream';

export default class ListStreamsByGame extends Component {
    componentWillMount() {
        const gameName = this.props.match.params.gameName;
        console.log(this.props);
        axios.get(`https://api.twitch.tv/kraken/streams/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&game=${gameName}`)
        .then(res => {
          this.props.setStreams(res.data.streams)
        })
        .catch(err => console.error(err));
    }
    renderSingleGame(stream, i) {
        return <SingleStream stream={stream} i={i} key={i} />
    }
    
    render() {
        return (
          <div>
            <h1>Streamers playing {this.props.match.params.gameName}</h1>
            {this.props.streams.map(this.renderSingleGame)}
          </div>
        );
    }
}