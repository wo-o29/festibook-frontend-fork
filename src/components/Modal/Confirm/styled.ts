import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  padding-top: 0.75rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.5rem;
  }
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 3.5rem 0 0.5rem;
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1.25rem;
    margin: 2.25rem 0 0.5rem;
  }
`;

export const SubText = styled.p`
  color: #696969;
  font-size: 0.95rem;
  text-align: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.9rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.75rem;

  @media ${MOBILE_MEDIA_QUERY} {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  width: 6.49031rem;
  height: 2.56775rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  background-color: #ffd3d3;
  color: #f33;

  &:hover {
    transform: scale(1.05);
    transition: 0.75s;
  }
`;
