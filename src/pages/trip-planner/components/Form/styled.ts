import styled from "@emotion/styled";

import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from "@/styles/const";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  width: 100%;
  transform: translateX(-50%);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.75rem 0;
  text-align: center;
`;

export const Form = styled.form`
  border: 1px solid #dddddd;
  padding: 1rem 2rem;
  width: 60%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 280px;

  @media ${TABLET_MEDIA_QUERY} {
    width: 80%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  width: 20rem;
  border: 1px solid #b6c6ff;
  height: 3rem;
  border-radius: 8px;
  margin: 0.75rem auto 1rem;
  font-weight: 600;
  font-size: 1rem;
  background-color: #d3ddff;

  &:disabled {
    border: 1px solid #bbbbbb;
    background-color: #dddddd;

    &:hover {
      background-color: #dddddd;
      color: #bbbbbb;
    }
  }

  &:hover {
    background-color: #85a0ff;
    color: #fff;
    transition: 0.75s;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 100%;
  }
`;
