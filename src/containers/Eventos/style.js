import styled from "styled-components";
//importar ficheiros
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
//importar imagem
import back2 from "../../assets/eventos/back2.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: none;
  header {
    width: 100%;
    margin-top: 10vh;
    height: 90vh;
    position: relative;
    margin-bottom: 8rem;
    background-image: url(${back2});
    background-size: cover;
    background-position: 100% 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000;
      opacity: 0.78;
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
        text-shadow: 4px 4px 2px #000;
        span {
          color: var(--gold-1);
        }
        @media ${breakpoints.m} {
          font-size: 2.2rem;
          margin-inline: 30px;
        }
      }
    }
  }
  .titles {
    margin-left: 2rem;
    margin-bottom: 2rem;
    @media ${breakpoints.l} {
      margin-left: 0;
      margin-bottom: 3rem;
    }
  }
`;
