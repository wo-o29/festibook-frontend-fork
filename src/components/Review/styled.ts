import Link from "next/link";

import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Section = styled.section`
  border-radius: 16px;
  border: 1px solid #8c8c8c;
  height: 15rem;
  width: 55%;
  padding: 0.75rem 1rem 0 1rem;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const MoreLink = styled(Link)`
  font-size: 0.95rem;
  color: #696969;
`;
