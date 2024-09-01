import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";
import Fireworks from "@fireworks-js/react";

import { MOBILE_MEDIA_QUERY } from "./const";

export const FireworksContainer = styled(Fireworks)`
  width: 100vw;
  height: calc(100vh - 5px);
`;

export const Container = styled.div`
  width: 50rem;
  position: fixed;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.p`
  font-size: 18.5rem;
  font-weight: 800;
  color: #b6c6ff;
  letter-spacing: 0.8125rem;
  height: 18.75rem;
  position: relative;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10rem;
    height: 10rem;
  }
`;

export const EarthImage = styled(Image)`
  position: absolute;
  left: 29%;
  top: 2%;
  width: 20.5rem;

  @media ${MOBILE_MEDIA_QUERY} {
    left: 37.7%;
    top: -0.5%;
    width: 11.5625rem;
  }
`;

export const Text = styled.p`
  font-size: 2.25rem;
  color: #2c2c2c;
  font-weight: 800;
  margin-bottom: 1.5rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(Link)`
  height: 4rem;
  padding: 0.75rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background-color: #c5d1fa;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.0625rem;

  &:hover {
    background-color: #85a0ff;
    color: #fff;
    transition: 0.7s;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    height: 3.5rem;
    padding: 0.25rem 3rem;
    font-size: 1.2rem;
  }
`;
