import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(
      ({
        node: {
          id,
          frontmatter: { title, author, date, path }
        }
      }) => (
        <div key={id}>
          <h3>{title}</h3>
          <small>
            {author} on {date}
          </small>
          <br />
          <Link to={path}>Read more</Link>
          <hr />
        </div>
      )
    )}
  </Layout>
);

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
          }
        }
      }
    }
  }
`;

export default BlogPage;
