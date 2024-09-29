import styled from "@emotion/styled";

export const Form = styled.form`
  margin: 1.25rem 0 0;
  padding: 0 0.25rem;
`;

export const InputBox = styled.div`
  height: 6.5625rem;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Input = styled.input`
  margin: 0.75rem 0 0.25rem;
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 3.5rem;
  border-radius: 6px;
  font-size: 1.125rem;
  outline: none;
  padding: 0.75rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #f33;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: right;
  margin-top: 1.25rem;
`;

export const Button = styled.button`
  width: 6.49031rem;
  height: 2.56775rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    transition: 0.75s;
  }
`;

export const WithdrawButton = styled(Button)`
  background-color: #ffd3d3;
  color: #f33;
`;

export const SubmitButton = styled(Button)`
  background-color: #5534da;
  color: #fff;

  &:disabled {
    background-color: #bbbbbb;
    color: #fff;

    &:hover {
      transform: scale(1);
    }
  }
`;
