import styled from "@emotion/styled";

import { TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;

  @media ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MOBILE_MEDIA_QUERY} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
