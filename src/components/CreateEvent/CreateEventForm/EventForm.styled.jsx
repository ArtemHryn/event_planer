import styled from "styled-components";
import { border, color, layout } from "styled-system";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    padding: 40px 24px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    padding: 40px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    height: 520px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    height: 390px;
  }
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;

  color: ${(p) => p.theme.colors.main};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.medium};
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
  height: 100px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 308px;
  }
  ${layout}

  & > .p-dropdown {
    padding: 8px 12px;
  }
  & > .p-dropdown-label {
    color: ${(p) => p.theme.colors.additional};
    font-family: ${(p) => p.theme.fonts.main};
    font-size: ${(p) => p.theme.fontSizes.medium};
    font-weight: 400;
    line-height: 1.5;
  }
  & > .error > input,
  & > .error {
    border-color: ${(p) => p.theme.colors.hightPriority};
  }
`;

export const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.inActive};
  padding: 16px 36px 16px 12px;

  color: ${(p) => p.theme.colors.additional};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.medium};
  font-weight: 400;
  line-height: 1.5;
  resize: none;
  ${layout}
  ${border}
`;

export const EventFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  padding: 16px 12px;
  margin: 0 auto;
  gap: 16px;

  border-radius: 8px;
  background: ${(p) => p.theme.colors.main};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.medium};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 193px;
    margin: 0 0 0 auto;
  }
`;

export const test = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 520px;
`;

export const Error = styled.p`
  color: ${(p) => p.theme.colors.hightPriority};
  text-align: right;
  font-size: 12px;
  line-height: 1.33;
`;

export const CleanupBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  right: 12px;
  width: 24px;
  height: 24px;
  color: ${(p) => p.theme.colors.main};
  transition: all 0.3s ease;
  ${color}
  &:hover,
  &:focus {
    scale: 1.15;
  }
  & > svg > path {
    stroke: currentColor;
  }
`;
