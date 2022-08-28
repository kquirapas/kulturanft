import { FC } from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import Body from "../../components/Body";

import { Colors } from "../../constants";

const Utilities: FC = () => {
  return (
    <StyledMain>
      <Navbar />
      <Body>
        <Spacer size={5} />
        <StyledHeading className="header-text-size">
          ECONOMIC DETAILS
        </StyledHeading>
        <img
          className="econ-img"
          src="assets/images/econ.png"
          alt="Economic Model"
        />
        <StyledCaption className="body-text-size">ECONOMIC MODEL</StyledCaption>
        <Spacer size={1} />
        <StyledList className="body-text-size">
          <li>PRICE</li>
          <p>
            We will be asking the community to determine the price of each
            Katutubo
          </p>
          <li>NETWORK</li>
          <p>Solana</p>
          <li>MAX SUPPLY</li>
          <p>TBD</p>
          <li>MAX MINT</li>
          <p>Unlimited</p>
          <li>RELEASE DATE</li>
          <p>TBA</p>
        </StyledList>
        <StyledSectionHeader className="section-text-size">
          REWARDS
        </StyledSectionHeader>
        <StyledSectionBody className="body-text-size">
          For every transaction in the secondary market there is a term called
          "Creator's fee". It means that the creators of the NFT will earn every
          time their NFTs are sold and bough in the secondary market. But now,
          we decided to distribute the creator's fee to the holders.
        </StyledSectionBody>
        <StyledSectionBody className="body-text-size">
          The rewards only work on the trading volume. Refer to the explanation
          below.
        </StyledSectionBody>
        <img
          className="econ-img"
          src="assets/images/econ-6k.png"
          alt="6,000 Supply Rewards"
        />
        <StyledCaption className="body-text-size">
          6,000 SUPPLY REWARDS
        </StyledCaption>
        <img
          className="econ-img"
          src="assets/images/econ-10k.png"
          alt="10,000 Supply Rewards"
        />
        <StyledCaption className="body-text-size">
          10,000 SUPPLY REWARDS
        </StyledCaption>
        <StyledSectionHeader className="section-text-size">
          INCREASING REWARDS
        </StyledSectionHeader>
        <StyledSectionBody className="body-text-size">
          We will introduce burning of the NFT so the scarcity of the collection
          will increase, thus thue holders can get more rewards since the supply
          decreased. If the collection did not sell out, there will be actions
          that will be done by the team.
        </StyledSectionBody>
        <StyledSectionHeader className="section-text-size">
          SALES MECHANCIS
        </StyledSectionHeader>
        <StyledList className="body-text-size">
          <li>WHITELIST</li>
          <ul>
            <li>4 Mint = 2 Free mints</li>
            <li>Price: TBD</li>
            <li>Max mint: Unlimited</li>
          </ul>
          <li>PUBLIC MINT</li>
          <ul>
            <li>Price: TBD</li>
            <li>Max mint: Unlimited</li>
          </ul>
          <li>FREE MINT</li>
          <ul>
            <li>
              All Free mints will be minted after Whitelist and Public Minting
            </li>
          </ul>
        </StyledList>
        <StyledSectionHeader className="section-text-size">
          TREASURY
        </StyledSectionHeader>
        <StyledSectionBody className="body-text-size">
          The team will keep 1000 Katutubo for funding purposes and tokenomics
          purposes. Rare NFTs will not be minted by the team.
        </StyledSectionBody>
        <StyledSectionHeader className="section-text-size">
          SUPPLY ALLOCATION
        </StyledSectionHeader>
        <StyledSectionBody className="body-text-size">
          <strong>FOR MINTING:</strong> 6000
          <br />
          <strong>FOR TEAM:</strong> 1000
          <br />
          <strong>FOR FREE/GIVEAWAYS/PARTNERS:</strong> 3000
          <br />
        </StyledSectionBody>
        <StyledSectionHeader className="section-text-size">
          FUTURE ECONOMIC PLANS
        </StyledSectionHeader>
        <StyledSectionBody className="body-text-size">
          Deflationary Token
        </StyledSectionBody>
        <Spacer size={10} />
      </Body>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-image: url("assets/images/utilities.png");
  background-size: 100% 100%;
  width: 100vw;
  min-height: 100vh;
  font-family: Passero One;

  .econ-img {
    width: 100%;
  }
`;

const StyledHeading = styled.h1`
  color: ${Colors.BLACK};
  margin-bottom: 0.5em;
`;

const StyledCaption = styled.p`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

const StyledList = styled.ul`
  width: 100%;

  li {
    font-weight: bold;
    font-size: 1.2em;
  }

  p {
    padding: 0.5em 2em;
    box-sizing: border-box;
  }

  ul {
    margin-bottom: 2em;
    font-size: 0.9em;
    padding: 0 2em;
  }
`;

const StyledSectionHeader = styled.h1`
  width: 100%;
  font-family: Passero One;
  margin: 1em 0;
`;

const StyledSectionBody = styled.p`
  margin: 1em 0;
  width: 100%;
  font-family: Passero One;
`;

export default Utilities;
