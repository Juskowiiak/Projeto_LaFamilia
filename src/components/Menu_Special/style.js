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
      width: 15%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        transition: 0.5s;
        display: flex;
        justify-content: center;
        width: 80%;
        color: var(--gold-1);
        transition: 1s;
        font-family: "Montserrat", serif;
        font-weight: 500;
        cursor: pointer;
        padding: 0.5rem 1rem;
        background-color: var(--dark-5);
        box-shadow: 0.2px 0.2px 3px var(--gold-1);
        &:hover {
          background-color: var(--gold-1);
          box-shadow: 0.2px 0.2px 3px var(--dark-5);
          color: var(--dark-5);
        }
        @media ${breakpoints.s} {
          width: 120px;
        }
      }

      @media ${breakpoints.l} {
        flex-direction: row;
        justify-content: center;
        width: 100%;
        gap: 10px;
      }
      @media ${breakpoints.s} {
        flex-wrap: wrap;
      }
    }
    .special-info {
      width: 85%;
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
          @media ${breakpoints.s} {
            font-size: 1.6rem;
          }
        }
        p {
          font-family: "Montserrat", serif;
          font-size: 0.8rem;
          width: 100%;
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
          max-width: 60%;
          min-height: 200px;
        }
        @media ${breakpoints.xs} {
          min-width: 90%;
          border: 1px solid blue;
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
