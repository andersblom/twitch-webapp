import React from 'react';

const _ViewChannelStream = ({channel, stream}) => {
    console.log(channel, stream); 
    if (stream === null) {
        return (
            <div>Channel offline</div>
        )
    } else {
        return(
            <div>Channel is online!</div>
        )
    }
};

export default _ViewChannelStream;