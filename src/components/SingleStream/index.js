import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './singlestream.css';

const SingleStream = ({ stream }) => {
    return(
        <div className="singleStream__container">
            <div className="singlestream__backgroundImage" style={{ backgroundImage: `url(${stream.preview.large})` }}></div>
            <Link to={`/watch/${stream.channel.name}`}>{stream.channel.name} playing {stream.channel.game}</Link>
        </div>
    );
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleStream;