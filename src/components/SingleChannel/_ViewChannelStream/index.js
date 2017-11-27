import React, { Component } from 'react';

import ReactPlayer from 'react-player'

import Loading from '../../Loading';

export default class _ViewChannelStream extends Component {
    componentDidMount() {
        this.initStream();
    }
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
        
        if (channel !== undefined) {
            if (stream === null) {
                return (
                    <div>Channel offline</div>
                )
            } else {
                return(
                    <div>
                        <ReactPlayer 
                            url={`https://www.twitch.tv/${channel.name}`}
                            width="100%" 
                            height="80vh" 
                        />
                        <iframe frameborder="0" 
                            scrolling="no" 
                            id="chat_embed" 
                            src={`http://www.twitch.tv/${channel.name}/chat`}
                            height="500" 
                            width="350">
                        </iframe>
                    </div>
                )
            }
        } else {
            return (
                <Loading />
            )
        }
    }
}