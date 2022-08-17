import { FC } from "react";
import styled from "styled-components";

type Props = {
  symbol: string;
  size: number;
  color?: string;
};

const DEFAULT_COLOR = "#FFFFFF";

const Icon: FC<Props> = ({ symbol, size, color }) => (
  <StyledSpan
    color={color ? color : DEFAULT_COLOR}
    fontSize={size}
    className="material-symbols-rounded"
  >
    {symbol}
  </StyledSpan>
);

const StyledSpan = styled.span<{ fontSize: number; color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}em;
`;

export default Icon;
