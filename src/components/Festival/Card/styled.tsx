import styled from "@emotion/styled";

export const Card = styled.div`
  border-radius: 10px;
  width: 13.75rem;
`;

export const ImageBox = styled.div`
  width: 13.75rem;
  height: 12.5rem;
  border: 1px solid #000;
  position: relative;
`;

export const Label = styled.p<{ isHolding: boolean }>`
  position: absolute;
  top: 3%;
  left: 3%;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;

  ${({ isHolding }) =>
    isHolding
      ? ` background: #ff4e4e;
      color: #fff;`
      : `background: gray;
      color: #fff;`}
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  height: 1.25rem;
  align-items: center;
  position: relative;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 800;
`;

export const KebabButton = styled.button``;

export const Dropdown = styled.ul`
  position: absolute;
  bottom: -80%;
  right: -20%;
  border: 1px solid #000;
  background-color: #fff;
  z-index: 10;
  border-radius: 4px;
`;

export const DropdownItem = styled.li`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.0469rem;

  &:hover {
    background-color: #efefef;
    transition: 0.5s;
  }
`;

export const Region = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: #8c8c8c;
  padding: 0.25rem 0;
`;

export const Date = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
`;
