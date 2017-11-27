import React from 'react';

import RenderSvg from '../../RenderSvg';

const SingleChannelHeader = ({ channel, showChat, toggleChat }) => {
    return (
        <div>
            <div>{channel.name}</div>
            <button onClick={() => toggleChat()}>
                {showChat 
                    ? "Hide chat"
                    : "Show chat"
                }
            </button>
        </div>
    )
};

export default SingleChannelHeader;