import "./App.css";

import styled from "styled-components";

function App() {
  return (
    <StyledMain>
      <p>KulturaNFT Website</p>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
