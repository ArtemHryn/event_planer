const { default: styled } = require("styled-components");

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 32px;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FilledBtn = styled(Button)`
  background-color: #7b61ff;
  color: #fff;
`;

export const OutlineBtn = styled(Button)`
  border: 1px solid #7b61ff;
  background-color: transparent;
  color: #7b61ff;
`;
