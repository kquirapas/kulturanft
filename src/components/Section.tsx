import { FC, ReactNode } from "react";

import styled from "styled-components";

type Props = {
  anchor: string;
  children: ReactNode | ReactNode[];
};

const Section: FC<Props> = ({ anchor, children }) => {
  return <StyledSection id={anchor}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  padding: 0;
  margin: 0;
`;

export default Section;
