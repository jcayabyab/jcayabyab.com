import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import CircleLink from "../components/CircleLink";
import { Menu, ImgWrapper } from "../components/styled";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: #6d72c3;
  align-items: center;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

const IndexHeader = styled.h2`
  color: white;
`;

const IndexIntro = styled.p`
  color: white;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={["portfolio", "personal", "jofred", "cayabyab"]}
    />
    <Container>
      <TextWrapper>
        <IndexHeader>Welcome to my site!</IndexHeader>
        <IndexIntro>
          I'm currently in my second year in Software Engineering at the
          University of Calgary. My current interests include full-stack web
          development and video game design. I'm currently setting up a blog on
          this site where I hope you'll be able to get to know me a little
          better!
        </IndexIntro>
        <Menu>
          <CircleLink href="./resume.pdf" icon="file-alt" name="resume" />
          <CircleLink
            href="https://github.com/JCayabyab"
            icon={["fab", "github"]}
          />
          <CircleLink
            href="https://www.linkedin.com/in/JCayabyab/"
            icon={["fab", "linkedin"]}
          />
        </Menu>
      </TextWrapper>
      <ImgWrapper>
        <Img fluid={data.me.childImageSharp.fluid} />
      </ImgWrapper>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage;
