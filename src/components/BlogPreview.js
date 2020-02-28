import React from "react";
import { Link } from "gatsby";
import formatDate from "../utils/formatDate";

import styled from "styled-components";

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 2px;
  display: block;
  padding-top: 20px;
  transition: background-color 0.25s linear;
  border-radius: 0.5rem;
  padding: 1rem;

  background-color: #fff;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
`;

const BlogPreview = ({ post }) => {
  const { title, date, path, subtitle } = post;

  return (
    <LinkWrapper to={path}>
      <Wrapper>
        <div style={{ marginBottom: "10px" }}>
          <h2 style={{ display: "inline", margin: 0 }}>{title}</h2>
          <small style={{ color: "gray", marginLeft: "5px" }}>{formatDate(date)}</small>
        </div>
        <p>{subtitle}</p>
      </Wrapper>
      <hr style={{ margin: 0, background: "#eee" }} />
    </LinkWrapper>
  );
};

export default BlogPreview;
