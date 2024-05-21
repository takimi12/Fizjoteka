import * as React from "react";
const SVGComponent = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="arrow-right"
    className="svg-inline--fa fa-arrow-right "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width={20} 
    height={20}
    viewBox="0 0 448 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
    />
  </svg>
);
export default SVGComponent;