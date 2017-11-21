import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader';
import SingleStream from '../SingleStream';

import './streamsgridwithcontrols.css';

export default class StreamsGridWithControls extends Component {
    componentDidUpdate() {
        this.updateStreamGridView();
    }

    updateStreamGridView() {
        const streamGridNum = this.props.streamGrid;
    
            if (streamGridNum === 2) {
                document.documentElement.style.setProperty(`--gridSize`, '560px');
                document.documentElement.style.setProperty(`--gridItemHeight`, '315px');
            } 
    
            if (streamGridNum === 3) {
                document.documentElement.style.setProperty(`--gridSize`, '360px');
                document.documentElement.style.setProperty(`--gridItemHeight`, '203px');
            } 
    
            if (streamGridNum === 4) {
                document.documentElement.style.setProperty(`--gridSize`, '265px');
                document.documentElement.style.setProperty(`--gridItemHeight`, '149px');
            } 
    
            if (streamGridNum === 5) {
                document.documentElement.style.setProperty(`--gridSize`, '206px');
                document.documentElement.style.setProperty(`--gridItemHeight`, '155px');
            } 
    }

    renderSingleGame(stream, i) {
        return <SingleStream stream={stream} i={i} key={i} />
    }

    render() {
        const props = this.props;
        return(
            <div className="streamsByGame__container">
                <SectionHeader title={props.title} gridControls={true} {...props} />
                <div className="streamsByGame__grid">
                    {props.streams.map(this.renderSingleGame)}
                </div>
            </div>
        )
    }
}

StreamsGridWithControls.propTypes = {
    streams: PropTypes.array.isRequired,
    streamGrid: PropTypes.number.isRequired,
    setStreamGridSize: PropTypes.func.isRequired,
}