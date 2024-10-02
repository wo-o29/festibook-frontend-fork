import Image from "next/image";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Fireworks from "@fireworks-js/react";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const FireworksContainer = styled(Fireworks)`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: #eff3ff;
`;

export const Container = styled.div`
  width: 50rem;
  position: fixed;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    top: 42.5%;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const EarthImage = styled(Image)`
  animation: ${rotate} 480s linear infinite;
  position: fixed;
  top: -520%;
  left: 18%;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 350px;
    top: -500%;
    left: 28%;
  }
`;

export const Text = styled.p`
  color: #3360ff;
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 0.75rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.15rem;
  }
`;

export const SubText = styled.p`
  font-size: 1.75rem;
  color: #85a0ff;
  font-weight: 700;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1rem;
  }
`;
