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

    toggleHoverOut() {
        this.setState({
            hover: false
        });
    }

    toggleHoverIn() {
        this.setState({
            hover: true
        });
    }

    render() {
        const { stream } = this.props;
        return(
            <Link to={`/watch/${stream.channel.name}`} className={"singleStream__entry" + (this.state.hover ? " singleStream__entry--hover" : "")} onMouseEnter={() => this.toggleHoverIn()} onMouseLeave={() => this.toggleHoverOut()}>
                <div className="singleStream__entry__background" style={{ backgroundImage: `url(${stream.preview.large})`}}></div>
                <div className="singleStream__entry__overlay"></div>
                <div className="singleStream__entry__info">
                    <div className="singleStream__entry__info__name">{stream.channel.name}</div>
                    <div className="singleStream__entry__info__hoverInfo">
                        <div className="singleStream__entry__info__game"><i className="fa fa-gamepad" aria-hidden="true"></i>{stream.channel.game}</div>
                        <div className="singleStream__entry__info__viewers"><i className="fa fa-television" aria-hidden="true"></i>{stream.viewers.toLocaleString()}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
}