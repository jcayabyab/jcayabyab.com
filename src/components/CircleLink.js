import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ size }) => size / 1.6}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12pt;
`;

const Circle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  box-shadow: 0px 0px 0px 3px;
  color: ${props => props.borderColor};
  background: none;
  border-radius: ${props => props.size / 2}px;
  border-style: solid;
  border-width: 0px;
  margin: 0px 15px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0px 6px ${props => props.borderColor};
  }
`;

const CircleLink = props => {
  return (
    <Wrapper>
      <Circle {...props} target="_blank">
        <Icon icon={props.icon} size={props.size} />
        {props.children}
      </Circle>
      {props.name}
    </Wrapper>
  );
};

export default CircleLink;

CircleLink.propTypes = {
  to: PropTypes.string,
  size: PropTypes.number,
  borderColor: PropTypes.string
};

CircleLink.defaultProps = {
  to: "/",
  size: 50,
  borderColor: "white"
};
