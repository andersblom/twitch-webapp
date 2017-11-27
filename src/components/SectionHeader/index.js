import React from 'react';
import PropTypes from 'prop-types';
import RenderSvg from '../RenderSvg';

import './sectionheader.css';

const SectionHeader = ({ title, gridControls = false, streamGrid, setStreamGridSize }) => (
    <div className="sectionheader__container">
        <h1 className="pageTitle">{title}</h1>
        {gridControls ? 
            <div className="gridSizeIndicator"><RenderSvg iconName="maximize" /><input type="range" min="2" value={streamGrid} max="5" onChange={ e => setStreamGridSize(parseInt(e.target.value)) } /><RenderSvg iconName="minimize" /></div>
        : 
         ""}
    </div>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    gridControls: PropTypes.bool,
}

export default SectionHeader;