import styled from "styled-components";

const DEFAULT_SIZING = 1;

type Props = {
  size?: number; // Relative to baseline font-size
};

export default function Spacer({ size }: Props) {
  return <StyledSpacer sizing={size ? size : DEFAULT_SIZING}></StyledSpacer>;
}

const StyledSpacer = styled.span<{ sizing: number }>`
  display: block;
  height: ${({ sizing }) => sizing}em;
`;
