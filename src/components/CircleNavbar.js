import React, { Component } from "react";
import CircleItem from "./CircleItem";
import styled from "styled-components";

const Carat = styled.div`
  position: relative;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class CircleNavbar extends Component {
  state = { selected: "home" };
  render() {
    const options = [
      {
        name: "projects",
        borderColor: "#7EB2DD",
        to: "/projects",
        icon: "hammer"
      },
      {
        name: "blog",
        borderColor: "#d71712",
        to: "/blog",
        icon: "pencil-alt"
      }
    ];

    return (
      <div>
        <NavWrapper>
          {options.map(option => (
            <CircleItem
              key={option.name}
              {...option}
              size={50}
              selected={this.state.selected}
              onClick={() => this.setState({ selected: option.name })}
            />
          ))}
        </NavWrapper>
        <Carat />
      </div>
    );
  }
}

export default CircleNavbar;
