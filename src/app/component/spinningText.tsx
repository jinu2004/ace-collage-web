import React from 'react';

const SpinningText = ({ text }: { text: string }) => {
    return (
        <svg
            className="spin animate-spinSlow  transform-gpu rotate-90 "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="100px"
            width="100px"
            viewBox="0 0 140 140"
        >
            <path
                id="myTextPath-3"
                d="M 64,0 A 64,64 0 0 1 -64,0 A 64,64 0 0 1 64,0"
                transform="translate(70,70)"
                fill="none"
                stroke="none"
                strokeWidth="0"
            ></path>
            <text
                dy="5"
                textLength="401"
                style={{ stroke: '#000000' }}
                fill="black"
                strokeWidth="0"
                fontSize="17"
                fontFamily="'Calibre', sans-serif"
            >
                <textPath xlinkHref="#myTextPath-3" textLength="401">
                    <tspan dy="5">
                        {text}&nbsp;
                        <tspan className="svg-icon"></tspan>&nbsp;{text}&nbsp;
                        <tspan className="svg-icon"></tspan>&nbsp;{text}e&nbsp;
                        <tspan className="svg-icon"></tspan>&nbsp;{text}&nbsp;
                        <tspan className="svg-icon"></tspan>&nbsp;
                    </tspan>
                </textPath>
            </text>
        </svg>
    );
};

export default SpinningText;