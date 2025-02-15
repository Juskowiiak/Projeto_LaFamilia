import styled from "styled-components";
import "../../Style/cores.css";
export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0.5rem 1rem;
  background-color: var(--dark-4);
  .info {
    border: 1px solid yellow;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-block: 2rem;
    .info-card {
      border: 1px solid blue;
      .info-card-title {
        display: flex;
        align-items: center;
        gap: 7px;
        font-family: "Marck Script", serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--gold-1);
        font-weight: 200;
        letter-spacing: 1.3px;
      }
      span {
        color: var(--gold-2);
        margin-right: 5px;
      }
    }
  }
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
    }
  }
`;
