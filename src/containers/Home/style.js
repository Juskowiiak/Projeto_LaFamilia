//importar biblioteca styled
import styled from "styled-components";
//importar imagem
import backgroundPicture from "../../assets/home/back.jpeg";
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  border: 1px solid red;
  background-color: var(--dark-4);
  header {
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundPicture});
    color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
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
    }
    .picture {
      margin-top: 10vh;
      width: 400px;
      height: auto;
    }
  }
`;
export const Sections = styled.div`
  border: 1px solid green;
  position: relative;
  margin-block: 8rem;
  width: 80%;
  margin-inline: auto;
  transition: 0.5s;
  @media ${breakpoints.l} {
    width: 90%;
  }
`;
