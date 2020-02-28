import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import formatDate from "../utils/formatDate";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  @media only screen and (max-width: 1024px) {
    padding: 0px 15px;
  }
`;

const DateAndAuthor = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  color: gray;
`;

const Template = ({ data }) => {
  const post = data.markdownRemark;
  const { title, subtitle, date, author } = post.frontmatter;

  return (
    <Layout>
      <Wrapper>
        <h1 style={{ fontSize: "32pt" }}>{title}</h1>
        <h4 style={{marginBottom: "5px"}}>{subtitle}</h4>
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
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
