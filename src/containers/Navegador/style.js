import styled from "styled-components";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.ul`
  border: 1px solid blue;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-around;
  height: 10vh;
  background-color: #000;
  transition: 1s;
  box-shadow: 2px 2px 3px var(--gold-4);
  .menu-1,
  .menu-2 {
    display: flex;
    gap: 40px;
    border: 1px solid yellow;
    height: 100%;
    align-items: center;
  }
  .picture {
    width: 90px;
    height: 90px;
    position: absolute;
    top: -15px;
  }
  li {
    position: relative;
    a {
      position: relative;
      transition: 0.5s;
      color: var(--gold-1);
      font-family: "Montserrat", serif;
      font-weight: 300;
    }
    &::after {
      position: absolute;
      content: "";
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 1px;
      background-color: var(--gold-2);
      transition: 0.5s;
    }
    &:hover::after {
      color: red;
      width: 100%;
    }
  }
  .menu {
    border: 1px solid red;
    color: var(--gold-1);
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    display: none;
    @media ${breakpoints.l} {
    }
  }
`;
