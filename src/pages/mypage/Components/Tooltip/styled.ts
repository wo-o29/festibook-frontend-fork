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

  background-color: #fff;
  border: 1px solid #8c8c8c;
  border-radius: 4px;
  z-index: 10;
  padding: 0.5rem 0.75rem;
`;

export const TooltipText = styled.div`
  position: relative;
  color: #4f4f4f;
  white-space: nowrap;
  font-size: 0.8125rem;
  font-weight: 500;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.6875rem;
  }
`;

export const Triangle = styled.p`
  position: absolute;
  top: 150%;
  left: 2%;
  border-bottom: 12px solid transparent;
  border-top: 12px solid #bbbbbb;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;

  @media ${MOBILE_MEDIA_QUERY} {
    top: 155%;
    border-bottom: 11px solid transparent;
    border-top: 11px solid #bbbbbb;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
  }
`;
