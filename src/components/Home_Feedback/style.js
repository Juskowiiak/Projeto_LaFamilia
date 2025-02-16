import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: scroll;
  padding-bottom: 7rem;
  .comments {
    margin-top: 3rem;
    display: inline-flex;
    gap: 30px;
    .comments-card {
      border: 1px solid blue;
      width: 300px;
      position: relative;
      padding: 1rem 1rem 2.4rem 1rem;
      border-radius: 5px;
      background-color: var(--dark-2);
      .comments-card-text-icon {
        margin-inline: 10px;
        color: var(--gold-4);
      }
      .comments-card-info {
        border: 1px solid red;
        position: absolute;
        bottom: -55%;
        .comments-card-info-picture {
          border: 1px solid cyan;
          height: 60px;
          width: 60px;
          margin-bottom: 10px;
          border-radius: 50%;
          img {
            object-fit: cover;
            border-radius: 50%;
          }
        }
        .comments-card-info-text {
          h3 {
            margin-bottom: 1px;
            color: var(--gold-2);
            font-family: "Montserrat", serif;
          }
          p {
            font-family: "Montserrat", serif;
            font-size: 0.6rem;
            font-size: 300;
          }
        }
      }
    }
  }
`;
