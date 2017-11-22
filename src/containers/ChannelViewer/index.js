import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading';

// https://api.twitch.tv/kraken/streams/${channel}/?client_id=8idy5f7ryf7c84459was7n8bpcjqzc

export default class ChannelViewer extends Component {
    componentDidMount() {
        const channel = this.props.match.params.streamerName;
        this.getStreamByChannelName(channel);
    }

    getStreamByChannelName(channel) {
        axios.get(`https://api.twitch.tv/kraken/streams/${channel}/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
        .then(res => {
            if (res.data.stream === null) {
                this.getOfflineStreamByChannelName(channel);
            } else {
                const { stream } = res.data;
                const OnlineChannel = Object.assign({}, { stream: stream, channel: stream.channel });
                delete OnlineChannel.stream.channel;
                this.props.setSelectedStream(OnlineChannel);
            }
        }).catch(err => {
            console.error(err)
        });
    }
    
    getOfflineStreamByChannelName(channel) {
        axios.get(`https://api.twitch.tv/kraken/channels/${channel}/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
        .then(res => {
            // Transforming object to match the style of an online channel
            const OfflineChannel = Object.assign({}, { stream: null, channel: res.data });
            this.props.setSelectedStream(OfflineChannel);
        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (<div>hi</div>)
    }
}