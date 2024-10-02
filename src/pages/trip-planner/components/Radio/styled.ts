import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  color: #2c2c2c;
  margin: 0 0 0.5rem 0.25rem;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const UList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  width: 30%;
  height: 2.75rem;
  position: relative;
`;

export const Input = styled.input`
  display: none;
`;

interface LabelProps {
  selected: boolean;
}

export const Label = styled.label<LabelProps>`
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #dddddd;
  background-color: ${({ selected }) => (selected ? "#dddddd" : "#fff")};
  font-size: 1rem;

  &:hover {
    transform: scale(1.05);
    transition: 0.75s;
  }
`;

export const Asterisk = styled.span`
  font-size: 0.75rem;
  color: red;
`;
