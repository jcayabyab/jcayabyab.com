import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #6d72c3;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const IndexHeader = styled.h2`
  color: white;
`;

const IndexIntro = styled.p`
  color: white;
  font-size: 13pt;
`;

const ImgWrapper = styled.div`
  width: 500px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-left: 20px;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
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
          development and video game design. Look through some of my blog posts
          if you want to get to know me a little better!
        </IndexIntro>
        <Menu />
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
