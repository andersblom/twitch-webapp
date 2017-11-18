import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleStream = props => {
    const stream = props.stream;
    return(
        <div><Link to={`/watch/${stream.channel.display_name}`}>{stream.channel.name} playing {stream.channel.game}</Link></div>
    );
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleStream;