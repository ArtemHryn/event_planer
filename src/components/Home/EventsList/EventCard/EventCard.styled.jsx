import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxShadow, color, layout } from "styled-system";

export const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 480px;

  background-color: ${(p) => p.theme.colors.white};

  overflow: hidden;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const EventImg = styled.img`
  display: block;
  height: 332px;
  object-fit: cover;
  object-position: 50% 50%;
  ${layout}
  transition: all 0.3s ease;
`;

export const Filters = styled.p`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border-radius: 8px;
  background: ${(p) => p.theme.colors.white};

  color: ${setPriorityColor};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: all 0.3s ease;
  ${color}
  ${boxShadow}
`;

export const DateAndPlace = styled.p`
  color: ${(p) => p.theme.colors.main};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
`;

export const CardTitle = styled.p`
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CardDescription = styled.p`
  color: #49454f;
  font-size: 14px;
  line-height: 1.42;
`;

export const CardButton = styled(Link)`
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  border-radius: 8px;
  background: ${(p) => p.theme.colors.main};

  color: ${(p) => p.theme.colors.white};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;

function setPriorityColor({ priority, theme }) {
  switch (priority) {
    case "High":
      return theme.colors.hightPriority;

    case "Medium":
      return theme.colors.mediumPriority;

    case "Low":
      return theme.colors.lowPriority;
    default:
      return theme.colors.main;
  }
}
