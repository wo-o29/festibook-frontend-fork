import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Section = styled.section`
  width: 45%;
  border-radius: 16px;
  border: 1px solid #8c8c8c;
  padding: 0.75rem 1rem 0 1rem;
  height: 15rem;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }
`;
