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
  margin-bottom: 10px;
  padding-left: 10px;

  &:hover div {
    width: 250px;
  }
`;

const HeaderWrapper = styled.div`
  background: white;
  margin-bottom: "1.45rem";
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const TopBar = styled.div`
  height: 10px;
  background: #6d72c3;
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
    <TopBar />
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
