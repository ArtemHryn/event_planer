import { BiLeftArrowAlt } from "react-icons/bi";
import styled from "styled-components";

export const LinkBack = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => p.theme.colors.main};
  font-family: Poppins;
  font-size: ${(p) => p.theme.fontSizes.body};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: normal;
  margin-bottom: 24px;
  transition: all 1s ease;
  background-color: transparent;
  &:hover {
    scale: 1.05;
  }
`;

export const LinkBackIcon = styled(BiLeftArrowAlt)`
  width: 24px;
  height: 24px;
`;

export const PageTitle = styled.h2`
  color: ${(p) => p.theme.colors.additional};
  font-size: 24px;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  line-height: 1;
`;
