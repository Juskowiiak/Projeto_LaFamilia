import styled from "styled-components";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Titulo = styled.h2`
  color: var(--gold-2);
  text-align: center;
  font-size: 2.4rem;
  text-shadow: 3px 3px 3px #000;
  margin-bottom: 8rem;
  font-family: "Montserrat", serif;
  font-weight: 300;

  @media ${breakpoints.s} {
    margin-top: 8rem;
  }
`;
