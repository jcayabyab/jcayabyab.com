import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  font-size: 21pt;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  box-shadow: 0px 0px 0px
    ${({ to, currentPath }) => (to === currentPath ? "7px" : "4px")};
  color: ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.size / 2}px;
  border-style: solid;
  border-width: 0px;
  margin: 7px 20px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0px 7px ${props => props.borderColor};
  }
`;

const CircleItem = props => {
  return (
    <Wrapper>
      <Location>
        {({ location }) => (
          <Circle
            {...props}
            currentPath={"/" + location.pathname.split("/")[1]}
          >
            <Icon icon={props.icon} />
          </Circle>
        )}
      </Location>
      {props.name}
    </Wrapper>
  );
};

export default CircleItem;

CircleItem.propTypes = {
  to: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string
};

CircleItem.defaultProps = {
  to: "/",
  size: 50,
  backgroundColor: "#fff",
  borderColor: "black"
};
