import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 25rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const SocialBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SocialButton = styled.button`
  height: 52px;
  border-radius: 4px;
  border: 1px solid #dddddd;

  &:hover {
    transform: scale(1.1);
    transition: 0.75s;
  }
`;
