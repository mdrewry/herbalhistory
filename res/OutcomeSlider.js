import React from "react";
import Svg, { Circle } from "react-native-svg";
export default function OutcomeSlider() {
  return (
    <Svg 
        width="30" 
        height="30" 
        viewBox="0 0 30 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
    <Circle 
        cx="15" 
        cy="15" 
        r="13.5" 
        fill="#F1B779" 
        stroke="#183A1D" 
        stroke-width="3"
    />
    </Svg>

  );
}
