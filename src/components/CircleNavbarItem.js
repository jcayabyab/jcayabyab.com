import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  font-size: ${({ iconsize }) => iconsize / 1.77}px;
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
    ${({ to, currentpath }) => (to === currentpath ? "7px" : "4px")};
  color: ${props => props.bordercolor};
  background-color: ${props => props.backgroundcolor};
  border-radius: ${props => props.size / 2}px;
  border-style: solid;
  border-width: 0px;
  margin: 7px 20px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0px 7px ${props => props.bordercolor};
  }
`;

const Text = styled.div`
  font-size: 13pt;
`;

const CircleItem = props => {
  return (
    <Wrapper>
      <Location>
        {({ location }) => (
          <Circle
            {...props}
            currentpath={"/" + location.pathname.split("/")[1]}
          >
            <Icon icon={props.icon} iconsize={props.size} />
          </Circle>
        )}
      </Location>
      <Text>{props.name}</Text>
    </Wrapper>
  );
};

export default CircleItem;

CircleItem.propTypes = {
  to: PropTypes.string,
  size: PropTypes.number,
  backgroundcolor: PropTypes.string,
  bordercolor: PropTypes.string
};

CircleItem.defaultProps = {
  to: "/",
  size: 50,
  backgroundcolor: "#fff",
  bordercolor: "black"
};
