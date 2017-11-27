import React, { Component } from 'react';

import ReactPlayer from 'react-player'

export default class _ViewChannelStream extends Component {
    componentWillReceiveProps() {
        this.initStream();
    }
    initStream() {
        console.log(this.props);
        if (this.props.channel === undefined) {
            this.props.refreshStream(this.props.match.params.streamerName);
        }
    }
    render() {
        // console.log(channel, stream); 
        const { channel, stream } = this.props;
        if (stream === null) {
            return (
                <div>Channel offline</div>
            )
        } else {
            return(
                <div>
                    <ReactPlayer 
                        url={`https://www.twitch.tv/imaqtpie`}
                        width="100%" 
                        height="80vh" 
                    />
                </div>
            )
        }
    }
}