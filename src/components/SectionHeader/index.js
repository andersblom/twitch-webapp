import React from 'react';
import PropTypes from 'prop-types';

import './sectionheader.css';
import { setStreamGridSize } from '../../actions/actionCreators';

const SectionHeader = ({ title, gridControls = false, streamGrid, setStreamGridSize }) => (
    <div className="sectionheader__container">
        <h1 className="pageTitle">{title}</h1>
        {gridControls ? 
            <div className="gridSizeIndicator"><i className="fa fa-th-large" aria-hidden="true"></i><input type="range" min="2" value={streamGrid} max="5" onChange={ e => setStreamGridSize(parseInt(e.target.value)) } /><i className="fa fa-th" aria-hidden="true"></i></div>
        : 
         ""}
    </div>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    gridControls: PropTypes.bool,
}

export default SectionHeader;