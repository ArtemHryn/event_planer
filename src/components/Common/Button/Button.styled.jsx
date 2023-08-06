const { default: styled } = require("styled-components");

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 32px;
  font-family: ${(p) => p.theme.fonts.main};
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
  background-color: ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.white};
`;

export const OutlineBtn = styled(Button)`
  border: 1px solid ${(p) => p.theme.colors.main};
  background-color: transparent;
  color: ${(p) => p.theme.colors.main};
`;
