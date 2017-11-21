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
            <Link to={`/watch/${stream.channel.name}`} className={"singleStream__entry" + (this.state.hover ? " singleStream__container--hover" : "")} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                <div className="singleStream__entry__background" style={{ backgroundImage: `url(${stream.preview.large})`}}></div>
                <div className="singleStream__entry__overlay"></div>
                <div className="singleStream__entry__info">
                    <div className="singleStream__entry__info__name">{stream.channel.name}</div>
                </div>
            </Link>
        );
    }
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
}