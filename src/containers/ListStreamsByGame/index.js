import React, { Component } from 'react';
import axios from 'axios';

import SingleStream from '../../components/SingleStream';

import StreamsGridWithControls from '../../components/StreamsGridWithControls';

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

    render() {
        return (
            <StreamsGridWithControls title={`Streamers playing ${this.props.match.params.gameName}`} {...this.props} />
        );
    }
}