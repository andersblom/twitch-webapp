import React from 'react';
import SanitizeHtml from 'sanitize-html';
import PropTypes from 'prop-types';
import feather from 'feather-icons';

const RenderSvg = (props) => {
    const icon = feather.icons[props.iconName];
    console.log(icon);
    // Don't put this HTML into the dom.
    const dirtyHtml = icon.contents;
    // Sanitizing the SVG before use.
    const cleanHtml = SanitizeHtml(dirtyHtml, {
        // Only allowing for SVG tags
        allowedTags: [ 'circle', 'ellipse', 'image', 'line', 'mesh', 'path', 'polygon', 'polyline', 'rect', 'text', 'use' ],
        // Allowing all attributes on these tags
        allowedAttributes: false
    });
    return (
        // setting the SVG's innerhtml
        <svg 
        className={`svgIcon svgIcon__${icon.name}`}
        fill={props.fill}
        height={props.height}
        width={props.width}
        stroke={props.stroke}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
        strokeWidth={props.strokeWidth}
        viewBox={"0 0 "+ props.width + " " + props.height}
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}></svg>
    )
}

RenderSvg.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    stroke: PropTypes.string,
    strokeLinecap: PropTypes.string,
    strokeLinejoin: PropTypes.string,
    strokeWidth: PropTypes.number,
    viewBox: PropTypes.string,
}

RenderSvg.defaultProps = {
    fill: "none",
    height: 24,
    width: 24,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
}

export default RenderSvg;