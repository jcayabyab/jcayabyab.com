import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

const Header = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${({ activecolor, color, isopen }) =>
    isopen ? activecolor : color};
  align-items: center;
  padding: 15px 15px;
  color: white;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${props => props.activecolor};
  }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0px 7px;
  transform: rotate(${props => (props.isopen ? 180 : 0)}deg);
  transition: transform 0.2s ease-out;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  height: ${({ isopen }) => (isopen ? "500px" : "0px")};
  overflow: hidden;
  background: ${props => props.color};
  color: white;
  padding: 0px 20px;

  @media screen and (max-width: 900px) {
    height: ${({ isopen }) => (isopen ? "calc(100vh - 52px)" : "0px")};
  }
  @media screen and (min-width: 900px) {
    transition: height 0.6s cubic-bezier(0.29, 0.9, 0.69, 0.96);
  }
`;

const ProjectItem = props => {
  const itemRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { onClick, color, activeColor, title, children, logo } = props;

  useEffect(() => {
    // open project when selected
    const { active, title } = props;
    setIsOpen(active === title);
  }, [setIsOpen, props]);

  const handleClick = () => {
    // from parent accordion
    onClick();
    // small timeout to let css height change - 80 chosen arbitrarily
    setTimeout(() => {
      // scroll to this item
      window.scrollTo({
        top: itemRef.current.offsetTop,
        left: 0,
        behavior: "smooth"
      });
    }, 80);
  };

  return (
    <div ref={itemRef}>
      <Header
        onClick={handleClick}
        color={color}
        activecolor={activeColor}
        isopen={isOpen}
      >
        <Title>
          {title}
          <Img
            fixed={logo.childImageSharp.fixed}
            style={{ margin: "0px 5px" }}
          />
        </Title>
        <Icon icon={`angle-down`} isopen={isOpen} />
      </Header>
      <Description isopen={isOpen} color={color}>
        {children}
      </Description>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string
};

ProjectItem.defaultProps = {
  title: "TITLE",
  active: false,
  color: "#00b1fc",
  activeColor: "#00a0eb"
};

export default ProjectItem;
