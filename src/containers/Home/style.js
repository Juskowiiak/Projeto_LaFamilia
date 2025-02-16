import styled from "styled-components";
import backgroundPicture from "../../assets/home/back.png";
import "../../Style/cores.css";
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
    .title {
      border: 1px solid blue;
      text-align: center;
      position: relative;
      z-index: 2;
      padding-inline: 5rem;
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        bottom: -20px;
        left: 50%;
        background-color: #fff;
        transform: translateX(-50%);
      }
      h1 {
        font-size: 4rem;
        letter-spacing: 2px;
        color: var(--gold-1);
        text-shadow: 3px 3px 3px #000;
        font-family: "Marck Script", serif;
      }
      p {
        font-size: 2rem;
        color: #fff;
        margin-bottom: 10px;
        font-family: "Montserrat", serif;
      }
    }
  }
`;
export const Sections = styled.div`
  border: 1px solid green;
  position: relative;
  margin-block: 8rem;
  width: 80%;
  margin-inline: auto;
`;
