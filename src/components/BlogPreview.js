import React from "react";
import { Link } from "gatsby";
import formatDate from "../utils/formatDate";

import styled from "styled-components";

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 2px;
`;

const Wrapper = styled.div`
  @media only screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const BlogPreview = ({ post }) => {
  const { title, date, path, subtitle } = post;

  return (
    <LinkWrapper to={path}>
      <Wrapper>
        <Header>
          <h2>{title}</h2>
          <small style={{ margin: "0 10px" }}>{formatDate(date)}</small>
        </Header>
        <p>{subtitle}</p>
      </Wrapper>
      <hr style={{ margin: 0, background: "#eee" }} />
    </LinkWrapper>
  );
};

export default BlogPreview;
