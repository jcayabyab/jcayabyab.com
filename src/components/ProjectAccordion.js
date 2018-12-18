import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Description = styled.div`
  flex: 1;
`;

class Projects extends Component {
  state = { active: "datespot" };

  onProjectClick(name) {
    this.setState({ active: name });
  }

  render() {
    return (
      <Wrapper>
        <ProjectItem
          title="datespot"
          onClick={() => this.onProjectClick("datespot")}
          active={this.state.active}
        >
          <Details>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              enim luctus, ultricies dolor vitae, tristique sapien. Proin et
              dictum dui. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Proin eleifend lobortis
              diam, in efficitur odio pellentesque sit amet. Cras lectus eros,
              dictum vel mi non, vestibulum pulvinar tortor. Ut pulvinar
              imperdiet mi, a maximus risus ornare eu. Aenean ac tellus
              consequat, commodo mauris vel, feugiat ex. Vestibulum pharetra
              metus quis leo lacinia euismod. Praesent lacus magna, suscipit
              facilisis accumsan eu, sodales at arcu.
            </Description>
            <div>Hello</div>
          </Details>
        </ProjectItem>
        <ProjectItem
          title="CrowdBrain"
          onClick={() => this.onProjectClick("CrowdBrain")}
          active={this.state.active}
        />
      </Wrapper>
    );
  }
}

export default Projects;
