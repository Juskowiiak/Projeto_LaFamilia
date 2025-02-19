import styled from "styled-components";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.ul`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: space-around;
  height: 10vh;
  background-color: #000;
  transition: 0.5s;
  box-shadow: 2px 2px 3px var(--gold-4);
  .picture {
    width: 75px;
    height: 75px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    @media ${breakpoints.m} {
      position: relative;
      left: 0;
      transform: none;
      width: 68px;
      height: 68px;
      top: 50%;
      z-index: 9;
    }
    @media ${breakpoints.s} {
      top: 59%;
      width: 52px;
      height: 52px;
    }
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
    ul {
      display: flex;
      gap: 5px;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gold-1);
        cursor: pointer;
        font-size: 1.2rem;
        &:hover {
          color: var(--gold-2);
        }
        &:hover::after {
          width: 0;
        }
      }
    }
    @media ${breakpoints.m} {
      margin-bottom: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        bottom: 5px;
      }
      &:hover::after {
        width: 70%;
      }
    }
  }
  .Btn {
    position: relative;
    z-index: 5;
    color: var(--gold-1);
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    display: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: var(--gold-3);
    }
    @media ${breakpoints.m} {
      display: flex;
    }
  }
  .menu-1,
  .menu-2 {
    display: flex;
    gap: 40px;
    height: 100%;
    align-items: center;
    transition: 0.5s;
    @media ${breakpoints.m} {
      position: absolute;
      z-index: 5;
      top: 100%;
      background-color: var(--dark-4);
      right: 100%;
      flex-direction: column;
      gap: 0;
      height: 45vh;
      width: 100%;
    }
  }
  .menu-2 {
    @media ${breakpoints.m} {
      top: 55vh;
    }
  }
  @media ${breakpoints.l} {
    justify-content: space-between;
    padding-inline: 3%;
  }
  .abrir {
    right: 0%;
  }
`;
