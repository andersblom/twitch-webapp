import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedStream, togglePlayingStatus, toggleChat, clearSelectedStream } from '../actions/actionCreators';
import axios from 'axios';

import SingleChannelHeader from '../components/SingleChannel/_SingleChannelHeader';
import SingleChannelFooter from '../components/SingleChannel/_SingleChannelFooter';
import ViewChannelStream from '../components/SingleChannel/_ViewChannelStream';

import Loading from '../components/Loading';

class ChannelViewer extends Component {
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

    componentWillUnmount() {
        this.props.clearSelectedStream();
    }

    render() {
        const { stream, channel, showChat } = this.props.selectedStream;
        if (channel) {
            return (
                <React.Fragment>
                    <SingleChannelHeader showChat={this.props.selectedStream.showChat} toggleChat={this.props.toggleChat} channel={channel} />
                    <ViewChannelStream refreshStream={this.getStreamByChannelName.bind(this)} channel={channel} stream={stream} showChat={showChat} {...this.props} />
                    <SingleChannelFooter channel={channel} />
                </React.Fragment>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        selectedStream: state.selectedStream,
        isPlaying: state.isPlaying
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setSelectedStream, togglePlayingStatus, toggleChat, clearSelectedStream}, dispatch);
}

const WatchStream = connect(mapStateToProps, mapDispatchToProps)(ChannelViewer);

export default WatchStream;