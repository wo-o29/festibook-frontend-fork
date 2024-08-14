import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const openEffect = keyframes`
 0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const closeEffect = keyframes`
 0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const Wrap = styled.div<{ isClose: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  width: 34.375rem;
  height: 29.6875rem;
  padding: 1.5rem 1.25rem;
  border: 1px solid #efefef;
  animation: ${({ isClose }) => (isClose ? closeEffect : openEffect)} 0.25s
    ease-in-out;
`;

export const ButtonBox = styled.div`
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: right;

  &:hover {
    transform: rotate(360deg);
  }
`;

export const CloseButton = styled.button`
  height: 1.875rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(180deg);
  }
`;
