import { FC } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import Body from "../../components/Body";
import Phase from "./components/Phase";

type RoadmapPhase = {
  title: string;
  imagePath: string;
  phases: string[];
};

const PHASES: RoadmapPhase[] = [
  {
    title: "PROLOGUE",
    imagePath: "assets/images/araw-silhouette.png",
    phases: [
      "CREATING THE TEAM",
      "BRANDING",
      "CREATING THE DISCORD",
      "SNEAK PEEKS",
    ],
  },
  {
    title: "UNANG YUGTO",
    imagePath: "assets/images/bundok-silhouette.png",
    phases: [
      "AMA",
      "PRE-SALE & PUBLIC SALE",
      "PARTNERSHIPS WITH BRANDS",
      "RELEASE OF SOCIAL MEDIA",
      "CREATING THE WEBSITE",
    ],
  },
  // {
  //   title: "IKALAWANG YUGTO",
  //   imagePath: "assets/images/kubo-silhouette.png",
  //   phases: [
  //     "IMPLEMENTATION OF ROYALTIES TO HOLDERS",
  //     "INTRODUCTION OF NFT BURNING",
  //     "WEEKLY PODCASTS & PROMOTIONS FOR OTHER NFTS",
  //     "WEEKLY EVENTS FOR THE COMMUNITY",
  //     "WINNERS OF EVENTS GET A CHANCE TO HAVE THEIR OWN PERSONALIZED NFTS",
  //   ],
  // },
  // {
  //   title: "IKATLONG YUGTO",
  //   imagePath: "assets/images/head-silhouette.png",
  //   phases: [
  //     "PUT UP THE 3 LEGENDARY 1 OF 1 NFTS FOR AUCTION",
  //     "NIPA HUT MEMBERS EARN EXCLUSIVE BENEFITS",
  //     "TOP NFT HOLDER WILL GET REWARDS",
  //     "SNEAK PEEKS OF WHAT IS COMING NEXT",
  //   ],
  // },
  // {
  //   title: "IKAAPAT NA YUGTO",
  //   imagePath: "assets/images/kubo-silhouette.png",
  //   phases: [
  //     "IMPLEMENTATION OF BURNING",
  //     "INTRODUCTION TO STAKING",
  //     "SCHOLARSHIP FOR COLLEGE FRESHMEN",
  //     "REVISION OF DISCORD",
  //     "INTRODUCTION TO NFT TICKETS",
  //     "MARKETING OF 2ND PROJECT",
  //   ],
  // },
];

const Roadmap: FC = () => {
  return (
    <StyledMain>
      <Navbar />
      <Spacer size={5} />
      <Body>
        {PHASES.map((p) => (
          <Phase title={p.title} imagePath={p.imagePath} phases={p.phases} />
        ))}
        <Spacer size={5} />
        <StyledSilhouette>
          <img src="assets/images/diamond-silhouette.png" alt="Diamond" />
          <img src="assets/images/bundok-silhouette.png" alt="Mountain" />
          <img src="assets/images/head-silhouette.png" alt="Head" />
          <img src="assets/images/kubo-silhouette.png" alt="Bahay Kubo" />
          <img src="assets/images/araw-silhouette.png" alt="Araw" />
          <img src="assets/images/diamond-silhouette.png" alt="Diamond" />
        </StyledSilhouette>
      </Body>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-image: url("assets/images/roadmap.png");
  background-size: 100%;
  width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;
`;

const StyledSilhouette = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export default Roadmap;
