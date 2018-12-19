import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogPreview from "../components/BlogPreview";

const BlogPage = ({ data }) => {
  const personalPosts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.type === "personal"
  );

  const techPosts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.type === "tech"
  );

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={["blog", "personal", "journal", "jofred", "cayabyab"]}
      />
      <h1>Latest Posts</h1>
      <h2>Personal</h2>
      {personalPosts.map(({ node }) => (
        <BlogPreview key={node.id} post={node.frontmatter} />
      ))}
      <h2>Tech</h2>
      {techPosts.map(({ node }) => (
        <BlogPreview key={node.id} post={node.frontmatter} />
      ))}
    </Layout>
  );
};

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
            type
          }
        }
      }
    }
  }
`;

export default BlogPage;
