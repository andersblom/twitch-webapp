import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './singlestream.css';

export default class SingleStream extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        }
    }

    getLiveTime(streamCreationDate) {
        let now = new Date(Date.now());
        let startedAt = new Date(streamCreationDate);
        let calculatedLiveTime = Math.floor(((now - startedAt) / 1000) / 60 / 60);
        return (calculatedLiveTime > 1) ? `${calculatedLiveTime} hours` : `${calculatedLiveTime} hour`; 
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        const { stream } = this.props;
        return(
            <Link to={`/watch/${stream.channel.name}`} className={"singleStream__container" + (this.state.hover ? " singleStream__container--hover" : "")} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                sss
            </Link>
        );
    }
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
}