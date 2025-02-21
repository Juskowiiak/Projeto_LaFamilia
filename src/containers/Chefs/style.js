import styled from "styled-components";
import back from "../../assets/chefs/back.jpg";
import "../../Style/cores.css";
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
      }
    }
  }
`;
export const Cooks = styled.div`
  border: 1px solid lime;
  width: 90%;
  margin-inline: auto;
  height: 80vh;
  margin-bottom: 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: none;
  transition: 0.5s;
  .painel {
    border: 2px solid var(--gold-1);
    height: 70vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.3;
    margin: 10px 20px;
    position: relative;
    transition: 1s;
    display: flex;
    padding: 1.4rem 1.2rem;
    .info {
      gap: 15px;
      transition: 0.5s;
      width: 100%;
      height: 100%;
      display: flex;
      display: none;
      .info-part1 {
        border: 1px solid red;
        width: 30%;
        .picture {
          border: 1px solid cyan;
          width: 90%;
          height: 240px;
          margin-inline: auto;
          margin-bottom: 2rem;
        }
        .nome {
          color: var(--gold-1);
          margin-bottom: 0.5rem;
        }
        .job {
          color: var(--gold-2);
        }
      }
      .info-part2 {
        border: 1px solid green;
        width: 70%;

        h2 {
          color: var(--gold-3);
          margin-bottom: 2rem;
        }
        div {
          h4 {
            color: var(--gold-1);
            text-decoration: underline;
            margin-bottom: 1rem;
          }
          margin-bottom: 3rem;
        }
      }
    }
    .title {
      position: absolute;
      display: flex;
      gap: 1.2rem;
      font-size: 2.5rem;
      top: 45%;
      left: -60%;
      transform: translateY(-50%);
      transform: rotate(270deg);
      font-family: "Marck Script", serif;
      color: var(--gold-2);
      transition: 0.5s;

      &:hover {
        color: var(--gold-4);
        text-decoration: underline;
      }
    }
  }
  .painel.active {
    flex: 5;
    .info {
      display: flex;
    }
    .title {
      display: none;
    }
  }
`;
