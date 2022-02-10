import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={["portfolio", "personal", "jofred", "cayabyab"]}
    />
    <Container>
      This site is currently down for maintenance. Be back soon!
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
