import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

import { ImgWrapper } from "./styled";

const Wrapper = styled.div`
  border: 1px solid lightgray;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  flex: 1;
  padding: 0px 20px;
`;

class ProjectAccordion extends Component {
  state = { active: "datespot" };

  onProjectClick(name) {
    this.setState({ active: name });
  }

  render() {
    const { crowdbrain, datespot } = this.props.data;

    return (
      <Wrapper>
        <ProjectItem
          title="datespot"
          onClick={() => this.onProjectClick("datespot")}
          active={this.state.active}
          color="#ff3535"
          activeColor="#df1515"
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
            <ImgWrapper>
              <Img fluid={datespot.childImageSharp.fluid} />
            </ImgWrapper>
          </Details>
        </ProjectItem>
        <ProjectItem
          title="CrowdBrain"
          onClick={() => this.onProjectClick("CrowdBrain")}
          active={this.state.active}
          color="#50a0eb"
          activeColor="#0090da"
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
            <ImgWrapper>
              <Img fluid={crowdbrain.childImageSharp.fluid} />
            </ImgWrapper>
          </Details>
        </ProjectItem>
      </Wrapper>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        crowdbrain: file(relativePath: { eq: "crowdbrain.png" }) {
          ...fluidImage
        }
        datespot: file(relativePath: { eq: "datespot.png" }) {
          ...fluidImage
        }
      }
    `}
    render={data => <ProjectAccordion {...props} data={data} />}
  />
);

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1680, maxHeight: 970) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
