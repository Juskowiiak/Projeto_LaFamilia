import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0.5rem 1rem;
  background-color: var(--dark-5);

  .info {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-block: 2rem;
    .info-card {
      .info-card-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "Marck Script", serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--gold-1);
        font-weight: 200;
        letter-spacing: 1.3px;
        @media ${breakpoints.s} {
          justify-content: center;
        }
        @media ${breakpoints.xs} {
          font-size: 1rem;
          text-align: center;
          justify-content: center;
        }
      }
      .info-card-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      span {
        color: var(--gold-2);
        margin-right: 5px;
      }
      @media ${breakpoints.s} {
        text-align: center;
      }
    }
    @media ${breakpoints.m} {
      flex-wrap: wrap;
      gap: 10px;
    }
    @media ${breakpoints.s} {
      gap: 50px;
    }
    @media ${breakpoints.xs} {
      flex-direction: column;
    }
  }
  //_________________________________________Direitos

  .rights {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-family: "Marck Script", serif;
      margin-inline: 5px 3px;
      font-weight: 300;
    }
    p:last-child {
      font-size: 12px;
      span {
        color: var(--gold-4);
      }
      @media ${breakpoints.s} {
        font-size: 8px;
      }
    }
    @media ${breakpoints.s} {
      font-size: 10px;
    }
  }
`;
