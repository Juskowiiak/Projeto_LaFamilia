import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
import "../../Style/cores.css";

export const Container = styled.div`
  border: 1px solid blue;
  position: relative;
  width: 100%;
  height: 100%;

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
        a {
          color: var(--gold-1);
          transition: 0.5s;
          font-family: "Montserrat", serif;
          font-weight: 500;
        }
      }
    }
    .special-info {
      border: 2px solid pink;
      width: 75%;
      display: flex;
      .special-info-picture {
        border: 1px solid cyan;
        min-width: 200px;
        height: 200px;
      }
    }
  }
`;
