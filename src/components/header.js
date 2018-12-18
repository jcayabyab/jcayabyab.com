import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import CircleNavbar from "./CircleNavbar";
import styled from "styled-components";

const Title = styled(Link)`
  color: #0e1111;
  text-decoration: none;
`;

const TitleWrapper = styled.div`
  padding-left: 10px;

  &:hover div {
    width: 250px;
  }
`;

const HeaderWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-top: 10px solid #6d72c3;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Underline = styled.div`
  background: #6d72c3;
  width: 0px;
  height: 6px;
  margin-top: 10px;
  transition: width 0.3s ease-out;
`;

const Header = ({ siteTitle }) => (
  <div>
    <HeaderWrapper>
      <TitleWrapper>
        <h1 style={{ margin: 0 }}>
          <Title to="/">{siteTitle}</Title>
        </h1>
        <Underline />
      </TitleWrapper>
      <CircleNavbar />
    </HeaderWrapper>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
