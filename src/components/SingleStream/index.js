import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './singlestream.css';

const SingleStream = ({ stream }) => {
    return(
        <Link to={`/watch/${stream.channel.name}`} className="singleStream__container">
            <div className="singleStream__container--hover">
                hover action yay
            </div>
            <div className="singleStream__backgroundImage" style={{ backgroundImage: `url(${stream.preview.large})` }}></div>
            <div className="singleStream__info">
                <div className="singleStream__info__name">{stream.channel.name}</div>
                <div className="singleStream__info__game">playing {stream.channel.game}</div>
            </div>
        </Link>
    );
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleStream;