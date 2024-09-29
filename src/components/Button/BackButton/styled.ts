import styled from "@emotion/styled";

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding-top: 0.22rem;

  &:hover {
    animation: move-left 1s ease infinite;
  }

  @keyframes move-left {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
