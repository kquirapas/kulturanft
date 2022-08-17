import {
  FC,
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  ReactNode,
} from "react";
import styled from "styled-components";

import { Colors } from "../constants";

//--------------------------------------------------------------//
// Variables
const MS_IN_SEC = 1000;
const TRANSITION_TIME = 0.2;

const NotificationColors = {
  error: "#000000",
  message: "#000000",
};

type NotificationColorsKey = keyof typeof NotificationColors;

//--------------------------------------------------------------//
// Functions
const useNotify = () => {
  return useContext(NotifyContext) as NotifyContextType;
};

//--------------------------------------------------------------//
// Components
type Props = {
  children: ReactNode | ReactNode[];
};

type NotifyContextType = {
  notify: (type: string, message: string, timeout?: number) => {};
};

type Notification = {
  type: string;
  message: string;
  timeout: number;
};

const NotifyContext = createContext<NotifyContextType | null>(null);
const NotifyProvider = NotifyContext.Provider;

const Notify: FC<Props> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const queueRef = useRef<Notification[]>([]);
  const barRef = useRef<HTMLSpanElement>(null);
  const msgRef = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const next = (type: string, message: string, timeout: number) => {
    if (barRef.current && msgRef.current) {
      const color = NotificationColors[type as NotificationColorsKey];

      // update contents of Snackbar
      msgRef.current.textContent = message;
      barRef.current.style.backgroundColor = color;

      // show Snackbar
      setIsActive(true);
      barRef.current.classList.add("show");

      // hide Snackbar after {timeout} ms
      timeoutRef.current = setTimeout(() => {
        if (barRef.current) {
          barRef.current.classList.remove("show");

          // setTimeout enables exit transition to finish
          // before next Notification is shown
          setTimeout(() => setIsActive(false), TRANSITION_TIME * MS_IN_SEC);
        }
      }, timeout);
    }
  };

  const close = () => {
    if (barRef.current) {
      clearTimeout(timeoutRef.current);
      barRef.current.classList.remove("show");
      setIsActive(false);
    }
  };

  const notify = (type: string, message: string, timeout: number = 5000) => {
    // push to queue if active
    if (isActive) {
      queueRef.current.push({ type, message, timeout } as Notification);
      return;
    }

    // show notification if no queue
    setIsActive(true);
    next(type, message, timeout);
  };

  useEffect(() => {
    if (!isActive && queueRef.current.length > 0) {
      // get next Notification in queue and update queue
      const { type, message, timeout } =
        queueRef.current.shift() as Notification;

      next(type, message, timeout);
    }
  }, [isActive]);

  return (
    <NotifyProvider value={{ notify } as NotifyContextType}>
      <StyledScope>
        {children}
        <StyledNotify ref={barRef}>
          <p ref={msgRef}></p>
          <span className="close" onClick={close}>
            X
          </span>
        </StyledNotify>
      </StyledScope>
    </NotifyProvider>
  );
};

const StyledScope = styled.main`
  .show {
    transform: translateY(0);
  }

  .error {
    background-color: ${Colors.ERROR};
  }
`;

const StyledNotify = styled.span`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 10vh;
  width: 100%;

  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.9);
  color: ${Colors.WHITE};

  transition: transform ${TRANSITION_TIME}s ease-in-out;
  transform: translateY(10vh);

  span.close {
    font-weight: bold;
    padding: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

//--------------------------------------------------------------//
// Exports
export { useNotify };
export default Notify;
