import { FC, useRef } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Icon from "../../components/Icon";
import Floater from "../../components/Floater";

import { Colors } from "../../constants";

const Home: FC = () => {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const floaterRef = useRef<HTMLSpanElement>(null);

  const showManifesto = () => {
    if (manifestoRef.current && floaterRef.current) {
      manifestoRef.current.classList.add("show-manifesto");
      floaterRef.current.classList.add("hide-floater-btn");
    }
  };

  const hideManifesto = () => {
    if (manifestoRef.current && floaterRef.current) {
      manifestoRef.current.classList.remove("show-manifesto");
      floaterRef.current.classList.remove("hide-floater-btn");
    }
  };

  return (
    <StyledMain>
      <Navbar />
      <Body>
        <img src="assets/images/kubo.png" alt="Bahay Kubo" />
        <span
          ref={floaterRef}
          onClick={showManifesto}
          className="arrow-floater"
        >
          <Floater intensity={2} duration={2}>
            <Icon size={8} symbol="expand_less" />
          </Floater>
        </span>
        <StyledManifesto ref={manifestoRef}>
          <section className="body-text-size">
            <span
              onClick={hideManifesto}
              className="section-text-size close-btn"
            >
              X
            </span>
            <img
              className="manifesto-logo"
              src="assets/images/kultura_black.png"
              alt="Kultura Logo"
            />
            <p>
              The KULTURA NFT is a Continuous Project that aims to be the first
              NFT Project that preserves Cultural Traditions through digital
              means and innovate endless opportunities on Web 3 and the
              Metaverse
            </p>
            <p>
              Sit tight, let's sail through the vast sea of Web 3 and Metaverse,
              I’m sure y’all are going to love this.
            </p>
            <p>Let’s turn the world upside down</p>
          </section>
        </StyledManifesto>
      </Body>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-image: url("assets/images/home.png");
  background-size: 100%;
  width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;

  img {
    height: 70vh;
  }

  .arrow-floater {
    &:hover {
      cursor: pointer;
    }
  }

  .show-manifesto {
    visibility: visible;
    opacity: 1;

    section {
      transform: translateY(0);
    }
  }

  .hide-floater-btn {
    display: none;
  }
`;

const StyledManifesto = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  background-color: ${Colors.DIM};
  opacity: 0;

  transition: all 0.5s ease-in-out;

  section {
    border: 10px solid ${Colors.BROWN};
    max-width: 500px;
    font-family: Passero One;
    background-image: url("assets/images/home.png");
    background-color: green;
    box-sizing: border-box;
    padding: 2em;

    transform: translateY(200px);

    transition: all 0.5s ease-in-out;
  }

  .manifesto-logo {
    width: 100%;
    height: auto;
  }

  .close-btn {
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: right;
  }

  p {
    margin-bottom: 1em;
  }
`;

export default Home;
