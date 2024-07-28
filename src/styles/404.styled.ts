import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";

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
  letter-spacing: 10px;
  height: 300px;
  position: relative;
`;

export const EarthImage = styled(Image)`
  position: absolute;
  left: 29.3%;
  top: -3%;
`;

export const Text = styled.p`
  font-size: 2.25rem;
  color: #2c2c2c;
  font-weight: 800;
  margin-bottom: 1.5rem;
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
  background-color: #d3ddff;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.0625rem;
  transition: all 0.7s;

  &:hover {
    background-color: #85a0ff;
    color: #fff;
  }
`;
