import React from "react";
import "./LoadingSpinner.scss"

const LoadingSpinner = (props) => {

    return (
        <div className="loading-spinner">
            <svg viewBox="0 0 100 100">
                <clipPath id="clip">
                    <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                </clipPath>
                <foreignObject x="0" y="0" width="100" height="100" clip-path="url(#clip)">
                    <div className="gradient" xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
            </svg>
        </div>
    )
}

export default LoadingSpinner;