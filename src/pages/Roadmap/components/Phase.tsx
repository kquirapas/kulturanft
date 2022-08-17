import { FC, useRef } from "react";
import styled from "styled-components";

import { Colors } from "../../../constants";

type PhaseProps = {
  title: string;
  imagePath: string;
  phases: string[];
};

const Phase: FC<PhaseProps> = ({ title, imagePath, phases }) => {
  const phaseRef = useRef<HTMLDivElement>(null);

  const showPhase = () => {
    if (phaseRef.current) {
      phaseRef.current.classList.add("show-phase");
    }
  };

  const hidePhase = () => {
    if (phaseRef.current) {
      phaseRef.current.classList.remove("show-phase");
    }
  };

  return (
    <StyledScope>
      <StyledTitle onClick={showPhase} className="subheader-text-size">
        {title}
      </StyledTitle>
      <StyledPhase ref={phaseRef}>
        <StyledBox className="phase-box">
          <span onClick={hidePhase} className="section-text-size close-btn">
            X
          </span>
          <div className="phase-box-header">
            <span className="subheader-text-size">{title}</span>
            <img src={imagePath} alt={imagePath} />
          </div>
          {phases.map((p) => (
            <StyledSubPhase className="section-text-size">{p}</StyledSubPhase>
          ))}
        </StyledBox>
      </StyledPhase>
    </StyledScope>
  );
};

const StyledScope = styled.main`
  .show-phase {
    visibility: visible;
    opacity: 1;

    .phase-box {
      transform: translateY(0);
    }
  }
`;

const StyledTitle = styled.h1`
  font-family: Intro;
  text-align: center;
  margin-bottom: 0.5em;

  &:hover {
    cursor: pointer;
    color: ${Colors.BROWN};
  }
`;

const StyledPhase = styled.div`
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
  background-image: url("assets/images/roadmap.png");
  background-size: 100%;
  text-align: right;
  box-sizing: border-box;
  padding: 2em;
  border: 10px solid ${Colors.BROWN};
  transform: translateY(200px);

  transition: all 0.5s ease-in-out;

  .close-btn {
    font-family: Passero One;
    &:hover {
      cursor: pointer;
    }
  }

  .phase-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-family: Intro;
      margin-right: 1em;
    }
  }
`;

const StyledSubPhase = styled.h2`
  text-align: left;
  font-family: Passero One;
  margin-bottom: 0.5em;
`;

export default Phase;
