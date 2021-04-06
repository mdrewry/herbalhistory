import React from "react";
import Svg, { Path, Line } from "react-native-svg";
export default function LineLogo() {
    return(
        <Svg 
            width="370" 
            height="3" 
            viewBox="0 0 370 3" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
        <Line 
            y1="1.5" 
            x2="370" 
            y2="1.5" 
            stroke="#F1B779" 
            stroke-width="3"
        />
        </Svg>

    );
}
