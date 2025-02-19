import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
import "../../Style/cores.css";

export const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-inline: auto;
  transition: 0.5s;
  .menu-options {
    margin-block: 6rem 5rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    li {
      font-family: "Marck Script", serif;
      font-weight: 300;
      font-size: 1.4rem;
      display: flex;
      color: var(--gold-1);
      cursor: pointer;
      &:hover {
        color: var(--gold-2);
        text-decoration: underline;
      }

      @media ${breakpoints.ml} {
        font-size: 1.1rem;
      }
    }
    li.active {
      color: var(--gold-2);
      text-decoration: underline;
    }
    @media ${breakpoints.ml} {
      gap: 2rem;
    }
  }
  .ementa {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: none;
    li {
      width: 48%;
      height: 80px;
      display: flex;
      padding-inline-end: 15px;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      box-shadow: 4px 4px 8px var(--dark-5);
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        transform: scale(1.1);
      }
      .info {
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
            font-size: 0.7rem;
          }
        }
        .info-picture {
          border: 2px solid var(--gold-2);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          img {
            border-radius: 50%;
            object-fit: cover;
          }
          @media ${breakpoints.s} {
            width: 55px;
            height: 55px;
          }
        }
      }
      .preco {
        color: var(--gold-2);
        margin-top: 8px;
      }
      @media ${breakpoints.ml} {
        width: 80%;
        margin-inline: auto;
      }
      @media ${breakpoints.s} {
        width: 95%;
      }
    }
    @media ${breakpoints.ml} {
      align-items: start;
      padding-inline: 12px;
      height: 70vh;
      overflow-y: scroll;
    }
    @media ${breakpoints.s} {
      height: 70vh;
      padding-top: 0.5rem;
    }
  }
  @media ${breakpoints.l} {
    width: 95%;
    overflow: default;
  }
`;
