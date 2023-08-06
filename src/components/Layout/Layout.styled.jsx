import styled from "styled-components";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";

export const HeaderTitle = styled(Link)`
  color: #7b61ff;
  font-size: 24px;
  font-weight: 400;
  transition: all 0.3s ease;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    margin-right: 80px;
  }
  @media screen and (min-width: ${(p) => p.theme.sizes.desktop}) {
    margin-right: 0px;
  }
  &:hover,
  :focus {
    scale: 1.05;
  }
`;

export const DropdownLng = styled(Dropdown)`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  width: 69px;
  height: 48px;
  border: none;
  & > .p-dropdown-label {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.p-dropdown .p-dropdown-trigger {
    width: 27px;
  }
`;
