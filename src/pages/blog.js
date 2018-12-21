import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogPreview from "../components/BlogPreview";

import styled from "styled-components";

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

const HeaderTab = styled.a`
  cursor: pointer;
  color: ${props => (props.active ? "#000" : "#999")};

  transition: color 0.2s linear;

  &:hover {
    color: #000;
  }
`;

const Slash = styled.div`
  margin: 0 20px;
`;

class BlogPage extends Component {
  state = {
    selectedTab: "personal"
  };

  renderHeader() {
    return (
      <Header>
        <HeaderTab
          onClick={() => this.updateTab("personal")}
          active={this.state.selectedTab === "personal"}
        >
          Personal
        </HeaderTab>
        <Slash>/</Slash>
        <HeaderTab
          onClick={() => this.updateTab("tech")}
          active={this.state.selectedTab === "tech"}
        >
          Tech
        </HeaderTab>
      </Header>
    );
  }

  updateTab(tabName) {
    this.setState({ selectedTab: tabName });
  }

  renderPosts() {
    const { data } = this.props;

    const personalPosts = data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.type === "personal"
    );

    const techPosts = data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.type === "tech"
    );

    switch (this.state.selectedTab) {
      case "tech":
        return techPosts.map(({ node }) => (
          <BlogPreview
            key={node.id}
            post={{ ...node.frontmatter, excerpt: node.excerpt }}
          />
        ));
      case "personal":
        return personalPosts.map(({ node }) => (
          <BlogPreview
            key={node.id}
            post={{ ...node.frontmatter, excerpt: node.excerpt }}
          />
        ));
      default:
        console.log(this.state.selectedTab);
        return (
          <div>
            There are no posts under {this.state.selectedTab}! Check your switch
            statement or state updates.
          </div>
        );
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Blog"
          keywords={["blog", "personal", "journal", "jofred", "cayabyab"]}
        />
        {this.renderHeader()}
        {this.renderPosts()}
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
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
