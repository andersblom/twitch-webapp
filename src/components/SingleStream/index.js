import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './singlestream.css';

const SingleStream = ({ stream }) => {
    return(
        <Link to={`/watch/${stream.channel.name}`} className="singleStream__container">
            <div className="singleStream__container--hover">
                Live for {getLiveTime(stream.created_at)}
            </div>
            <div className="singleStream__backgroundImage" style={{ backgroundImage: `url(${stream.preview.large})` }}></div>
            <div className="singleStream__info">
                <div className="singleStream__info__name">{stream.channel.name}</div>
                <div className="singleStream__info__game">playing {stream.channel.game}</div>
                <div className="singleStream__info__viewers">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <div className="text">{stream.viewers.toLocaleString()}</div>
                </div>
            </div>
        </Link>
    );
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

function getLiveTime(streamCreationDate) {
    let now = new Date(Date.now());
    let startedAt = new Date(streamCreationDate);
    let calculatedLiveTime = Math.floor(((now - startedAt) / 1000) / 60 / 60);
    return `${calculatedLiveTime} hours`;
}

export default SingleStream;