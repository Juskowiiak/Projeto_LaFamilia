//importar biblioteca styled
import styled from "styled-components";
//importar file css
import "../../Style/cores.css";
import "../../Style/breakpoints";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .cards {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .cards-card:last-child {
      flex-direction: row-reverse;
      @media ${breakpoints.l} {
        flex-direction: column-reverse;
      }
    }
    .cards-card {
      border: 1px solid orange;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      transition: 0.5s;
      .cards-card-info {
        border: 3px solid purple;
        .cards-card-info-title {
          margin-bottom: 3rem;
          @media ${breakpoints.s} {
            border: 1px solid yellow;
            margin-bottom: 0rem;
          }
        }
        .cards-card-info-text {
          display: flex;
          flex-direction: column;
          line-height: 1.5rem;
          gap: 10px;
          span {
            color: var(--gold-2);
          }
          p {
            @media ${breakpoints.l} {
              width: 70%;
              margin-inline: auto;
            }
            @media ${breakpoints.m} {
              width: 90%;
            }
          }
        }
      }
      .cards-card-picture {
        min-width: 400px;
        height: 340px;
        transition: 0.5s;
        @media ${breakpoints.l} {
          height: 400px;
          width: auto;
        }
        @media ${breakpoints.m} {
          height: 300px;
        }
        @media ${breakpoints.s} {
          border: 1px solid blue;
          min-width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 90%;
            height: 90%;
          }
        }
        @media ${breakpoints.xs} {
          img {
            width: 70%;
            height: 70%;
          }
        }
      }
      @media ${breakpoints.l} {
        flex-direction: column-reverse;
        p {
          text-align: center;
        }
      }
    }
  }
`;
