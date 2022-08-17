import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode | ReactNode[];
};

// The God wrapper
const Main: FC<Props> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export default Main;
