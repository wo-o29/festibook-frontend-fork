import styled from "@emotion/styled";
import Fireworks from "@fireworks-js/react";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const FireworksContainer = styled(Fireworks)`
  width: 100vw;
  height: calc(100vh - 5px);
`;

export const Container = styled.div`
  @font-face {
    font-family: "ONE-Mobile-POP";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  width: 50rem;
  min-width: 23.4375rem;
  position: fixed;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "ONE-Mobile-POP";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${MOBILE_MEDIA_QUERY} {
    gap: 1rem;
  }
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 7rem;
  background-clip: text;
  background: linear-gradient(to right, #e55d87, #5fc3e4) text;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 3.25rem;
  }
`;

export const TitleEffect = styled.span`
  color: transparent;
`;

export const Text = styled.p`
  font-weight: 800;
  font-size: 3rem;
  background: linear-gradient(to right, #e55d87, #5fc3e4) text;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.75rem;
  }
`;

export const TextEffect = styled.span`
  letter-spacing: 0.0625rem;
  color: transparent;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 14px solid #f3f3f3;
  border-top: 14px solid #ab88af;
  border-radius: 50%;
  width: 6.25rem;
  height: 6.25rem;
  animation: spin 1.5s linear infinite;

  @media ${MOBILE_MEDIA_QUERY} {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #ab88af;
    width: 4.375rem;
    height: 4.375rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg); /* 시작 각도 */
    }
    100% {
      transform: rotate(360deg); /* 끝 각도 */
    }
  }
`;
