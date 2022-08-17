import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode[] | ReactNode;
  delay?: number;
  intensity: number;
  duration: number;
};

const DEFAULT_DELAY_DURATION = 0;

const Floater: FC<Props> = ({ delay, intensity, duration, children }) => {
  return (
    <StyledFloater height={intensity}>
      <StyledHolder
        timeDelay={delay ? delay : DEFAULT_DELAY_DURATION}
        time={duration}
      >
        {children}
      </StyledHolder>
    </StyledFloater>
  );
};

const StyledFloater = styled.div<{ height: number }>`
  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-${({ height }) => height}em);
    }

    100% {
      transform: translateY(0);
  }
`;

const StyledHolder = styled.div<{ timeDelay: number; time: number }>`
  animation-name: float;
  animation-duration: ${({ time }) => time}s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ timeDelay }) => timeDelay}s;
`;

export default Floater;
