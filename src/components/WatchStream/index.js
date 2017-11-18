import React from 'react';
import PropTypes from 'prop-types';

const WatchStream = props => {
    return(
        <div>I'm a single stream! {props.match.params.streamerName}</div>
    );
}

WatchStream.propTypes = {

}

export default WatchStream;