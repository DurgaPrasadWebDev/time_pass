import React from 'react';

const IconBase = ({width, height, children,style, ...props}) => (
    <svg
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height={height}
        width={width}
        {...props}
        style={style}
    >
        {children}
    </svg>
);

export default IconBase;