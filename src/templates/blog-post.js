import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import formatDate from "../utils/formatDate";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  @media only screen and (max-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  padding-bottom: 3rem;
`;

const DateAndAuthor = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  color: gray;
`;

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

const Article = styled.div`
  max-width: min(100%, 800px);
`;

const Template = ({ data }) => {
  const post = data.mdx;
  const { title, subtitle, date, author } = post.frontmatter;

  return (
    <Layout>
      <Wrapper>
        <h1 style={{ fontSize: "32pt" }}>{title}</h1>
        <h4 style={{ marginBottom: "5px" }}>{subtitle}</h4>
        <DateAndAuthor>
          <small>
            <FontAwesomeIcon icon="calendar-day" />
            <span style={{ marginLeft: "3px", marginRight: "12px" }}>
              {formatDate(date)}
            </span>
            by {author}
          </small>
        </DateAndAuthor>
        <hr
          style={{
            background: "#6d72c3",
            height: "7px",
            width: "40%",
            margin: "10px auto"
          }}
        />
        <ArticleWrapper>
          <Article>
            <MDXRenderer>{post.body}</MDXRenderer>
            <small>
              Like my writing? Check out some of my other blog posts{" "}
              <Link to="/blog">here</Link>. Wanna chat further? Email me{" "}
              <a
                href="mailto:me@jcayabyab.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </small>
          </Article>
        </ArticleWrapper>
      </Wrapper>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        subtitle
        date
        author
      }
    }
  }
`;

export default Template;
