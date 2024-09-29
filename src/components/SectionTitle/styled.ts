import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1rem;
  }
`;
