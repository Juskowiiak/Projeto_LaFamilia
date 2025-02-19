import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
import "../../Style/cores.css";

export const Container = styled.div`
  border: 1px solid cyan;
  position: relative;
  width: 80%;
  height: 100%;
  margin-inline: auto;
  transition: 0.5s;
  .menu-options {
    margin-block: 5rem 3rem;
    border: 1px solid blue;
    display: flex;
    gap: 2rem;
    justify-content: center;
    li {
      a {
        color: var(--gold-1);
        transition: 0.5s;
        font-family: "Marck Script", serif;
        font-weight: 300;
        font-size: 1.4rem;

        &:hover {
          color: var(--gold-2);
        }
        &:active {
          color: red;
        }
      }
    }
  }
  .ementa {
    border: 3px solid crimson;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-between;
    li {
      border: 1px solid yellow;
      width: 48%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.3rem;
      .info {
        border: 1px solid orange;
        display: flex;
        gap: 15px;
        .info-text {
          font-family: "Montserrat", serif;
          font-weight: 100;
          padding-top: 8px;
          .info-text-nome {
            color: var(--gold-2);
            font-size: 0.9rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
        .info-picture {
          border: 3px solid var(--gold-2);
          width: 64px;
          height: 64px;
          border-radius: 50%;

          img {
            border-radius: 50%;
          }
        }
      }
      .preco {
        color: var(--gold-2);
        margin-top: 8px;
      }
    }
  }
  @media ${breakpoints.l} {
    width: 95%;
  }
`;
