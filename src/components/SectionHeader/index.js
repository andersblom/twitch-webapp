import React from 'react';

import './sectionheader.css';

const SectionHeader = props => (
    <div>
        <h1 className="pageTitle">{props.title}</h1>
    </div>
)

export default SectionHeader;