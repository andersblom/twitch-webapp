import React from 'react';

import RenderSvg from '../../RenderSvg';

import './singlechannelheader.css';

const SingleChannelHeader = ({ channel, showChat, toggleChat }) => {
    return (
        <div className="singleChannelHeader__container">
            <h1 className="singleChannelHeader__title">{channel.name}</h1>
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