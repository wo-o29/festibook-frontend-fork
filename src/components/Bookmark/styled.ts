import Link from "next/link";

import styled from "@emotion/styled";

export const Section = styled.section`
  border-radius: 16px;
  border: 1px solid #8c8c8c;
  min-height: 20rem;
  padding: 0.75rem 1rem 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
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
