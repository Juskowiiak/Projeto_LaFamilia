import styled from "styled-components";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Subtitle = styled.h2`
  color: var(--gold-1);
  font-family: "Montserrat", serif;
  font-weight: 400;
  font-size: 1.5rem;
  @media ${breakpoints.l} {
    text-align: center;
  }
  @media ${breakpoints.s} {
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }
`;
