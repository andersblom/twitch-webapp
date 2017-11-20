import React from 'react';
import PropTypes from 'prop-types';

import './sectionheader.css';

const SectionHeader = ({ title, gridControls = false }) => (
    <div className="sectionheader__container">
        <h1 className="pageTitle">{title}</h1>
        {gridControls ? 
            <div className="xx"><input type="range" min="2" max="5" onChange={(e) => setNewGridNumber(e)} /></div>
        : 
         ""}
    </div>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    gridControls: PropTypes.bool,
}

function setNewGridNumber(e) {
    // Send this off to Redux
    const value = e.target.value;
    console.log(value);
}

export default SectionHeader;