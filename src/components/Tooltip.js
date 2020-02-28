import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: absolute;
  left: ${({ttCoords}) => ttCoords.x}px;
  top: ${({ttCoords}) => ttCoords.y}px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
  ${({isOpen}) => !isOpen && "height: 0px; width: 0px;"}
  transition: height 1s linear;

  /* make top */
  margin-top: -5px;
`;

const TooltipArrow = styled.div`
  top: auto;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;

  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-color: #000;
`;

const TooltipLabel = styled.div`
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
`;

const Tooltip = props => {
  const [isOpen, setIsOpen] = useState(false);
  // messy :(
  const [tooltipCoords, setTooltipCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // reposition relative to button
    if (buttonRef === null) return;

    const buttonDimensions = buttonRef.current.getBoundingClientRect();
    const tooltipDimensions = tooltipWrapperRef.current.getBoundingClientRect();

    const leftx = buttonDimensions.x; // most left x of button
    const topy = buttonDimensions.y; // most top y of button

    // move x and y of tooltip
    // center x
    const x = leftx + (buttonDimensions.width - tooltipDimensions.width) / 2;
    const y = topy - tooltipDimensions.height;

    setTooltipCoords({x, y});
  }, [isOpen])

  // setup refs for checking click out
  const tooltipWrapperRef = useRef(null);
  const buttonRef = useRef(null);

  // setup events

  // button down to be consistent with click outside
  const handleButtonDown = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    document.addEventListener("mousedown", handleClickOutside);
  };

  const handleClickOutside = event => {
    // must click outside both button and tooltip
    // button presses are handled by handleButtonDown() for toggle
    const clickedOutside =
      tooltipWrapperRef.current &&
      !tooltipWrapperRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target);

    if (clickedOutside) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  return (
    <div>
      <button ref={buttonRef} onMouseDown={handleButtonDown}>
        Click me
      </button>
      <TooltipWrapper
        ref={tooltipWrapperRef}
        ttCoords={tooltipCoords}
        isOpen={isOpen}
      >
        <TooltipArrow></TooltipArrow>
        <TooltipLabel>ToolTip Component</TooltipLabel>
      </TooltipWrapper>
    </div>
  );
};

export default Tooltip;
