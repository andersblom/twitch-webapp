import React, { Component } from 'react';
import axios from 'axios';

import SingleChannelHeader from '../../components/SingleChannel/_SingleChannelHeader';
import SingleChannelFooter from '../../components/SingleChannel/_SingleChannelFooter';
import ViewChannelStreamOnline from '../../components/SingleChannel/_ViewChannelStreamOnline';
import ViewChannelStreamOffline from '../../components/SingleChannel/_ViewChannelStreamOffline';

export default class ChannelViewer extends Component {
    componentDidMount() {
        const channel = this.props.match.params.streamerName;
        this.getStreamByChannelName(channel);
    }
    
    // Gets initiated on componentMount. 
    // If channel is offline: runs getOfflineStreamByChannelName()
    getStreamByChannelName(channel) {
        axios.get(`https://api.twitch.tv/kraken/streams/${channel}/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
        .then(res => {
            // For offline channels, API returns stream: null
            if (res.data.stream === null) { 
                // Calls apropriate end-point for offline channels
                this.getOfflineStreamByChannelName(channel);
            
            // Channel is online
            } else { 
                const { stream } = res.data;
                /*
                ** Creating a data object:
                ** stream: Obj
                ** channel: Obj
                */
                const OnlineChannel = Object.assign({}, { stream: stream, channel: stream.channel });
                // { channel } is automatically nested within stream, so removing this
                // to ensure that objects of offline/online channels look the same 
                // (so the reducer can stay a pure function)
                delete OnlineChannel.stream.channel;
                
                // Finally, sending this object to the reducer
                this.props.setSelectedStream(OnlineChannel);
            }
        }).catch(err => {
            console.error(err)
        });
    }
    
    // Runs for offline channels
    getOfflineStreamByChannelName(channel) {
        axios.get(`https://api.twitch.tv/kraken/channels/${channel}/?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`)
        .then(res => {
            // Transforming object to match the style of an online channel
            const OfflineChannel = Object.assign({}, { stream: null, channel: res.data });
            // Sending object to reducer
            this.props.setSelectedStream(OfflineChannel);
        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        const { stream, channel } = this.props.selectedStream;
        return (
            <div>
            <SingleChannelHeader channel={channel} />
            { 
                // Checking for live or not, rendering appropriate component
                stream !== null 
                ? <ViewChannelStreamOnline channel={channel} />
                : <ViewChannelStreamOffline channel={channel} />
            }
            <SingleChannelFooter channel={channel} />
            </div>
        )
    }
}