import styled from "@emotion/styled";

import { TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 120rem;
  min-width: 23.4375rem;
  width: 64rem;
  margin: 2rem auto;

  @media ${TABLET_MEDIA_QUERY} {
    width: 100%;
    padding: 0 1.5rem;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;

  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`;
