import Image from "next/image";

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
`;

export const Label = styled.label`
  color: #2c2c2c;
  display: block;
  margin: 0 0 0.5rem 0.25rem;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const InputBox = styled.div`
  position: relative;
  height: 100%;
  height: 2.75rem;
`;

export const Icon = styled(Image)`
  position: absolute;
  top: 28%;
  left: 0.75rem;
`;

export const Input = styled.input`
  padding: 1rem 0.5rem 1rem 2.25rem;
  border: 1px solid #dddddd;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #2c2c2c;
  }
`;

export const Asterisk = styled.span`
  font-size: 0.75rem;
  color: red;
  padding-left: 0.25rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #f33;
  padding: 0.25rem 0 0 0.25rem;
`;
