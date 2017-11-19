import React, { Component } from 'react';
import axios from 'axios';

export default class StreamPlayer extends Component {
    componentWillMount() {
        axios.get(`https://api.twitch.tv/kraken/streams/${this.props.match.params.streamerName}/?client_id=8idy5f7ryf7c84459was7n8bpcjqzc`)
        .then(res => {
            this.props.setSelectedStream(res.data.stream)
        })
        .catch(err => console.error(err));
    }
    render() {
        const { channel } = this.props.selectedStream
        if (channel) {
            return (
                <div>
                    <div>Viewing stream: {channel.display_name}</div>
                    <button onClick={() => this.props.togglePlayingStatus()}>{this.props.isPlaying ? "pause" : "play" }</button>
                </div>
            );
        } else {
            return <div>loading..</div>
        }
    }
}