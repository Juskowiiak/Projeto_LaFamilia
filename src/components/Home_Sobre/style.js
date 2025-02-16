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
        .cards-card-info-title {
          margin-bottom: 3rem;
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
          }
        }
      }
      .cards-card-picture {
        border: 1px solid red;
        min-width: 400px;
        height: 340px;
        @media ${breakpoints.l} {
          height: 400px;
          width: auto;
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
