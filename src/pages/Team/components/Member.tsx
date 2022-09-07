import { FC, useRef } from "react";
import styled from "styled-components";

import { Colors } from "../../../constants";

type MemberProps = {
  name: string;
  imagePath: string;
  role: string;
  description: string;
  twitter: string;
};

const Member: FC<MemberProps> = ({
  name,
  imagePath,
  role,
  description,
  twitter,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const show = () => {
    if (popupRef.current) {
      popupRef.current.classList.add("show-phase");
    }
  };

  const hidePhase = () => {
    if (popupRef.current) {
      popupRef.current.classList.remove("show-phase");
    }
  };

  return (
    <StyledScope>
      <StyledThumbnail onClick={show}>
        <img src={imagePath} alt={`${name} PFP`} />
        <span className="secondary-text-size nametag">{name}</span>
      </StyledThumbnail>
      <StyledPopup ref={popupRef}>
        <StyledBox className="box">
          <span onClick={hidePhase} className="section-text-size close-btn">
            X
          </span>
          <div className="box-header">
            <img src={imagePath} alt={`${name} PFP`} />
            <aside>
              <h1 className="subheader-text-size">{name}</h1>
              <h2 className="setion-text-size">{role}</h2>
              <p className="body-text-size">{description}</p>
              <a
                className="twitter-icon"
                href={twitter}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="assets/images/twitter.png" alt="Twitter Logo" />
              </a>
            </aside>
          </div>
        </StyledBox>
      </StyledPopup>
    </StyledScope>
  );
};

const StyledScope = styled.main`
  .show-phase {
    visibility: visible;
    opacity: 1;

    .box {
      transform: translateY(0);
    }
  }
`;

const StyledThumbnail = styled.h1`
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }

  img {
    width: 100%;
  }

  .nametag {
    padding: 0.2em;
    box-sizing: border-box;
    background-image: url("assets/images/nametag.png");
    background-size: 100% 100%;
    display: block;
    font-family: Passero One;
    text-align: center;
    width: 100%;
  }
`;

const StyledPopup = styled.div`
  z-index: 9999;
  background-color: ${Colors.DIM};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  visibility: hidden;

  transition: all 0.5s ease-in-out;
  opacity: 0;
`;

const StyledBox = styled.section`
  background-image: url("assets/images/team.png");
  background-size: 100%;
  text-align: right;
  box-sizing: border-box;
  padding: 2em;
  border: 10px solid ${Colors.NAVY};
  transform: translateY(200px);
  max-width: 900px;

  transition: all 0.5s ease-in-out;

  .close-btn {
    color: ${Colors.WHITE};
    font-family: Passero One;
    &:hover {
      cursor: pointer;
    }
  }

  .box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      display: flex;
      flex-direction: column;

      color: ${Colors.WHITE};
      font-family: Passero One;
      box-sizing: border-box;
      text-align: left;
      padding: 2em;
    }

    .twitter-icon {
      align-self: flex-end;

      &:hover {
        background-color: white;
        border-radius: 100%;
      }
    }

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export default Member;
