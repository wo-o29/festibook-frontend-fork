import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Box = styled.div`
  position: relative;

  &:hover > div {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const Tooltip = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: -150%;
  left: -100%;
  width: 25rem;
  background-color: #fff;
  border: 1px solid #8c8c8c;
  border-radius: 4px;
  z-index: 10;
  padding: 0.5rem 0.75rem;

  @media screen and (max-width: 500px) {
    width: 14rem;
    word-break: keep-all;
    top: -210%;
    left: -80%;
  }
`;

export const TooltipText = styled.div`
  position: relative;
  color: #4f4f4f;
  font-size: 0.8125rem;
  font-weight: 500;
`;

export const Triangle = styled.p`
  position: absolute;
  top: 150%;
  left: 3%;
  border-bottom: 12px solid transparent;
  border-top: 12px solid #bbbbbb;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;

  @media screen and (max-width: 500px) {
    top: 128%;
  }
`;
