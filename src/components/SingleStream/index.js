// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';

import RenderSvg from '../RenderSvg';

import './singlestream.css';

const getLiveTime = (streamCreationDate) => {
    let now = new Date(Date.now());
    let startedAt = new Date(streamCreationDate);
    let calculatedLiveTime = Math.floor(((now - startedAt) / 1000) / 60 / 60);
    return (calculatedLiveTime > 1) ? `${calculatedLiveTime} hours` : `${calculatedLiveTime} hour`; 
}

const SingleStream = (
    { 
        stream, 
        isHovered, 
        onHoverIn: hoverIn, 
        onHoverOut: hoverOut, 
    }:{
        stream: {
            channel: Object,
            _id: String,
            preview: Object,
            viewers: String
        },
        isHovered: Boolean,
        onHoverIn: Function,
        onHoverOut: Function,
    }
) => (
    <Link to={`/watch/${stream.channel.name}`} className={"singleStream__entry" + (isHovered ? " singleStream__entry--hover" : "")} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        <div className="singleStream__entry__background" style={{ backgroundImage: `url(${stream.preview.large})`}}></div>
        <div className="singleStream__entry__overlay"></div>
        <div className="singleStream__entry__info">
            <div className="singleStream__entry__info__name">{stream.channel.name}</div>
            <div className="singleStream__entry__info__hoverInfo">
                <div className="singleStream__entry__info__game"><RenderSvg iconName="video" />{stream.channel.game}</div>
                <div className="singleStream__entry__info__viewers"><RenderSvg iconName="tv" />{stream.viewers.toLocaleString()}</div>
            </div>
        </div>
    </Link>
);

export default compose(
    withState('isHovered', 'setHover', false),
    withHandlers({
        onHoverIn: ({ setHover }) => () => setHover(true),
        onHoverOut: ({ setHover }) => () => setHover(false),
    }),
)(SingleStream);