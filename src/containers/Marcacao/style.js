import styled from "styled-components";
//importar ficheiros
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--gold-1);
    text-shadow: 2px 2px 2px #000;
    font-size: 2.6rem;
    @media ${breakpoints.m} {
      font-size: 2rem;
    }
    @media ${breakpoints.s} {
      font-size: 1.4rem;
    }
  }
`;
