import React from 'react';
import PropTypes from 'prop-types';

import './sectionheader.css';
import { setStreamGridSize } from '../../actions/actionCreators';

const SectionHeader = ({ title, gridControls = false, streamGrid, setStreamGridSize }) => (
    <div className="sectionheader__container">
        <h1 className="pageTitle">{title}</h1>
        {gridControls ? 
            <div className="xx"><input type="range" min="2" value={streamGrid} max="5" onChange={(e) => setStreamGridSize(e.target.value)} /></div>
        : 
         ""}
    </div>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    gridControls: PropTypes.bool,
}

export default SectionHeader;