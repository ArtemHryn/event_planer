import styled from "styled-components";

export const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
  object-position: 50% 50%;
  @media screen and (min-width: ${(p) => p.theme.sizes.tablet}) {
    height: 272px;
    width: 100%;
  }

`;
