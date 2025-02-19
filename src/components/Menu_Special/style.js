import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
import "../../Style/cores.css";
//image
import pict from "../../assets/menu/especialidade/especialidade1.jpg";
export const Container = styled.div`
  border: 1px solid blue;
  position: relative;
  width: 80%;
  height: 100%;
  margin-inline: auto;

  .special {
    border: 1px solid orange;
    margin-top: 5rem;
    display: flex;
    .special-option {
      border: 2px solid green;
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        transition: 0.5s;
        border: 1px solid red;

        display: block;
        width: 100%;
        color: var(--gold-1);
        transition: 0.5s;
        font-family: "Montserrat", serif;
        font-weight: 500;
        cursor: pointer;
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
      border: 2px solid pink;
      width: 75%;
      display: flex;
      .special-info-text {
        padding-inline: 25px;
        h3 {
          font-size: 1.8rem;
          font-family: "Marck Script", serif;
          margin-bottom: 20px;
          color: var(--gold-3);
          letter-spacing: 1.3px;
        }
      }
      .special-info-picture {
        border: 1px solid cyan;
        min-width: 200px;
        height: 200px;
        background-image: url(${pict});
        background-size: cover;
        background-position: center;
        box-shadow: 4px 4px 6px #000;
        @media ${breakpoints.l} {
          min-width: 320px;
          min-height: 300px;
        }
        @media ${breakpoints.s} {
          min-width: 280px;
          min-height: 260px;
          border: 1px solid red;
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
