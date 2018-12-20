import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import { StaticQuery } from "gatsby";

import Img from "gatsby-image";
import { Menu, ImgWrapper } from "./styled";
import CircleLink from "./CircleLink";

import styled from "styled-components";

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
  margin-right: 15px;
`;

class ProjectAccordion extends Component {
  state = { active: "datespot" };

  onProjectClick(name) {
    this.setState({ active: name });
  }

  render() {
    const {
      crowdbrain,
      datespot,
      crowdbrainLogo,
      datespotLogo
    } = this.props.data;

    return (
      <Wrapper>
        <ProjectItem
          title="datespot"
          onClick={() => this.onProjectClick("datespot")}
          active={this.state.active}
          color="#ff3535"
          activeColor="#df1515"
          logo={datespotLogo}
        >
          <Details>
            <Description>
              <p>
                A simple app that recommends interesting date ideas around their
                current location.
              </p>
              <p>
                <b>Stack: </b>Google Maps API, React, Redux
              </p>
              <Menu>
                <CircleLink
                  href="https://datespot.surge.sh"
                  icon="bolt"
                  name="live example"
                />
                <CircleLink
                  href="https://github.com/JCayabyab/datespot"
                  icon={["fab", "github"]}
                />
                {/* <CircleLink icon="comment-alt" name="blog post" /> */}
              </Menu>
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
          logo={crowdbrainLogo}
        >
          <Details>
            <Description>
              <p>
                An app that lets people contribute ideas to their favourite
                projects.
              </p>
              <p>
                <b>Stack: </b>MongoDB, Express, Node.js, React, Redux
              </p>
              <Menu>
                <CircleLink
                  href="https://crowdbrain.herokuapp.com"
                  icon="bolt"
                  name="live example"
                />
                <CircleLink
                  href="https://github.com/JCayabyab/CrowdBrain"
                  icon={["fab", "github"]}
                />
                {/* <CircleLink icon="comment-alt" name="blog post" /> */}
              </Menu>
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
        crowdbrainLogo: file(relativePath: { eq: "crowdbrain-logo.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        datespotLogo: file(relativePath: { eq: "datespot-logo.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
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
