import React from 'react';
import PropTypes from 'prop-types';

const SingleStream = props => {
    const stream = props.stream;
    return(
        <div>{stream.channel.name} playing {stream.channel.game}</div>
    );
}

SingleStream.propTypes = {
    stream: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleStream;