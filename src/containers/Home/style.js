//importar biblioteca styled
import styled from "styled-components";
//importar imagem
import backgroundPicture from "../../assets/home/back.png";
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  background-color: var(--dark-4);
  header {
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundPicture});
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        var(--dark-4) 10%,
        transparent 35%,
        transparent 62%,
        var(--dark-4) 100%
      );
      @media ${breakpoints.s} {
      }
    }
    .picture {
      margin-top: 10vh;
      width: 400px;
      height: auto;
      @media ${breakpoints.s} {
        width: 70%;
        margin-top: 0;
      }
    }
    @media ${breakpoints.s} {
      background-size: cover;
    }
  }
`;
export const Sections = styled.div`
  position: relative;
  margin-block: 8rem;
  width: 80%;
  margin-inline: auto;
  transition: 0.5s;
  @media ${breakpoints.l} {
    width: 90%;
  }
  @media ${breakpoints.m} {
    width: 95%;
  }
  @media ${breakpoints.s} {
    margin-block: 0;
  }
`;
