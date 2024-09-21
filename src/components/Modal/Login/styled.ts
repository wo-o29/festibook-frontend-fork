import Link from "next/link";

import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 24rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
`;

export const SocialBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SocialNavLink = styled(Link)`
  border-radius: 12px;
  height: 4.5rem;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  padding: 0.3125rem;

  &:hover {
    transform: scale(1.05);
    transition: 0.75s;
  }
`;
