import styled from "styled-components";
import back from "../../assets/chefs/back.jpg";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  overflow-x: none;
  header {
    width: 100%;
    margin-top: 10vh;
    height: 90vh;
    position: relative;
    margin-bottom: 8rem;
    background-image: url(${back});
    background-size: cover;
    background-position: 100% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 20px var(--gold-4);
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.9;
    }
    .title {
      position: relative;
      z-index: 4;
      color: #fff;
      text-align: center;
      h1 {
        letter-spacing: 1.4px;
        margin-top: 0.5rem;
        font-family: "Marck Script", serif;
        font-size: 3rem;
        span {
          color: var(--gold-1);
        }
        @media ${breakpoints.m} {
          font-size: 2.2rem;
          margin-inline: 20px;
        }
      }
    }
  }
`;
