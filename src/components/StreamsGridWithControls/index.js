import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader';
import SingleStream from '../SingleStream';

import './streamsgridwithcontrols.css';

export default class StreamsGridWithControls extends Component {
    determineGridSize() {
        return this.props.streamGrid;
    }

    renderSingleGame(stream, i) {
        return <SingleStream stream={stream} i={i} key={i} />
    }

    render() {
        const props = this.props;
        return(
            <div className="streamsByGame__container">
                <SectionHeader title={props.title} gridControls={true} {...props} />
                <div className={`streamsByGame__grid grid-${this.determineGridSize()}`}>
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