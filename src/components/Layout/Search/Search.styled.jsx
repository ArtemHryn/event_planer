import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: 8px;
  background: #fff;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 12px;
  gap: 12px;
  margin-top: 24px;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    width: 368px;
    margin-right: 24px;
    margin-top: 0px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    margin-left: auto;

  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  fill: ${(p) => p.theme.colors.main};
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  color: #7b61ff;
  font-family: ${(p) => p.theme.fonts.main};
  font-size: 14px;
  line-height: 1;
  &::placeholder {
    font-size: 14px;
    color: #888;
  }
`;

export const ClearButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
`;

export const CleanUpCross = styled(MdClear)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  fill: ${(p) => p.theme.colors.main};
  width: 24px;
  height: 24px;
`;
