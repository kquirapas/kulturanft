import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AnchorLink from "../components/AnchorLink";
import Icon from "../components/Icon";
import { Colors } from "../constants";

const Navbar: FC = () => {
  const [toggled, setToggled] = useState(false);
  const mobileNavBodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (mobileNavBodyRef.current) {
      if (!toggled) {
        mobileNavBodyRef.current.classList.add("show");
      } else {
        mobileNavBodyRef.current.classList.remove("show");
      }
      setToggled((prev) => !prev);
    }
  };

  return (
    <StyledScope>
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
          <StyledLink to="/utilities">UTILITIES</StyledLink>
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
      <StyledMobileNav>
        <div className="header">
          <img
            id="kultura-logo"
            src="assets/images/kultura_white.png"
            alt="Kultura Logo"
          />
          <span onClick={toggle} className="menu-btn">
            <Icon size={2} symbol="menu" />
          </span>
        </div>
        <div ref={mobileNavBodyRef} className="body">
          <img
            id="kultura-mobile-logo"
            src="assets/images/kultura_white.png"
            alt="Kultura Logo"
          />
          <StyledLink className="nav-text-size" to="/">
            HOME
          </StyledLink>
          <StyledLink className="nav-text-size" to="/roadmap">
            ROADMAP
          </StyledLink>
          <StyledLink className="nav-text-size" to="/team">
            TEAM
          </StyledLink>
          <StyledLink className="nav-text-size" to="/utilities">
            UTILITIES
          </StyledLink>
          <div className="socials">
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
          </div>
        </div>
      </StyledMobileNav>
    </StyledScope>
  );
};

const StyledScope = styled.main`
  .show {
    transform: translateX(0vw) !important;
  }
`;

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;

  @media only screen and (max-width: 896px) {
    display: none;
  }
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
  text-decoration: none;
  margin: 0 1em;

  &:hover {
    color: ${Colors.BROWN};
  }
`;

const StyledMobileNav = styled.nav`
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.BROWN};

  #kultura-logo {
    height: 3em;
  }

  .menu-btn {
    &:hover {
      cursor: pointer;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5em 1em;
    box-sizing: border-box;
  }

  .body {
    left: 0;
    position: fixed;
    background-color: ${Colors.BLACK};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2em;
    box-sizing: border-box;

    width: 50vw;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-50vw);

    #kultura-mobile-logo {
      height: auto;
      width: 100%;
    }

    & > * {
      margin: 0.5em 0;
    }

    .socials {
      height: 3em;

      img {
        margin: 0 0.5em;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 896px) {
    display: flex;
  }
`;

export default Navbar;
