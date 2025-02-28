import styled from "styled-components";
//importar imagem
import back from "../../assets/menu/back.jpg";
//importar files
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-inline: auto;
  margin-bottom: 8rem;
  header {
    height: 90vh;
    margin-top: 10vh;
    position: relative;
    background-image: url(${back});
    background-size: cover;
    background-position: 100% 70%;
    margin-bottom: 8rem;
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
      font-family: "Montserrat", serif;
      font-size: 1.4rem;
    }
    h1 {
      letter-spacing: 1.4px;
      margin-top: 0.5rem;
      font-family: "Marck Script", serif;
      font-size: 3.4rem;
    }
  }
`;
