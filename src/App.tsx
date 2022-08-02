import { FC } from "react";
import "./App.css";

import styled from "styled-components";

const App: FC = () => {
  return (
    <StyledMain>
      <p>KulturaNFT Website</p>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
