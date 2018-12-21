import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import CircleNavbar from "./CircleNavbar";
import logo from "../assets/images/icon.png";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-top: 10px solid #6d72c3;
`;

const TitleWrapper = styled.div`
  margin-top: 8px;
  padding-left: 10px;

  &:hover div {
    width: 250px;
  }

  @media only screen and (max-width: 600px) {
    &:hover div {
      width: 90px;
    }
  }
`;

const Title = styled(Link)`
  color: #0e1111;
  text-decoration: none;
`;

const TitleText = styled.h1`
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 90px;
  width: 90px;
  margin: 0;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Underline = styled.div`
  background: #6d72c3;
  width: 0px;
  height: 6px;
  transition: width 0.3s ease-out;
`;

const Header = ({ siteTitle }) => (
  <div>
    <HeaderWrapper>
      <TitleWrapper>
        <Title to="/">
          <TitleText>{siteTitle}</TitleText>
          <Logo alt="logo" src={logo} />
        </Title>
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
