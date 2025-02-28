import styled from "styled-components";
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  width: 90%;
  margin-inline: auto;
  height: 100%;
  position: relative;
  margin-block: 4rem 8rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .part1,
  .part2 {
    display: flex;
    justify-content: space-between;
    @media ${breakpoints.ml} {
      flex-direction: column;
      gap: 1rem;
    }
  }
  .dado {
    width: 30%;
    border: 1px solid rgb(77, 77, 77);
    background-color: var(--dark-2);
    padding: 0.3rem 0.1rem 0 0.2rem;
    p {
      margin-bottom: 0.5rem;
      color: var(--gold-1);
      font-family: "Montserrat", serif;
    }
    input {
      padding: 0.4rem;
      width: 100%;
      outline: none;
      background-color: var(--dark-2);
      color: var(--gold-2);
      border: none;
      font-family: "Montserrat", serif;
    }
    @media ${breakpoints.ml} {
      width: 70%;
      margin-inline: auto;
    }
    @media ${breakpoints.s} {
      width: 100%;
    }
  }
  .botao {
    display: inline-flex;
    background-color: var(--dark-5);
    border: none;
    width: 200px;
    margin-inline: auto;
    padding: 1rem 0.5rem;
    font-family: "Montserrat", serif;
    color: var(--gold-1);
    cursor: pointer;
    border-radius: 10px;
    margin-top: 2rem;
    font-size: 1.2rem;
    transition: 0.4s;
    border: 1px solid var(--dark-5);
    text-align: center;

    &:hover {
      background-color: var(--dark-3);
      border: 1px solid var(--gold-2);
      color: var(--gold-2);
    }
    @media ${breakpoints.s} {
      font-size: 1rem;
      width: 130px;
    }
  }
  @media ${breakpoints.xs} {
    width: 95%;
  }
`;
