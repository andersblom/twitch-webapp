import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import Loading from '../../Loading';

import './viewchannelstream.css';

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
        const { channel, stream, showChat } = this.props;
        
        if (stream === null) {
            return (
                <div className="channelPlayer__container">
                    <div className="channelPlayer__video">
                        {
                            channel.video_banner 
                            ? <img className="channelPlayer__offlineImg" src={channel.video_banner} alt={`${channel.name} is offline`} />
                            : <div className="channelPlayer__offline__nobanner">{channel.name} is offline :(</div> 
                        }
                    </div>
                    <div className={"channelPlayer__chat" + (showChat ? "" : " channelPlayer__chat--hidden")}>
                        <iframe frameborder="0" 
                            scrolling="no" 
                            id="chat_embed" 
                            src={`http://www.twitch.tv/${channel.name}/chat`}
                            height="100%" 
                            width="100%">
                        </iframe>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="channelPlayer__container">
                    <div className="channelPlayer__video">
                    <ReactPlayer 
                        url={`https://www.twitch.tv/${channel.name}`}
                        width="100%" 
                        height="100%" 
                        playing={false}
                    />
                    </div>
                    <div className={"channelPlayer__chat" + (showChat ? "" : " channelPlayer__chat--hidden")}>
                        <iframe frameborder="0" 
                            scrolling="no" 
                            id="chat_embed" 
                            src={`http://www.twitch.tv/${channel.name}/chat`}
                            height="100%" 
                            width="100%">
                        </iframe>
                    </div>
                </div>
            )
        }
    }
}