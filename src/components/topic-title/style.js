import styled from "styled-components";
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Title = styled.h5`
  color: var(--dark-1);
  margin-bottom: 3px;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", serif;
  font-weight: 300;
  &::after {
    position: absolute;
    content: "";
    width: 120%;
    height: 1px;
    right: -140%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--gold-3);
  }
  @media ${breakpoints.l} {
    width: 100px;
    display: block;
    margin-inline: auto;
    text-align: center;
    margin-bottom: 4px;
    &::before {
      position: absolute;
      content: "";
      width: 120%;
      height: 1px;
      left: -140%;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--gold-3);
    }
  }
  @media ${breakpoints.s} {
    font-size: 0.9rem;
    &::before {
      width: 80%;
      left: -100%;
    }
    &::after {
      width: 80%;
      right: -100%;
    }
  }
`;
