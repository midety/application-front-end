import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  background: rgba(227, 227, 227, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1401px) {
    &:nth-child(2n + 1) {
      background: rgba(0, 0, 0, 0.3);
    }
  }
  @media only screen and (max-width: 1400px) {
    width: 50vw;
    height: 50vw;
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
export const AppImage = styled.img`
  align-self: center;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  pointer-events: none;

  width: 50%;
  height: 50%;
`;

const handleStatusType = (status) => {
  switch (status) {
    case "online":
      return "#A5EEA8";
    case "offline":
      return "#EEA5A5";
    case "unreachable":
    default:
      return "#B8B8B8";
  }
};

const hover = keyframes`
  0% {
    clip-path: polygon(40% 0, 60% 0, 50% 40%, 50% 40%);
  }

  100% {
    clip-path: polygon(0 0, 60% 0, 50% 40%, 0 40%);
  }
`;

export const Indicator = styled.div`
  ${Container}:hover & {
    align-self: flex-start;
    margin-top: 10px;
    height: calc(25% - 10px);
    animation: ${hover} 1s alternate forwards;
  }
  transition: 0.5s;
  margin-top: -20px;
  width: 100%;
  height: calc(25% + 20px);
  background: ${({ status }) => handleStatusType(status)};
  clip-path: polygon(40% 0, 60% 0, 50% 40%, 50% 40%);
`;

export const Link = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
