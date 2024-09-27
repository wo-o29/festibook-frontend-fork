import Image from "next/image";
import Link from "next/link";

import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 24rem;
  margin: 0 auto;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
    gap: 1.25rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.2rem;
  }
`;

export const LogoImage = styled(Image)`
  @media ${MOBILE_MEDIA_QUERY} {
    width: 70%;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: center;
    gap: 2.5rem;
  }
`;

export const SocialLogo = styled(Image)`
  @media ${MOBILE_MEDIA_QUERY} {
    width: 3.125rem;
  }
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

  @media ${MOBILE_MEDIA_QUERY} {
    height: 4rem;
  }
`;
