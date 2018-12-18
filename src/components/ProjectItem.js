import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${({ activeColor, color, isOpen }) =>
    isOpen ? activeColor : color};
  align-items: center;
  padding: 15px 8px;
  color: white;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${props => props.activeColor};
  }
`;

const Title = styled.div`
  flex: 1;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0px 7px;
  transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
  transition: transform 0.2s ease-out;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  transition: height 0.6s cubic-bezier(0.29, 0.9, 0.69, 0.96);
  overflow: hidden;
  background: ${props => props.color};
  color: white;

  @media screen and (max-width: 900px) {
    height: ${({ isOpen }) => (isOpen ? "700px" : "0px")};
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
    const { onClick, color, activeColor, title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Header
          onClick={onClick}
          color={color}
          activeColor={activeColor}
          isOpen={isOpen}
        >
          <Title>{title}</Title>
          <Icon icon={`angle-down`} isOpen={isOpen} />
        </Header>
        <Description isOpen={isOpen} color={color}>{children}</Description>
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
