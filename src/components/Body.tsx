import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode[] | ReactNode;
};

const Body: FC<Props> = ({ children }) => {
  return (
    <StyledMain>
      <StyledBody>{children}</StyledBody>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 900px;
`;

export default Body;
