import { FC } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import Body from "../../components/Body";
import Member from "./components/Member";

import { Colors } from "../../constants";

import { MEMBERS } from "./constants";

const Team: FC = () => {
  return (
    <StyledMain>
      <Navbar />
      <Body>
        <Spacer size={5} />
        <StyledHeading className="header-text-size">TEAM</StyledHeading>
        <StyledGrid>
          {MEMBERS.map((m) => (
            <Member
              name={m.name}
              imagePath={m.imagePath}
              role={m.role}
              description={m.description}
              twitter={m.twitter}
            />
          ))}
        </StyledGrid>
        <Spacer size={10} />
      </Body>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-image: url("assets/images/team.png");
  background-size: 100%;
  width: 100vw;
  min-height: 100vh;
`;

const StyledHeading = styled.h1`
  color: ${Colors.WHITE};
  font-family: Passero One;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 896px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default Team;
