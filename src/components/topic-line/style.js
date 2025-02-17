import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Linha = styled.div`
  text-align: center;
  width: 70%;
  margin-inline: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 18rem;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: var(--gold-1);
  }
  .icon {
    color: var(--gold-1);
    background-color: var(--dark-4);
    position: relative;
    z-index: 2;
    padding-inline: 5px;
    font-size: 1.4rem;
  }
  @media ${breakpoints.l} {
    margin-block: 14rem;
  }
`;
