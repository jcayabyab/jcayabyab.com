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
          I'm a software engineer who is looking to make an impact! Check out the links belows to learn about me a little bit better.
        </IndexIntro>
        <Menu>
          <CircleLink
            href="mailto:me@jcayabyab.com"
            target="_blank"
            rel="noopener noreferrer"
            icon="envelope"
            name="email"
          />
          <CircleLink href="./resume.pdf" icon="file-alt" name="resume" />
          <CircleLink
            href="https://github.com/JCayabyab"
            icon={["fab", "github"]}
            name="github"
          />
          <CircleLink
            href="https://www.linkedin.com/in/jofred-cayabyab/"
            icon={["fab", "linkedin"]}
            name="linkedin"
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
