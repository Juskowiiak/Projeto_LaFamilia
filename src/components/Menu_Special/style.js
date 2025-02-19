import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
import "../../Style/cores.css";

export const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin-inline: auto;

  .special {
    margin-top: 5rem;
    display: flex;
    .special-option {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        transition: 0.5s;
        display: block;
        width: 100%;
        color: var(--gold-1);
        transition: 0.5s;
        font-family: "Montserrat", serif;
        font-weight: 500;
        cursor: pointer;
        background-color: var(--dark-5);
        @media ${breakpoints.s} {
          flex: 1;
        }
      }
      li.active {
        color: #fff;
        @media ${breakpoints.s} {
          flex: 4;
        }
      }
      @media ${breakpoints.l} {
        flex-direction: row;
        justify-content: center;
        width: 100%;
        text-align: center;
      }
    }
    .special-info {
      width: 75%;
      display: flex;
      .special-info-text {
        padding-inline: 25px;
        h3 {
          font-size: 1.8rem;
          font-family: "Marck Script", serif;
          margin-bottom: 20px;
          color: var(--gold-3);
          letter-spacing: 1.4px;
          text-shadow: 1px 3px 2px #000;
        }
        p {
          font-family: "Montserrat", serif;
          font-size: 0.9rem;
        }
      }
      .special-info-picture {
        min-width: 300px;
        height: 220px;
        box-shadow: 4px 4px 6px #000;
        img {
          object-fit: cover;
        }
        @media ${breakpoints.l} {
          min-width: 320px;
          min-height: 300px;
        }
        @media ${breakpoints.s} {
          max-width: 280px;
          min-height: 260px;
        }
      }
      @media ${breakpoints.l} {
        flex-direction: column-reverse;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }
    }
    @media ${breakpoints.l} {
      flex-direction: column-reverse;
      gap: 40px;
    }
  }
  @media ${breakpoints.l} {
    width: 95%;
  }
`;
