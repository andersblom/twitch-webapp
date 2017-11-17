import React from 'react';
import PropTypes from 'prop-types';

const SingleStream = props => {
    const stream = props.stream;
    console.log(props)
    return(
        <div>{stream.channel.name} playing {stream.channel.game}</div>
    );
}

SingleStream.propTypes = {
    game: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

export default SingleStream;