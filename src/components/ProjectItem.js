import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

const Header = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${({ activeColor, color, isopen }) =>
    isopen ? activeColor : color};
  align-items: center;
  padding: 15px 15px;
  color: white;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${props => props.activeColor};
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
  transition: height 0.6s cubic-bezier(0.29, 0.9, 0.69, 0.96);
  overflow: hidden;
  background: ${props => props.color};
  color: white;
  padding: 0px 20px;

  @media screen and (max-width: 900px) {
    height: ${({ isopen }) => (isopen ? "calc(100vh - 52px)" : "0px")};
  }
`;

class ProjectItem extends Component {
  state = { isOpen: false };

  componentDidMount() {
    const { active, title } = this.props;
    if (active === title) {
      this.setState({ isOpen: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.active !== prevProps.active) {
      const { active, title } = this.props;
      this.setState({ isOpen: active === title });
    }
  }

  render() {
    const { onClick, color, activeColor, title, children, logo } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Header
          onClick={onClick}
          color={color}
          activeColor={activeColor}
          isopen={isOpen}
        >
          <Title>
            {title}
            <Img
              fixed={logo.childImageSharp.fixed}
              style={{ margin: "0px 5px" }}
            />
          </Title>
          <Icon icon={`angle-down`} isOpen={isOpen} />
        </Header>
        <Description isOpen={isOpen} color={color}>
          {children}
        </Description>
      </div>
    );
  }
}

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
