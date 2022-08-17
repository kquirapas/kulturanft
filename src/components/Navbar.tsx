import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AnchorLink from "../components/AnchorLink";
import { Colors } from "../constants";

const Navbar: FC = () => {
  return (
    <StyledNav>
      <StyledLeft>
        <img
          id="kultura-logo"
          src="assets/images/kultura_white.png"
          alt="Kultura Logo"
        />
      </StyledLeft>
      <StyledRight>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/roadmap">ROADMAP</StyledLink>
        <StyledLink to="/team">TEAM</StyledLink>
        <AnchorLink anchor="https://twitter.com/_KulturaNFT">
          <img
            className="link-logo"
            src="/assets/images/twitter.png"
            alt="Twitter Logo"
          />
        </AnchorLink>
        <AnchorLink anchor="https://discord.gg/kulturanft">
          <img
            className="link-logo"
            src="/assets/images/discord.png"
            alt="Discord Logo"
          />
        </AnchorLink>
        <AnchorLink anchor="#">
          <img
            className="link-logo"
            src="/assets/images/opensea.png"
            alt="Opensea Logo"
          />
        </AnchorLink>
      </StyledRight>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;
`;

const StyledLeft = styled.span`
  display: flex;
  align-items: center;

  #kultura-logo {
    height: 3em;
  }
`;

const StyledRight = styled.span`
  display: flex;
  align-items: center;

  .link-logo {
    margin: 0 0.5em;
    height: 2em;
  }
`;

const StyledLink = styled(Link)`
  color: ${Colors.WHITE};
  font-family: Passero One;
  font-size: 1.5em;
  text-decoration: none;
  margin: 0 1em;

  &:hover {
    color: ${Colors.BROWN};
  }
`;

export default Navbar;
