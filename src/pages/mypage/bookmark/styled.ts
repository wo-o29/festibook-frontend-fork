import styled from "@emotion/styled";

import { TABLET_MEDIA_QUERY } from "@/styles/const";

export const Container = styled.main`
  max-width: 120rem;
  min-width: 23.4375rem;
  width: 64rem;
  margin: 3.5rem auto 0;
  padding: 0 1rem;

  @media ${TABLET_MEDIA_QUERY} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5625rem;
  font-weight: 700;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
  margin-bottom: 2rem;
`;
