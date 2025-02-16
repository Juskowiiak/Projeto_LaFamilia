import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Linha = styled.div`
  position: relative;
  width: 70%;
  background-color: var(--gold-1);
  height: 0.5px;
  margin-inline: auto;
  margin-block: 14rem;
  border-radius: 10px;
  @media ${breakpoints.l} {
    margin-block: 10rem;
  }
`;
