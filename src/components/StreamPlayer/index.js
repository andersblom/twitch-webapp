import React, { Component } from 'react';
import axios from 'axios';

export default class StreamPlayer extends Component {
    render() {
        return (
            <div>
                <div>I'm a single StreamPlayer</div>
                <button onClick={() => this.props.togglePlayingStatus()}>{this.props.isPlaying ? "pause" : "play" }</button>
            </div>
        );
    }
}