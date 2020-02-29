import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TooltipWrapper = styled.div`
  position: absolute;
  left: ${({ ttCoords }) => ttCoords.x}px;
  top: ${({ ttCoords }) => ttCoords.y}px;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1.0" : "0")};
  transition: opacity 0.25s linear;

  /* make top */
  margin-top: -5px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #6d72c3;
  cursor: pointer;
  margin: 0px 3px;
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
  border-top-color: #6d72c3;
`;

const TooltipLabel = styled.div`
  padding: 0.5em;
  color: #fff;
  max-width: 18em;
  text-align: center;
  background-color: #6d72c3;
  word-break: normal;
  border-radius: 4px;

  /* smaller font */
  font-size: 11pt;
`;

const Tooltip = props => {
  const [isOpen, setIsOpen] = useState(false);
  // messy :(
  const [tooltipCoords, setTooltipCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // reposition relative to button
    if (buttonRef.current === null) return;

    const buttonDimensions = buttonRef.current.getBoundingClientRect();
    const tooltipDimensions = tooltipWrapperRef.current.getBoundingClientRect();

    const leftx = buttonDimensions.x + window.pageXOffset; // most left x of button
    const topy = buttonDimensions.y + window.pageYOffset; // most top y of button

    // move x and y of tooltip
    // center x
    let x = leftx + (buttonDimensions.width - tooltipDimensions.width) / 2;
    let y = topy - tooltipDimensions.height;

    // reposition if cut off by screen
    const screenWidth = document.documentElement.clientWidth;

    // left
    if (x < 0) {
      x = 0;
    } else if (x + tooltipDimensions.width > screenWidth) {
      x = screenWidth - tooltipDimensions.width;
    }
    // right
    if (y < 0) {
      y = 0;
    }

    setTooltipCoords({ x, y });
  }, [isOpen]);

  // setup refs for checking click out
  const tooltipWrapperRef = useRef(null);
  const buttonRef = useRef(null);

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
    <React.Fragment>
      <span ref={buttonRef}>
        <Icon icon={"info-circle"} onMouseDown={handleButtonDown}>
          Click me
        </Icon>
      </span>

      <TooltipWrapper
        ref={tooltipWrapperRef}
        ttCoords={tooltipCoords}
        isOpen={isOpen}
      >
        <TooltipArrow></TooltipArrow>
        <TooltipLabel>
          <Scrollbars autoHeight autoHeightMax={200}>
            {props.children}
          </Scrollbars>
        </TooltipLabel>
      </TooltipWrapper>
    </React.Fragment>
  );
};

export default Tooltip;
