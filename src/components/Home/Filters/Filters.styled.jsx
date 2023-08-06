import styled from "styled-components";
import { border, color, layout, space } from "styled-system";
import { CiFilter } from "react-icons/ci";

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  width: 158px;
  ${layout}
`;

export const ListElement = styled.li`
  border-top: 1px solid #aca7c3;
  ${border}
`;

export const FilterListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;

  padding: 8px 24px;

  color: #aca7c3;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  transition: all 250ms linear;
  ${border}
  ${color}
  &:hover, &:focus {
    scale: 1.05;
  }
`;

export const FilterListHeader = styled.p`
  padding: 16px 24px;
  color: #7b61ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChoseFilter = styled.p`
  display: none;
  color: #7b61ff;

  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    display: block;
    margin-right: 16px;
    ${color}
  }
  ${space}
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 16px;
  transition: all 250ms linear;
  text-decoration: none;
  ${color}
  &:hover, &:focus {
    scale: 1.05;
  }
`;

export const FilterIcon = styled(CiFilter)`
  fill: ${(p) => (p.fill ? p.fill : p.theme.colors.main)};
  width: 20px;
  height: 20px;
  rotate: ${(p) => p.rotate};
`;

export const SortByArrows = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
`;
