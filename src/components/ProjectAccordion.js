import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { StaticQuery } from "gatsby";

import Img from "gatsby-image";
import { Menu, ImgWrapper } from "./styled";
import CircleLink from "./CircleLink";

import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const ProjectAccordion = props => {
  const [active, setActive] = useState("datespot");

  const onProjectClick = name => {
    setActive(name);
    console.log(active, name);
  };

  const {
    crowdbrain,
    datespot,
    bike2go,
    myrecipelist,
    crowdbrainLogo,
    datespotLogo,
    bike2goLogo,
    myrecipelistLogo
  } = props.data;

  return (
    <Wrapper>
      <ProjectItem
        title="bike2go"
        onClick={() => onProjectClick("bike2go")}
        active={active}
        color="#00a000"
        activeColor="#008000"
        logo={bike2goLogo}
      >
        <Details>
          <Description>
            <p>
              An authentication system for bike-sharing platforms to use facial
              recognition to handle bike signouts.
            </p>
            <p>
              <b>Stack: </b>Azure Face API, MongoDB, Express, Node.js, React,
              Redux
            </p>
            <Menu>
              <CircleLink
                href="https://github.com/JCayabyab/bike2go"
                icon={["fab", "github"]}
              />
              {/* <CircleLink icon="comment-alt" name="blog post" /> */}
            </Menu>
          </Description>
          <ImgWrapper>
            <Img fluid={bike2go.childImageSharp.fluid} />
          </ImgWrapper>
        </Details>
      </ProjectItem>
      <ProjectItem
        title="datespot"
        onClick={() => onProjectClick("datespot")}
        active={active}
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
                name="live demo"
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
        title="MyRecipeList"
        onClick={() => onProjectClick("MyRecipeList")}
        active={active}
        color="#2d7dab"
        activeColor="#305f7a"
        logo={myrecipelistLogo}
      >
        <Details>
          <Description>
            <p>A website to share recipes and track meals cooked.</p>
            <p>
              <b>Stack: </b>MySQL, Express, Node.js, React Hooks + Context API
            </p>
            <small>
              Built as the final project for my Database Design course!
            </small>
            <Menu>
              <CircleLink
                href="https://github.com/JCayabyab/my-recipe-list"
                icon={["fab", "github"]}
              />
              {/* <CircleLink icon="comment-alt" name="blog post" /> */}
            </Menu>
          </Description>
          <ImgWrapper>
            <Img fluid={myrecipelist.childImageSharp.fluid} />
          </ImgWrapper>
        </Details>
      </ProjectItem>
      <ProjectItem
        title="CrowdBrain"
        onClick={() => onProjectClick("CrowdBrain")}
        active={active}
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
                name="live demo"
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
};

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
        bike2go: file(relativePath: { eq: "bike2go.png" }) {
          ...fluidImage
        }
        myrecipelist: file(relativePath: { eq: "myrecipelist.png" }) {
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
        bike2goLogo: file(relativePath: { eq: "bike2go-logo.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        myrecipelistLogo: file(relativePath: { eq: "myrecipelist-logo.png" }) {
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
      fluid(maxWidth: 1680) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
